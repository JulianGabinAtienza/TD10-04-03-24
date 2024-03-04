// 1) On récupère le container characters de notre HTML
const container = document.querySelector('.characters')

// 2) On va utiliser axios pour récupérer les données de l'API de Disney
axios.get('https://api.disneyapi.dev/character')
    .then(res => res.data)
    .then(res => {getCharacters(res)})
    .catch(err => console.error(err))

// 3) Coder la fonction qui nous permettra de récupérer les données des personnages de l'API de Disney
function getCharacters(characters) {
    for(i = 0; i < 45; i++) {
        const name = characters.data[i].name
        const image = characters.data[i].imageUrl
        const films = characters.data[i].films

        const html = 
            `<div class="card">
                <h2>${name}</h2>
                <img src="${image}">
                <p>${films}</p>
            </div>`

        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = html
        container.appendChild(card)
    }
}