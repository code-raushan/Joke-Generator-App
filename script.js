const btn = document.getElementById('jokeBtn');
const jokes = document.getElementById('joke');

const jokesURL = "https://v2.jokeapi.dev/joke/Any"

btn.addEventListener('click', ()=>{
    fetch(jokesURL)
            .then(data => data.json())
            .then(item=>{
                jokes.innerHTML = item.joke;
            });
});