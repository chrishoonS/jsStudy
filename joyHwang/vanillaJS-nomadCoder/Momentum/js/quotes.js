const quotes = [
   {
      quote: "When you have faults, do not fear to abandon them.",
      author: "Confucius",
   },
   {
      quote: "They must often change who would be constant in happiness or wisdom.",
      author: "Confucius",
   },
   {
      quote: "Age is no guarantee of maturity.",
      author: "Lawana Blackwell",
   },
   {
      quote: "Youth isn’t always all it’s touted to be.",
      author: "Lawana Blackwell",
   },
   {
      quote: "You will face many defeats in life, but never let yourself be defeated. ",
      author: "Maya Angelou",
   },
   {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
      author: "Nelson Mandela",
   },
   {
      quote: "Nothing in more despicable than respect based on fear. ",
      author: "Albert",
   },
   {
      quote: "Turn your wounds into wisdom.",
      author: "Oprah Gail Winfrey",
   },
   {
      quote: "Change the world by being yourself.",
      author: "Amy Poehler",
   },
   {
      quote: "Great minds have purposes, others have wishes.",
      author: "Washington Irving",
   },
]

const quote =  document.querySelector("#quote span:first-child");
const author =  document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;