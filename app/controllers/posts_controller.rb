require 'open-uri'

class PostsController < ApplicationController
  include ActionView::Helpers::DateHelper
  layout "gifs", only: :gif
  before_action :set_post, only: :destroy

  def index
    @posts = Post.includes(:user).order(updated_at: :desc)
    @like = Like.new
  end

  def new
    @post = Post.new
    authorize @post
  end

  def create
    @posts = Post.all.order(updated_at: :desc)
    @post = Post.new(post_params)
    @post.user = current_user
    @post.group = post_params[:group] if params[:group].present?
    authorize @post
    if @post.save
      if @post.temp_gif_url.present?
        file = URI.open(@post.temp_gif_url)
        @post.photos.attach(io: file, filename: 'some-image.gif', content_type: 'image/gif')
      end
      FeedChannel.broadcast_to(
        'everyone',
        render_to_string(partial: 'posts/post', locals: { post: @post, posts: @posts })
      )
      redirect_to request.referrer
      # redirect_to feed_users_path
    else
      @user = current_user
      @chat_memberships = ChatMembership.where(user: @user)
      render 'users/feed'
    end
  end

  def gif
    authorize Post
  end

  def destroy
    @post = Post.find(params[:id])
    authorize @post
    if @post.destroy
      redirect_to request.referrer
      flash[:alert] = "Post deleted"
    else
      render :feed
    end

  end

  private

  def set_post
  end

  def post_params
    params.require(:post).permit(:content, :user, :group, :temp_gif_url, photos: [])
  end
end
