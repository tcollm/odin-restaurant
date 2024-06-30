import generateHomePage from './home.js';
import generateMenuPage from './menu.js';

generateHomePage(); 

document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id === 'home') {
        console.log('home clicked');
        generateHomePage(); 
    } else if (target.id === 'menu') {
        console.log('menu clicked');
        generateMenuPage(); 
    } else if (target.id === 'about') {
        console.log('about clicked');
    } else if (target.id === 'book') {
        console.log('book clicked');
    }
});
