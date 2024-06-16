let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote")
let quoter = document.querySelector(".quoter");

const quotes = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      quoter: "Franklin D. Roosevelt"
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      quoter: "Martin Luther King Jr."
    },
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      quoter: "Ralph Waldo Emerson"
    },
    {
      quote: "The purpose of our lives is to be happy.",
      quoter: "Dalai Lama"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      quoter: "John Lennon"
    },
    {
      quote: "Get busy living or get busy dying.",
      quoter: "Stephen King"
    },
    {
      quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
      quoter: "Brian Tracy"
    },
  ];
  
btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    quoter.innerText = quotes[random].quoter;
});
