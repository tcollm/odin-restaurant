import './styles/base.css';
import './styles/menu.css';

export default function generateAboutPage() {
    const content = document.getElementById('content'); 

    const h3 = document.createElement('h3');
    h3.textContent = 'About Us';
    content.appendChild(h3); 

    const hr = document.createElement('hr');
    content.appendChild(hr); 

    const p = document.createElement('p');
    p.textContent = 'Coming Soon...';
    content.appendChild(p); 
}