
let shows = [
    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },
    {
        date: 'Tues Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    },
    {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA'
    }
]

const showsList = document.querySelector('.shows-list');

/* <section class="shows">
    <div class="shows__label">Dates</div>
    <div class="shows__info shows__info--bold">Mon Sept 06 2021</div>
    <div class="shows__label">Venue</div>
    <div class="shows__info">Ronald Lane</div>
    <div class="shows__label">Location</div>
    <div class="shows__info">San Francisco, CA</div>
    
    <div class="shows__buy"><a href="/">Buy Tickets</a></div>
</section> */

const generateShowContent = (showData) => {
    // create shows div
    const showElement = document.createElement('div');
    showElement.classList.add('shows');
    
    //create shows label
    const showLabel = document.createElement('div');
    showElement.classList.add('shows__label');
    showLabel.innerText = 'Dates';

    

    
    //create shows info

    
    //create shows info--bold

    
    //create buy ticket button
 

    return showElement;
}

generateShowContent(shows);