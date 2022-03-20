const quotes = [
    {
    quote: "Let me tell you the secret that has led me to my goal. My strength lies solely in my tenacity.",
    author: "Louis Pasteur"
},
{
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving"
},
{
    quote: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett"
},
{ 
    quote: "We simply attempt to be fearful when others are greedy and to be greedy only when others are fearful.",
    author: "Warren Buffett"
},
{
    quote: "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.",
    author: "Warren Buffett"
},
{
    quote: "Wide diversification is only required when investors do not understand what they are doing.",
    author: "Warren Buffett"
},
{ quote: "The greatest risk is the risk of riskless living.",
author: "Stephen Covey"
},
{quote: "I'm as proud of what we don't do as I am of what we do.",
author: "Steve Jobs"
},
{quote: "Everything that I understand, I understand only because I love.",
author: "Lev Tolstoy"
},
{quote: "Should you find yourself in a chronically leaking boat, energy devoted to changing vessels is likely to be more productive than energy devoted to patching leaks.",
author: "Warren Buffett"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() *quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;