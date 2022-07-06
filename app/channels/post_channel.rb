class PostChannel < ApplicationCable::Channel
  def subscribed
    stream_for "everyone"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
