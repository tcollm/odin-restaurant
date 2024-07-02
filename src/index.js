import generateHomePage from './home.js';
import generateMenuPage from './menu.js';
import generateAboutPage from './about.js';

generateHomePage(); 

// let currentPage = 'home'; 

document.addEventListener('click', (event) => {
    const target = event.target;

    const content = document.getElementById('content');
    content.innerHTML = ''; 

    switch (event.target.id) {
        case 'home': 
            generateHomePage(); 
            break; 
        case 'menu':
            generateMenuPage(); 
            break;
        case 'about':
            generateAboutPage(); 
            break;
        case 'book':
            generateBookPage(); 
            break;
        default:
            generate404Page(); 
            console.log('404 not found'); 
            break; 
    }
});
