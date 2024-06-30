import generateHomePage from './home.js';
import generateMenuPage from './menu.js';

generateHomePage(); 

let currentPage = 'home'; 

document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id === 'home' && currentPage !== 'home') {
        currentPage = 'home'; 
        generateHomePage(); 
    } else if (target.id === 'menu'&& currentPage !== 'home') {
        currentPage = 'menu'; 
        generateMenuPage(); 
    } else if (target.id === 'about') {
        currentPage = 'about'; 
        console.log('about clicked');
    } else if (target.id === 'book') {
        currentPage = 'book'; 
        console.log('book clicked');
    }
});
