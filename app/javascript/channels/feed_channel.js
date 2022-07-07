import consumer from "./consumer";

const initFeedCable = () => {
  const feed = document.getElementById('feed');
  const feedPosts = document.getElementById('feed__posts');

  if (feed) {
    consumer.subscriptions.create('FeedChannel', {
      received(data) {
        feedPosts.insertAdjacentHTML('afterbegin', data)
      }
    })
  }
};

export default initFeedCable;
