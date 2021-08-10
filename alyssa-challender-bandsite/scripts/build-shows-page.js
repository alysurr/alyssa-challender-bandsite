
const shows = [
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

const generateShowContent = (shows) => {
    const showElement = document.createElement('article');
    showElement.classList.add('shows');

    const dateElement = document.createElement('ul');
    dateElement.classList.add('dates');
    showElement.appendChild(dateElement);

    const dateLabelElement = document.createElement('p');
    dateLabelElement.innerText = 'Dates';
    dateElement.appendChild(dateLabelElement);

    const venueElement = document.createElement('ul');
    venueElement.classList.add('venue');
    showElement.appendChild(venueElement);

    const venueLabelElement = document.createElement('p');
    venueLabelElement.innerText = 'Venue';
    venueElement.appendChild(venueLabelElement);

    const locationElement = document.createElement('ul');
    locationElement.classList.add('location');
    showElement.appendChild(locationElement);

    const locationLabelElement = document.createElement('p');
    locationLabelElement.innerText = 'Location';
    locationElement.appendChild(locationLabelElement);

    const buyElement = document.createElement('button');
    buyElement.classList.add('shows__buy');
    buyElement.innerText = "Buy Tickets";
    showElement.appendChild(buyElement);

    // Console.log location on click
    buyElement.addEventListener('click', (event) => {
        console.log(listLocation);
    })

    const listDate = document.createElement('li');
    listDate.classList.add('shows__date', 'dates')
    listDate.innerText = shows.date;
    dateElement.appendChild(listDate);
    
    const listVenue = document.createElement('li');
    listVenue.classList.add('shows__info', 'venue')
    listVenue.innerText = shows.venue;
    venueElement.appendChild(listVenue);
    
    const listLocation = document.createElement('li');
    listLocation.classList.add('shows__info', 'location')
    listLocation.innerText = shows.location;
    locationElement.appendChild(listLocation);
        
    
    for(let i = 0; i < shows.length; i++) {        
        const item = shows[i];
        const showsData = shows;
    
    const showCard = generateShowContent(showsData);
    
    showsList.appendChild(showCard);
      for (let key in item) {
          console.log(item[key]);
      }
    }
    return showElement;
}
const generateCardList = (shows) => {
    for (let i = 0; i < shows.length; i++) {
      const showData = shows[i];
      console.log('Data: ', showData);
  
      const showCard = generateShowContent(showData);
      console.log('Card: ', showCard);
  
      showsList.appendChild(showCard);
    }
  }
  
generateCardList(shows);

