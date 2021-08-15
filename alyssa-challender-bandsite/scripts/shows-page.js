const api_key = `02cf3fb8-71ca-424d-a603-65349c18e2e6`;



const fetchShows =
    axios
    .get(`https://project-1-api.herokuapp.com/showdates?api_key=${api_key}`)
    .then(allShows => {
        console.log(allShows.data)
        const showData = allShows.data;
        console.log(showData)
        const showContainer = document.querySelector('.shows-list')
        showContainer.innerText="";
        showData.forEach((show) => {            
            const showElement = document.createElement('article');
            showElement.classList.add('shows');
            showContainer.appendChild(showElement);

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

            buyElement.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(show.place)
            })

            const listDate = document.createElement('li');
            listDate.classList.add('shows__date', 'dates');
            let timestamp = new Date(show.date).toString();
            console.log(timestamp);
            listDate.innerText = timestamp.split(" ").slice(1,4).join(' ');
            dateElement.appendChild(listDate);


            
            const listVenue = document.createElement('li');
            listVenue.classList.add('shows__info', 'venue')
            listVenue.innerText = show.place;
            venueElement.appendChild(listVenue);
            
            const listLocation = document.createElement('li');
            listLocation.classList.add('shows__info', 'location')
            listLocation.innerText = show.location;
            locationElement.appendChild(listLocation);
        })
    })