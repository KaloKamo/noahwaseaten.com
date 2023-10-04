import { loadPage } from "./navigation-events.js";

document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');
});

document.addEventListener('click', event => {
    
    const headerPages = ['home-page', 'friends-page', 'downloads-page', 'contacts-page', 'secret-div'];

    if(headerPages.some(page => event.target.classList.contains(page))) {
        loadPage(event.target.getAttribute('load-page'));
    }
});