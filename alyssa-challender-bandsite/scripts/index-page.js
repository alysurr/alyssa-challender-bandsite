const api_key = `02cf3fb8-71ca-424d-a603-65349c18e2e6`;

const generateComments =
    axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`)
    .then(display => {
    
      const commentData = display.data;

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
        let date = new Date(comment.timestamp).toString();
        dateElement.innerText = date.split(" ").slice(1,4).join(' ');
        flexElement.appendChild(dateElement);

        console.log(comment.timestamp)

        const textElement = document.createElement('div');
        textElement.classList.add('comments__text');
        textElement.innerText = comment.comment;
        commentElement.appendChild(textElement);
      })
})




form.addEventListener('submit', (e) => {
     e.preventDefault();

     //Outline red if not filled out
     if(username.value === '' || username.value == null) {
         username.style.borderColor="#D22D2D";
     }
     if(comment.value === '' || comment.value == null) {
         comment.style.borderColor="#D22D2D";
     }

     console.log(e.target.username.value)

    axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`, {
      name: e.target.username.value,
      comment: e.target.comment.value,
      timestamp: e.timestamp

      })
      .then(response=>{
          console.log(response);
      }).catch(error => {
          console.log(error);
      });
 })

