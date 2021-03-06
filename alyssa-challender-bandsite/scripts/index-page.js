// Generates random icons for comments without images
var icons = 
    [`../assets/Images/random icons/icon1.jpg`,
    `../assets/Images/random icons/icon2.jpg`,
    `../assets/Images/random icons/icon3.jpg`,
    `../assets/Images/random icons/icon4.jpg`,
    `../assets/Images/random icons/icon5.jpg`,
    `../assets/Images/random icons/icon6.jpg`,
    `../assets/Images/random icons/icon7.jpg`]


// API Key
const api_key = `5038d37e-66d9-44f2-a3d9-e735f8f425c6`;

const generateComments =
    axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`)
    .then(display => {

    const container = document.querySelector('.comments-display')
    container.innerText = "";

    //Makes so that new comments display at the top
    const commentData = display.data;
    commentData.sort((a,b) => b.timestamp - a.timestamp);

    //Generate comments
    commentData.forEach((comment) => {
        const commentElement = document.createElement('article');
        commentElement.classList.add('comments__input');
        container.appendChild(commentElement);

        const commentAside = document.createElement('aside');
        commentElement.appendChild(commentAside);

        const randIcon = document.createElement('img');
        randIcon.classList.add('comments__image-random');
        var icon = icons[Math.floor(Math.random()*icons.length)];
        randIcon.src = icon
        commentAside.appendChild(randIcon);

        const flexElement = document.createElement('div');
        flexElement.classList.add('comments__flex');
        commentElement.appendChild(flexElement);

        const nameElement = document.createElement('h3');
        nameElement.classList.add('comments__name');
        nameElement.innerText = comment.name;
        flexElement.appendChild(nameElement);
        
        const dateElement = document.createElement('div');
        dateElement.classList.add('comments__date');
        //change date to string then cut out unnecessary info
        let date = new Date(comment.timestamp).toString();
        dateElement.innerText = date.split(" ").slice(1,4).join(' ');
        flexElement.appendChild(dateElement);

        const textElement = document.createElement('div');
        textElement.classList.add('comments__text');
        textElement.innerText = comment.comment;
        commentElement.appendChild(textElement);

        const buttonElement = document.createElement('div');
        buttonElement.classList.add('comments__buttons');
        commentElement.appendChild(buttonElement);

        // const likeElement = document.createElement('button');
        // likeElement.classList.add('likes');
        // likeElement.innerText = `??? ${comment.likes}`
        // buttonElement.appendChild(likeElement);

        // const deleteElement = document.createElement('button');
        // deleteElement.classList.add('delete');
        // deleteElement.innerText = 'Delete'
        // buttonElement.appendChild(deleteElement);
      })
})



form.addEventListener('submit', (e) => {
     e.preventDefault();

     //Outline red and don't post if either input not filled out
     if(username.value === '' || username.value == null) {
         username.style.borderColor="#D22D2D";
         return;
     }
     if(comment.value === '' || comment.value == null) {
         comment.style.borderColor="#D22D2D";
         return;
     }

    
    axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`, {
        name: e.target.username.value,
        comment: e.target.comment.value,
        timestamp: e.timestamp

    }).then(response=>{
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
 })

