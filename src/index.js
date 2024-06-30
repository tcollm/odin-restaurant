import generateHomePage from './home.js';

generateHomePage(); 

document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id === 'home') {
        console.log('home clicked');
    } else if (target.id === 'menu') {
        console.log('menu clicked');
    } else if (target.id === 'about') {
        console.log('about clicked');
    } else if (target.id === 'book') {
        console.log('book clicked');
    }
});
