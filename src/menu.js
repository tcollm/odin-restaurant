import './styles/base.css';
import './styles/menu.css';

export default function generateMenuPage() {

    const content = document.getElementById('content'); 
    // erase other page content
    // add footer to index.html

    const div = document.createElement('div');
    div.textContent = 'Menu content';
    content.appendChild(div); 
}