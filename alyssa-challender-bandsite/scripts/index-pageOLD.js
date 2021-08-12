// const display = [
//     {
//         username: "Connor Walton",
//         comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//         date: "02/17/2021"
//     },
//     {
//         username: "Emilie Beach",
//         comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//         date: "01/09/2021"
//     },
//     {
//         username: "Connor Walton",
//         comment: "I can't stop listening. Every time I hear one of their songs-the vocals-it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//         date: "12/20/2020"
//     }
// ]





const generateComments = (display) => {
    const commentElement = document.createElement('article');
    commentElement.classList.add('comments__input');

    const commentAside = document.createElement('aside');
    commentAside.classList.add('comments__image-placeholder');
    container.appendChild(commentAside);

    const flexElement = document.createElement('div');
    flexElement.classList.add('comments__flex');
    commentElement.appendChild(flexElement);

    const nameElement = document.createElement('h3');
    nameElement.classList.add('comments__name');
    nameElement.innerText = display.username;
    flexElement.appendChild(nameElement);
    
    const dateElement = document.createElement('div');
    dateElement.classList.add('comments__date');
    dateElement.innerText = display.date;
    flexElement.appendChild(dateElement);

    const textElement = document.createElement('div');
    textElement.classList.add('comments__text');
    textElement.innerText = display.comment;
    commentElement.appendChild(textElement);

    for(let i = 0; i < display.length; i++) {        
        const item = display[i];
        const commentsData = display;
        const commentCard = generateComments(commentsData);
    
        container.appendChild(commentCard);

        for (let key in item) {
            console.log(item[key]);
        }
    }
    return commentElement;
}

//Outline red if not filled out

form.addEventListener('submit', (event) => {
     event.preventDefault();
     if(username.value === '' || username.value == null) {
         username.style.borderColor="#D22D2D";
     }

     if(comment.value === '' || comment.value == null) {
         comment.style.borderColor="#D22D2D";
     }
 })


 


const generateCommentList = (display) => {
    for (let i = 0; i < display.length; i++) {
      const commentData = display[i];
      const commentCard = generateComments(commentData);
      container.appendChild(commentCard);
    }
  }

  function newComment() {
    var usernameInput = document.getElementById('username').value;
    var textInput = document.getElementById('comment').value;
    display.push({username:usernameInput, comment:textInput, date:monthDateYear});
    console.log(display);
    return false;
  }

generateCommentList(display);
