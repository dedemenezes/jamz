import consumer from './consumer';

const initLikeCable = () => {
  consumer.subscriptions.create(
    { channel: 'LikeChannel' },
    { received(data) {
      const dataObject = JSON.parse(data)
      const post = document.getElementById(`post-${dataObject.postId}`)
      const likesCount = post.querySelector('#likes-count')
      likesCount.innerText = dataObject.likes
      }
    }
  );
}

export default initLikeCable;
