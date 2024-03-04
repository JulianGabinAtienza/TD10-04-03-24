const container = document.querySelector('.container')
const refresh = document.querySelector('.refresh')

quote()

function getRandom(quote) {
    
    container.innerHTML = ''

    const randomIndex = Math.floor(Math.random() * quote.length);

    const randomQuote = quote[randomIndex];

    const text = randomQuote.text
    const author = randomQuote.author.replace(', type.fit', '')

    const html = 
        `<div class="displayedQuote">
            <h2>"${text}"</h2>
            <p>${author}</p>
        </div>`
        
    const quotes = document.createElement('div')
    quotes.innerHTML = html
    container.appendChild(quotes)
}

function quote() {
    axios.get('https://type.fit/api/quotes')
        .then(res => res.data)
        .then(res => {getRandom(res)})
        .catch(e => console.error(e))
}

refresh.addEventListener('click', () => {
    quote()
})