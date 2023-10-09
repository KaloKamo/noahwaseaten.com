import { loadPage } from "./navigation-events.js";

document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');
});

document.addEventListener('click', event => {
    
    const headerPages = ['noah-logo', 'content-page', 'friends-page', 'games-page', 'contacts-page', 'secret-div'];

    if(headerPages.some(page => event.target.classList.contains(page))) {
        loadPage(event.target.getAttribute('load-page'));
    }
});