import { loadPage } from './navigation-events.js';
import { gameInfo } from './data/viewGames.js';

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', event => {
    
        const headerPages = ['noah-logo', 'content-page', 'friends-page', 'games-page', 'contacts-page', 'secret-div'];

        if(headerPages.some(page => event.target.classList.contains(page))) {
            loadPage(event.target.getAttribute('load-page'));
        }
    });

    document.getElementsByClassName('game-div').addEventListener('click', (e) => {
        gameInfo(e.target.getAttribute('view-details'));
    });

    loadPage('home');
});