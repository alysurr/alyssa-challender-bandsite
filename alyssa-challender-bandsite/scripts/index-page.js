const api_key = `02cf3fb8-71ca-424d-a603-65349c18e2e6`;

const generateComments =
    axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`)
    .then(display => {
      console.log(display.data)
      const commentData = display.data;
      console.log(commentData)
      const container = document.querySelector('.comments-display')
      container.innerText = "";
      commentData.forEach((comment) => {
        const commentElement = document.createElement('article');
        commentElement.classList.add('comments__input');
        container.appendChild(commentElement);

        const commentAside = document.createElement('aside');
        commentAside.classList.add('comments__image-placeholder');
        commentElement.appendChild(commentAside);

        const flexElement = document.createElement('div');
        flexElement.classList.add('comments__flex');
        commentElement.appendChild(flexElement);

        const nameElement = document.createElement('h3');
        nameElement.classList.add('comments__name');
        nameElement.innerText = comment.name;
        flexElement.appendChild(nameElement);
        
        const dateElement = document.createElement('div');
        dateElement.classList.add('comments__date');
        dateElement.innerText = comment.timestamp;
        flexElement.appendChild(dateElement);

        const textElement = document.createElement('div');
        textElement.classList.add('comments__text');
        textElement.innerText = comment.comment;
        commentElement.appendChild(textElement);
      })
})

//Outline red if not filled out

form.addEventListener('submit', (e) => {
     e.preventDefault();
     if(username.value === '' || username.value == null) {
         username.style.borderColor="#D22D2D";
     }

     if(comment.value === '' || comment.value == null) {
         comment.style.borderColor="#D22D2D";
     }
 })