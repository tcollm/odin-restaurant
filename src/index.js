import generateHomePage from './home.js';
import generateMenuPage from './menu.js';
import generateAboutPage from './about.js';
import generateBookPage from './book.js';

generateHomePage(); 

document.addEventListener('click', (event) => {

    // error listens to all clicks on page, need to make it only 
    // listen to button clicks 

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
