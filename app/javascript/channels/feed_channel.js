import consumer from "./consumer";

const initFeedCable = () => {
  const feed = document.getElementById('feed');

  if (feed) {
    console.log('subscribe user');
    consumer.subscriptions.create('FeedChannel', {
      received(data) {
        console.log(data)
      }
    })
  }
};

export default initFeedCable;
