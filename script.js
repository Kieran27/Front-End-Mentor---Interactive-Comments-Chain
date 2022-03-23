const userComment = document.getElementById('user-comment-input');
const modal = document.querySelector('.warning-modal');
const commentsContainer = document.querySelector('.comments-container');
const userReplyComment = document.querySelector('.user-reply');
const userReplyText = userReplyComment.querySelector('textarea');
let hasComment = false;


// Code Determining Vote System
window.addEventListener('load', voteSystemExisting);

function voteSystemExisting() {
  document.querySelectorAll('.comment').forEach(element => {
    let upVoted = false;
    let downVoted = false;
    element.querySelectorAll('.vote-system').forEach(e => {
      e.addEventListener('click', function(event) {
        let choice = event.target;
        let voteNumber = e.querySelector('.vote-system-text');
        let voteInteger = parseInt(voteNumber.textContent);

        if (choice.id === 'upvotebutton') {
          if (upVoted) {
            upVoted = !upVoted;
            voteInteger -= 1;
            element.querySelectorAll('.vote-system-text').forEach(value => {
              value.innerText = voteInteger
            })
            element.querySelectorAll('.vote-system').forEach(item => {
              item.classList.toggle('upvoted');
            })

          } else if (downVoted) {
            voteInteger += 2;
            element.querySelectorAll('.vote-system-text').forEach(value => {
              value.innerText = voteInteger
            })
            downVoted = false;
            upVoted = true;
            element.querySelectorAll('.vote-system').forEach(item => {
              item.classList.toggle('upvoted');
              item.classList.toggle('downvoted');
            })

          } else {
            voteInteger += 1;
            element.querySelectorAll('.vote-system-text').forEach(value => {
              value.innerText = voteInteger
            })
            upVoted = true;
            element.querySelectorAll('.vote-system').forEach(item => {
              item.classList.toggle('upvoted');
            })
          }

        } else if (choice.id === 'downvotebutton') {
          if (downVoted) {
            downVoted = !downVoted
            voteInteger += 1;
            element.querySelectorAll('.vote-system-text').forEach(value => {
              value.innerText = voteInteger
            })
            element.querySelectorAll('.vote-system').forEach(item => {
              item.classList.toggle('downvoted');
            })

          } else if (upVoted) {
            voteInteger -= 2;
            element.querySelectorAll('.vote-system-text').forEach(value => {
              value.innerText = voteInteger
            })
            downVoted = true;
            upVoted = false;
            element.querySelectorAll('.vote-system').forEach(item => {
              item.classList.toggle('upvoted');
              item.classList.toggle('downvoted');
            })

          } else {
            voteInteger -= 1;
            element.querySelectorAll('.vote-system-text').forEach(value => {
              value.innerText = voteInteger
            })
            downVoted = true;
            element.querySelectorAll('.vote-system').forEach(item => {
              item.classList.toggle('downvoted');
            })
          }

        }
      })
    })
  });
}


// Code Block for vote system for newly created Elements

function voteSystemNew(appendedNewReply) {
  let upVoted = false;
  let downVoted = false;
  appendedNewReply.querySelectorAll('.vote-system').forEach(e => {
    e.addEventListener('click', function(event) {
      let choice = event.target;
      let voteNumber = e.querySelector('.vote-system-text');
      let voteInteger = parseInt(voteNumber.textContent);

      if (choice.id === 'upvotebutton') {
        if (upVoted) {
          upVoted = !upVoted;
          voteInteger -= 1;
          appendedNewReply.querySelectorAll('.vote-system-text').forEach(value => {
            value.innerText = voteInteger
          })
          appendedNewReply.querySelectorAll('.vote-system').forEach(item => {
            item.classList.toggle('upvoted');
          })

        } else if (downVoted) {
          voteInteger += 2;
          appendedNewReply.querySelectorAll('.vote-system-text').forEach(value => {
            value.innerText = voteInteger
          })
          downVoted = false;
          upVoted = true;
          appendedNewReply.querySelectorAll('.vote-system').forEach(item => {
            item.classList.toggle('upvoted');
            item.classList.toggle('downvoted');
          })

        } else {
          voteInteger += 1;
          appendedNewReply.querySelectorAll('.vote-system-text').forEach(value => {
            value.innerText = voteInteger
          })
          upVoted = true;
          appendedNewReply.querySelectorAll('.vote-system').forEach(item => {
            item.classList.toggle('upvoted');
          })
        }

      } else if (choice.id === 'downvotebutton') {
        if (downVoted) {
          downVoted = !downVoted
          voteInteger += 1;
          appendedNewReply.querySelectorAll('.vote-system-text').forEach(value => {
            value.innerText = voteInteger
          })
          appendedNewReply.querySelectorAll('.vote-system').forEach(item => {
            item.classList.toggle('downvoted');
          })

        } else if (upVoted) {
          voteInteger -= 2;
          appendedNewReply.querySelectorAll('.vote-system-text').forEach(value => {
            value.innerText = voteInteger
          })
          downVoted = true;
          upVoted = false;
          appendedNewReply.querySelectorAll('.vote-system').forEach(item => {
            item.classList.toggle('downvoted');
            item.classList.toggle('upvoted');
          })

        } else {
          voteInteger -= 1;
          appendedNewReply.querySelectorAll('.vote-system-text').forEach(value => {
            value.innerText = voteInteger
          })
          downVoted = true;
          appendedNewReply.querySelectorAll('.vote-system').forEach(item => {
            item.classList.toggle('downvoted');
          })
        }
      }
    })
  })
}



// Code Block to generate new comments by responding to bottom Block

userReplyComment.querySelectorAll('.send-button').forEach(element => {
  element.addEventListener('click', function() {
    const appendedNewReply = document.createElement('article');
    appendedNewReply.classList.add('comment');
    appendedNewReply.insertAdjacentHTML("afterbegin", replyHTML);
    appendedNewReply.querySelector('p').innerText = userReplyText.value;

    if (userReplyText.value === "") {
      alert('Please input valid text!')
    } else {
      commentsContainer.insertBefore(appendedNewReply, userReplyComment);
      userReplyText.value = ""
      voteSystemNew(appendedNewReply)
      editDelete(appendedNewReply);
    }

  })
})

// Code dealing with existing user-reply

const appendedNewReply = document.querySelector('.user-made-reply');
editDelete(appendedNewReply);


// Code Setting Up Reply Chain

document.querySelectorAll('.comment').forEach(comment => {

  comment.querySelectorAll('.reply-system').forEach(e => {
    e.addEventListener('click', function() {
      if (hasComment) {
        alert("Please publish your first comment before creating another");
      } else {
        const newReply = document.createElement('article');
        newReply.classList.add('user-reply');

        const testHTML =
          `
        <div class="user-reply-body">
          <span><img class='commenter-avatar' id= 'user-reply-img' src="images/avatars/image-juliusomo.png" alt="avatar-juliusomo"></span>
          <textarea id='user-comment-input' name="name" rows="8" cols="80" placeholder="Add a comment..."></textarea>
          <span><button class='send-button created'  id= 'user-reply-send'>Send</button></span>
        </div>
        <div class="user-reply-footer">
          <span><img class='commenter-avatar' src="images/avatars/image-juliusomo.png" alt="avatar-juliusomo"></span>
          <span><button class='send-button created'>Send</button></span>
        </div>

        `


        newReply.insertAdjacentHTML("afterbegin", testHTML)
        let text = newReply.querySelector('textarea');

        comment.after(newReply);
        addNewComment(newReply, comment, text, hasComment);
        hasComment = true;
      }

    })
  })
})

function addNewComment(newReply, comment, text) {
  newReply.querySelectorAll('.send-button').forEach(element => {
    element.addEventListener('click', function() {
      const appendedNewReply = document.createElement('article');
      appendedNewReply.classList.add('comment', 'reply', 'user-made-reply');

      let commenterName = comment.querySelector('.commenter-name').innerText;

      appendedNewReply.insertAdjacentHTML("afterbegin", replyHTML);
      appendedNewReply.querySelector('p').innerText = `@${commenterName} ${text.value}`;

      if (text.value === "") {
        alert('Cannot reply with no text!')
      } else {
        commentsContainer.insertBefore(appendedNewReply, document.querySelector('.user-reply'));
        newReply.remove();
        hasComment = false;
        voteSystemNew(appendedNewReply)
        editDelete(appendedNewReply);
      }


    })
  })
}

// Code sorting out user deletes and edits

function editDelete(appendedNewReply) {
  appendedNewReply.querySelectorAll('.edit-system').forEach(e => {
    e.addEventListener('click', function(event) {
      let choice = event.target;
      if (choice.id === 'delete') {
        modal.style.display = 'block';
        modalFunction(appendedNewReply);
      } else if (choice.id === 'edit') {
        editFunction(appendedNewReply);
      }
    })
  })
}

function modalFunction(appendedNewReply) {
  modal.querySelector('.modal-buttons').addEventListener('click', function(event) {
    if (event.target.id === 'cancel') {
      modal.style.display = 'none';
    } else if (event.target.id === 'accept') {
      modal.style.display = 'none';
      appendedNewReply.remove();
    } else {
      event.preventDefault();
    }
  })
}

function editFunction(appendedNewReply) {
  const textValue = appendedNewReply.querySelector('p');
  appendedNewReply.style.display = 'none';
  const newReply = document.createElement('article');
  newReply.classList.add('user-reply');

  const testHTML =
    `
    <div class="user-reply-body">
      <span><img class='commenter-avatar' id= 'user-reply-img' src="images/avatars/image-juliusomo.png" alt="avatar-juliusomo"></span>
      <textarea id='user-comment-input' name="name" rows="8" cols="80" placeholder="Add a comment...">${textValue.textContent}</textarea>
      <span><button class='send-button created'  id= 'user-reply-send'>Send</button></span>
    </div>
    <div class="user-reply-footer">
      <span><img class='commenter-avatar' src="images/avatars/image-juliusomo.png" alt="avatar-juliusomo"></span>
      <span><button class='send-button created'>Send</button></span>
    </div>

    `
  newReply.insertAdjacentHTML("afterbegin", testHTML)

  commentsContainer.insertBefore(newReply, appendedNewReply);

  newReply.querySelectorAll('.send-button').forEach(element => {
    element.addEventListener('click', function() {
      appendedNewReply.style.display = 'flex';
      appendedNewReply.querySelector('p').textContent = newReply.querySelector('textarea').value;
      newReply.remove();

    })
  })

}





const replyHTML = `
<div class="comment-vote-container">
  <div class="vote-system" id='vote-system-desktop'>
  <button id='upvotebutton'> <img src="images/icon-plus.svg" id='upvotebutton' alt="icon-plus-img"> </button>
  <span class='vote-system-text'>0</span>
  <button id='downvotebutton'> <img src="images/icon-minus.svg" id='downvotebutton' alt="icon-down-img"> </button>
  </div>
</div>
<div class="comment-content-container">
  <div class="comment-header">
    <div class="comment-header-userdata">
    <span><img class='commenter-avatar' src="images/avatars/image-juliusomo.png" alt="avatar-juliusomo"></span>
    <span class='commenter-name'>juliusomo</span>
    <span class="you">you</span>
    <span class='commenter-date'>Just now</span>
    </div>
    <div class="edit-system" id='comment-header-reply'>
      <div class="delete-container" id='delete'>
        <span class="icon-class" id='delete'> <img class='icon' id='delete' src="images/icon-delete.svg" alt=""></span>
        <span class='reply-system-text' id='delete'>Delete</span>
      </div>
      <div class="edit-container" id='edit'>
        <span class="icon-class" id='edit'> <img class='icon'id='edit' src="images/icon-edit.svg" alt=""></span>
        <span class='reply-system-text' id='edit'>Edit</span>
      </div>
    </div>
    </div>
    <div class="comment-text-content">
    <p>
       I couldn't agree more with this. Evverything moves so fast and it always seems like
       everyone knows the newest libray/framework. But the fundamentals are what stay constant.
    </p>
    </div>
    <div class="comment-footer">
      <div class="vote-system">
      <button id='upvotebutton'> <img src="images/icon-plus.svg" id='upvotebutton' alt="icon-plus-img"> </button>
      <span class='vote-system-text'>0</span>
      <button id='downvotebutton'> <img src="images/icon-minus.svg" id='downvotebutton' alt="icon-down-img"> </button>
      </div>
      <div class="edit-system">
      <div class="delete-container" id='delete'>
        <span class="icon-class" id='delete'> <img class='icon' id='delete' src="images/icon-delete.svg" alt=""></span>
        <span class='reply-system-text' id='delete'>Delete</span>
      </div>
      <div class="edit-container" id='edit'>
        <span class="icon-class" id='edit'> <img class='icon'id='edit' src="images/icon-edit.svg" alt=""></span>
        <span class='reply-system-text' id='edit'>Edit</span>
      </div>
      </div>
    </div>
</div>
`
