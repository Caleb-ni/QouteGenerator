let button = document.querySelector("#new-quote");
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:
      `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, architecto eius praesentium neque possimus quo doloremque amet omnis?"`,
    person: `oprah winfred`
  },{
    quote:
      `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, architecto eius praesentium quo doloremque amet omnis?"`,
    person: `martin luther king`
  },{
    quote:
      `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, architecto eius praesentium neque possimus quo."`,
    person: `obama`
  },{
    quote:
      `"Lorem ipsum dolor sit amet. Beatae, architecto eius praesentium neque possimus quo doloremque amet omnis?"`,
    person: `sankala`
  },{
    quote:  
      `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, architecto eius praesentium neque possimus quo doloremque amet omnis?"`,
    person: `mandela`
  },
];

button.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})





