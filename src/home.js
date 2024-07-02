import './styles/base.css';
import './styles/home.css';
import foodImage from '../img/food.jpg';


export default function generateHomePage() {
    const content = document.getElementById('content');

    // body 
    const body = document.createElement('div');
    body.classList.add('body');
    content.appendChild(body);

    // -> img 
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    body.appendChild(imgContainer);

    const img = document.createElement('img');
    img.src = foodImage;
    img.alt = 'Delicious Food';
    imgContainer.appendChild(img);

    // -> hero
    const hero = document.createElement('div');
    hero.classList.add('hero');
    body.appendChild(hero);

    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    welcome.textContent = 'WELCOME TO GOURMET BISTRO'; 
    hero.appendChild(welcome);

    const desc = document.createElement('div');
    desc.classList.add('desc');
    desc.textContent = 'Very good food located in downtown Colorado Springs'; 
    hero.appendChild(desc);

    const heroButton = document.createElement('button');
    heroButton.textContent = 'BOOK A TABLE'; 
    heroButton.id = 'book'; 
    hero.appendChild(heroButton);
}