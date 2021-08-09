const form = document.getElementById('form');
const name = document.getElementById('name');
const comment = document.getElementById('comment');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(name.value === '' || name.value == null) {
        name.style.borderColor="#D22D2D";
    }
    if(comment.value === '' || comment.value == null) {
        comment.style.borderColor="#D22D2D";
    }
})