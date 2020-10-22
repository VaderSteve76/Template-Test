let apiQuotes = [];

// Show new quote 
function newQuote() {
  // Pick random quote
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
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