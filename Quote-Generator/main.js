const quote = document.querySelector('.quote');
const btn = document.querySelector('#new');
const author = document.querySelector('.author');

const quotes = [
    {
        quote: "Remember you are sunshine",
        author: "leo"
    },
    {
        quote: "Where there is a will there is a way",
        author: "aqua"
    },
    {
        quote: "As you sow shall you reap",
        author: "raj"
    },
    {
        quote: "You are you",
        author: "Vinci"
    },
];

function getQuotes() {
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author; // Fixed this line
}

btn.addEventListener('click', getQuotes);
