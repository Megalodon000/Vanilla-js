const reviews = [
    {
        id: 1,
        name: 'John Doe',
        job: 'Web Developer',
        img: 'img/person-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio nec dolor dictum ultricies. Nullam ac erat in nunc malesuada',
    },
    {  
        id: 2,
        name: 'Jane Doe',
        job: 'Web Designer',
        img: 'img/person-2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio nec dolor dictum ultricies. Null',
    },
    {
        id: 3,
        name: 'John Smith',
        job: 'Web Developer',
        img: 'img/person-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio nec dolor dictum ultricies. Null',
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
});
