document.getElementById('get-joke').addEventListener('click', function () {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => {
            const jokeDisplay = document.getElementById('joke-display');
            jokeDisplay.innerHTML = `<p>${data.value}</p>`;
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}); 