const selectGenre       = document.getElementById('selectGenre');
const inputGenre        = document.getElementById('inputGenre');
const btnSubmit         = document.getElementById('btnSubmit');
const requestResult     = document.getElementById('requestResult');

const api = 'http://localhost:3300/genre';
let genres = [];

function init() {
    fetch(api).then(res => res.json()).then(res => {
        genres = res;
        buildSelect();
    })

    btnSubmit.addEventListener('click', postGenre);

}

function buildSelect() {
    genres.forEach(genre => {
        let option = document.createElement('option');
        option.value = genre.GenreId;
        option.innerText = genre.Name;
        selectGenre.appendChild(option);
    })
}

function postGenre() {
    let name = inputGenre.value;
    fetch(api, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name})
    }).then(res => res.json()).then(res => {
        requestResult.innerText = 'Genre id: ' + res.genreId + ' saved in database';
    })
}

init();