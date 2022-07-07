class LikeChannel < ApplicationCable::Channel
  def subscribed
    # binding.pry
    stream_from "like_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
