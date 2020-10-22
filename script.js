const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];

// Show new quote 
function newQuote() {
  // Pick random quote
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quoteText.textContent = quote.text;
  authorText.textContent = quote.author;
}

// Get Quotes from api
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const res = await fetch(apiUrl);
    apiQuotes = await res.json();
    newQuote();
  } catch (err) {
    console.log("Whoops, no quote", err);
  }
}

// On Load
getQuotes();