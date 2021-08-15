
//f3bc9d31-4f9b-4283-a089-b1be542adf15

//API

const COMMENT_API_URL = "https://project-1-api.herokuapp.com/comments";
const COMMENT_API_KEY = "6b54164b-e957-4217-9334-507dbcf217b9";
const container = document.querySelector('.comments-display')
const form = document.getElementById('form');
// const name = document.getElementById('username');
// const comment = document.getElementById('comment');

// Get Date
/* let date = new Date(Date.now()).toString()
  dateElement.innerText = date.split(" ").slice(1,4).join('/') */






// Object Comment Initiated

function Comment(name, comment) {
    this.name = name
    this.comment = comment 

    this.displayComment = () => {       
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
        nameElement.innerText = this.name;
        flexElement.appendChild(nameElement);
        
        const dateElement = document.createElement('div');
        dateElement.classList.add('comments__date');
        dateElement.innerText = display.date;
        flexElement.appendChild(dateElement);

        const textElement = document.createElement('div');
        textElement.classList.add('comments__text');
        textElement.innerText = this.comment;
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

    // implement likes
    this.addLike = function() {
        this.likes ++;
    }

    console.log(this.displayComment);
}

console.log(Comment)

form.addEventListener('submit', (event) => {
//No Refresh on click
    event.preventDefault();
//Outline red if not filled out
    if(username.value === '' || username.value == null) {
        username.style.borderColor="#D22D2D";
    }

    if(comment.value === '' || comment.value == null) {
        comment.style.borderColor="#D22D2D";
    }
})

