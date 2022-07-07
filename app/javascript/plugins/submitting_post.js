const submitOnShiftEnter = () => {
  // click button
  const textArea = document.getElementById('post_content');
  if(textArea) {
    textArea.addEventListener('keydown', (event) => {
      if (document.activeElement === textArea) {
        if (event.code === 'Enter' && event.ctrlKey) {
          const btnSubmit = document.getElementById('post-submit');
          btnSubmit.click();
        }
      }
    })
  }
  // btnSubmit.click();
}


const submittingPost = () => {

  // const postButton = document.getElementById('post-submit')
  // postButton.addEventListener('click', (event) => {
  //   postButton.value = "Test"
  //
  // })
  const post = document.querySelector('#new_post');
  if(post) {
    post.addEventListener('submit', (event) => {
      event.preventDefault();
      document.querySelector('body').style.cursor = "wait"
      const newPostContainer = document.querySelector('.post--container')
      console.log(newPostContainer)
      newPostContainer.innerHTML = ""
      newPostContainer.innerHTML = "<img src='http://res.cloudinary.com/rent-an-instrument/image/upload/v1623880328/pebtsyvvxdpltxof18ja.png' alt='Submitting post' style='display: block; margin: 0 auto;' width='126px' height='126px'><br><p class='text-center'>We are processing your post</p>"
    })
  }
  submitOnShiftEnter();
}

export { submittingPost }
