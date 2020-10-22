const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

// Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show new quote 
function newQuote() {
  loading();
  // Pick random quote
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quoteText.textContent = quote.text;
  authorText.textContent = quote.author;
  // Check if author unknown
  if(!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Check quote length for styling
  if(quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // Set quote, hide loader
  quoteText.textContent = quote.text;
  complete();
}

// Get Quotes from api
async function getQuotes() {
  loading();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const res = await fetch(apiUrl);
    apiQuotes = await res.json();
    newQuote();
  } catch (err) {
    console.log("Whoops, no quote", err);
  }
}

// Tweet a quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// EventListeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();