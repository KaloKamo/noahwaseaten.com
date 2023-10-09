import { homeTemplate } from "./pages/home.js";
import { contactsTemplate } from "./pages/contacts.js";
import { friendsTemplate } from "./pages/friends.js";
import { gamesTemplate } from "./pages/games.js";
import { viewGames } from "./data/viewGames.js";
import { contentTemplate } from "./pages/content.js";
import { secretPageTemplate } from "./pages/secret-page.js";
import { memesTemplate } from "./pages/memes.js";
import { MemesGridFill } from "./memesCode/memesGridFill.js";

export const loadPage = (page = '') => {
    switch (page) {
        case 'home':
            document.getElementById('container').innerHTML = homeTemplate();
            return;
        case 'content':
            document.getElementById('container').innerHTML = contentTemplate();
            return;
        case 'friends':
            document.getElementById('container').innerHTML = friendsTemplate();
            return;
        case 'games':
            document.getElementById('container').innerHTML = gamesTemplate();
            document.getElementById('games-grid').innerHTML = viewGames();
            return;
        case 'contacts':
            document.getElementById('container').innerHTML = contactsTemplate();
            return;
        case 'secret-page':
            document.getElementById('container').innerHTML = secretPageTemplate();
            return;
        case 'memes':
            document.getElementById('container').innerHTML = memesTemplate();
            document.getElementById('memes-grid-slot-transitions').innerHTML = MemesGridFill();
            return;
    }
}