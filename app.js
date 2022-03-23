

const userComment = document.getElementById('user-comment-input');
const modal = document.querySelector('.warning-modal');


window.addEventListener('load', voteSystem);

function voteSystem() {
  document.querySelectorAll('.comment').forEach(element => {
    console.log(element);
    element.querySelectorAll('.vote-system').forEach(e => {
      e.addEventListener('click', function(event) {
        let choice = event.target;
        let voteNumber = e.querySelector('.vote-system-text');
        let voteInteger = parseInt(voteNumber.textContent);
        let upVoted = false;
        let downVoted = false;
        if (choice.id === 'upvotebutton' && upVoted == false) {
          voteInteger+=1;
          voteNumber.textContent = voteInteger;
          upVoted = true;
          console.log(upVoted);
        } else if (choice.id === 'upvotebutton' && upVoted == true)  {
          console.log('Success!')
        } else if (choice.id === 'downvotebutton')  {
          voteInteger--;
          voteNumber.textContent = voteInteger;
          downVoted = true;
          console.log(downVoted);
        }
      })
    })
  });
}

// Code to Organise upvote/downvote system

function voteSystem() {
  document.querySelectorAll('.comment').forEach(element => {
    console.log(element);
    element.querySelectorAll('.vote-system').forEach(e => {
      e.addEventListener('click', function(event) {
        let choice = event.target;
        let voteNumber = e.querySelector('.vote-system-text');
        let voteInteger = parseInt(voteNumber.textContent);
        let upVoted = false;
        let downVoted = false;
        if (choice.id === 'upvotebutton') {
          upVoted = true;
          console.log(upVoted);
        } else if (choice.id === 'downvotebutton') {
          downVoted = true;
          console.log(downVoted);
        }
      })
    })
  });
}

document.getElementById('test-case').addEventListener('click', () => {
  const newArticle = document.createElement('article')
  newArticle.classList.add('comment')
  newArticle.textContent = "This is a new article, please be gentle."
  document.querySelector('.comments-container').appendChild(newArticle);
  voteSystem();
})




document.querySelectorAll('.send-button').forEach(element => {

  element.addEventListener('click', function() {
  const nimious = document.createElement('article');
  nimious.classList.add('comment');
    nimious.innerHTML = `
    <div class="comment-vote-container">
      <div class="vote-system" id='vote-system-desktop'>
      <button id='upvotebutton'> <img src="images/icon-plus.svg" alt=""> </button>
      <span class='vote-system-text'>12</span>
      <button id='downvotebutton'> <img src="images/icon-minus.svg" alt=""> </button>
      </div>
    </div>
    <div class="comment-content-container">
      <div class="comment-header">
        <div class="comment-header-userdata">
        <span><img class='commenter-avatar' src="images/avatars/image-juliusomo.png" alt="avatar-juliusomo"></span>
        <span class='commenter-name'>juliusomo</span>
        <span class="you">you</span>
        <span class='commenter-date'>2 days ago</span>
        </div>
        <div class="reply-system" id='comment-header-reply'>
          <div class="delete-container">
            <span class="nimious"> <img class='icon' src="images/icon-delete.svg" alt=""></span>
            <span class='reply-system-text'>Delete</span>
          </div>
          <div class="edit-container">
            <span class="nimious"> <img class='icon' src="images/icon-edit.svg" alt=""></span>
            <span class='reply-system-text'>Edit</span>
          </div>
        </div>
        </div>
        <div class="comment-text-content">
        <p>
           ${userComment.value}
        </p>
        </div>
        <div class="comment-footer">
          <div class="vote-system">
          <button id='upvotebutton'> <img src="images/icon-plus.svg" alt=""> </button>
          <span class='vote-system-text'>12</span>
          <button id='downvotebutton'> <img src="images/icon-minus.svg" alt=""> </button>
          </div>
          <div class="reply-system">
            <div class="delete-container">
              <span class="nimious"> <img class='icon' src="images/icon-delete.svg" alt=""></span>
              <span class='reply-system-text'>Delete</span>
            </div>
            <div class="edit-container">
              <span class="nimious"> <img class='icon' src="images/icon-edit.svg" alt=""></span>
              <span class='reply-system-text'>Edit</span>
            </div>
          </div>
        </div>
    </div>
    `

    if (userComment.value === "") {
      alert("Cannot reply with no text")
    } else {
      document.querySelector('.comments-container').insertBefore(nimious, document.querySelector('.user-reply'))
      userComment.value = "";
    }

  })
});

document.querySelectorAll('.reply-system').forEach(element => {
  let replied = false;
  element.addEventListener('click', function() {
    let specificComment = element.parentElement.parentElement.parentElement;
    console.log(specificComment);
     let runt = document.createElement('article')
     runt.classList.add('user-reply', 'reply');
     const testHTML =
     `
     <div class="user-reply-body">
       <span><img class='commenter-avatar' id= 'user-reply-img' src="images/avatars/image-juliusomo.png" alt="avatar-juliusomo"></span>
       <textarea id='user-comment-input' name="name" rows="8" cols="80" placeholder="Add a comment..."></textarea>
       <span><button class='send-button created' onclick='pls()' id= 'user-reply-send'>Send</button></span>
     </div>
     <div class="user-reply-footer">
       <span><img class='commenter-avatar' src="images/avatars/image-juliusomo.png" alt="avatar-juliusomo"></span>
       <span><button class='send-button created' onclick='pls(event)'>Send</button></span>
     </div>

     `
     runt.insertAdjacentHTML("afterbegin", testHTML)
     var specificText = runt.querySelector('textarea');
     console.log(specificText);
     specificComment.after(runt);
     pools(specificText, runt, specificComment);
  })
});


function pls(event) {
  console.log(event)
}

function pools(specificText, runt, specificComment) {
  console.log(runt.querySelector('.user-reply-body'));
  runt.querySelectorAll('.send-button').forEach(element => {
    element.addEventListener('click', function() {
      const nimious = document.createElement('article');
      nimious.classList.add('comment', 'reply');
        nimious.innerHTML = `
        <div class="comment-vote-container">
          <div class="vote-system" id='vote-system-desktop'>
          <button id='upvotebutton'> <img src="images/icon-plus.svg" alt=""> </button>
          <span class='vote-system-text'>0</span>
          <button id='downvotebutton'> <img src="images/icon-minus.svg" alt=""> </button>
          </div>
        </div>
        <div class="comment-content-container">
          <div class="comment-header">
            <div class="comment-header-userdata">
            <span><img class='commenter-avatar' src="images/avatars/image-juliusomo.png" alt="avatar-juliusomo"></span>
            <span class='commenter-name'>juliusomo</span>
            <span class="you">you</span>
            <span class='commenter-date'>2 days ago</span>
            </div>
            <div class="reply-system" id='comment-header-reply'>
              <div class="delete-container">
                <span class="nimious"> <img class='icon' src="images/icon-delete.svg" alt=""></span>
                <span class='reply-system-text'>Delete</span>
              </div>
              <div class="edit-container">
                <span class="nimious"> <img class='icon' src="images/icon-edit.svg" alt=""></span>
                <span class='reply-system-text'>Edit</span>
              </div>
            </div>
            </div>
            <div class="comment-text-content">
            <p>
               ${specificText.value}
            </p>
            </div>
            <div class="comment-footer">
              <div class="vote-system">
              <button id='upvotebutton'> <img src="images/icon-plus.svg" alt=""> </button>
              <span class='vote-system-text'>0</span>
              <button id='downvotebutton'> <img src="images/icon-minus.svg" alt=""> </button>
              </div>
              <div class="reply-system">
                <div class="delete-container">
                  <span class="nimious"> <img class='icon' src="images/icon-delete.svg" alt=""></span>
                  <span class='reply-system-text'>Delete</span>
                </div>
                <div class="edit-container">
                  <span class="nimious"> <img class='icon' src="images/icon-edit.svg" alt=""></span>
                  <span class='reply-system-text'>Edit</span>
                </div>
              </div>
            </div>
        </div>
        `

        if (specificText.value === "") {
          alert("Cannot reply with no text")
        } else {
          specificComment.after(nimious);
          document.querySelector('.comments-container').removeChild(runt);
          aimer(nimious);
          replied = true;
        }
    })
  })
}

function aimer(nimious) {
  nimious.querySelectorAll('.delete-container').forEach(element => {
    element.addEventListener('click', function()  {

      modal.style.display='block';
      ophelia(nimious, modal);
    })
  })
}

function ophelia(nimious) {
  modal.querySelector('.modal-buttons').addEventListener('click', function(event) {
    if (event.target.id === 'cancel')  {
      modal.style.display='none';
    } else if (event.target.id === 'accept') {
      modal.style.display='none';
      document.querySelector('.comments-container').removeChild(nimious);
    } else if (event.target.id != 'accept' || 'cancel') {
      modal.style.display='none';
    }
  })
}

const existingReply = document.getElementById('existing-user-reply');
console.log(existingReply);
existingReply.querySelectorAll('.delete-container').forEach(element => {
  element.addEventListener('click', function() {
    console.log("Yes")
    modal.style.display='block';
    opheliaPoo(existingReply);
  })
})

function opheliaPoo(existingReply) {
  modal.querySelector('.modal-buttons').addEventListener('click', function(event) {
    if (event.target.id === 'cancel')  {
      modal.style.display='none';
    } else if (event.target.id === 'accept') {
      modal.style.display='none';
      document.querySelector('.comments-container').removeChild(existingReply);
    }
  })
}
