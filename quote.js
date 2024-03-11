let  btn= document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person =document.querySelector('.person');

const quotes= [{
    quote:`"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma gandhi`
}, {
    quote:`"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: `Albert Einstein`
}, {
    quote: `"At his ,best, man is the noblest of all animals; separated from law an justice  he is the worst. "`,
    person: `Aristotle`
},  {
    quote:`"Your time is limited, so son't waste it living someone els's life."`,
    person:`Steve Jobs`
},{
    quote:`"Tell me and I forget, Teach me and I remeber. Involve me an i lern."`,
    person:`Benjamin Franklin`
, 
},{
    quote:`"It doesn't matter how slowly you go as long as yo do not stop"`,
    person:`Confucious`
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
   
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})