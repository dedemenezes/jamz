import consumer from "./consumer";

const initPostCable = () => {
  const feed = document.getElementById('feed');
  const feedPosts = document.getElementById('feed__posts');

  if (feed) {
    console.log('subscribe user');
    consumer.subscriptions.create('PostChannel', {
      received(data) {
        feedPosts.insertAdjacentHTML('afterbegin', data)
      }
    })
  }
};

export default initPostCable;
