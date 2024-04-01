
document.addEventListener('DOMContentLoaded', function() {
    // Base URL for the API

    const baseURL = 'http://localhost:3000';

    // Function to fetch and display the first movie's details

    function fetchFirstMovieDetails() {
        fetch(`${baseURL}/films/1`)
            .then(response => response.json())
            .then(data => {
                const { title, runtime, capacity, showtime, tickets_sold, description, poster } = data;
                const availableTickets = capacity - tickets_sold;

                // Display the first movie's details on the page

                console.log('First Movie Details:');
                console.log('Title:', title);
                console.log('Runtime:', runtime, 'minutes');
                console.log('Showtime:', showtime);
                console.log('Available Tickets:', availableTickets);
                console.log('Description:', description);
                console.log('Poster:', poster);
            })
            .catch(error => console.error('Error fetching first movie details:', error));
    }

    // Function to fetch and display all movies in the menu

    function fetchAllMovies() {
        fetch(`${baseURL}/films`)
            .then(response => response.json())
            .then(data => {
                // Display all movies in the menu

                console.log('All Movies:');
                data.forEach(movie => {
                    const { title, runtime, capacity, showtime, tickets_sold, description, poster } = movie;
                    const availableTickets = capacity - tickets_sold;

                    console.log('Title:', title);
                    console.log('Runtime:', runtime, 'minutes');
                    console.log('Showtime:', showtime);
                    console.log('Available Tickets:', availableTickets);
                    console.log('Description:', description);
                    console.log('Poster:', poster);
                });
            })
            .catch(error => console.error('Error fetching all movies:', error));
    }

    // Call the functions to fetch and display movie details
    
    fetchFirstMovieDetails();
    fetchAllMovies();
});
