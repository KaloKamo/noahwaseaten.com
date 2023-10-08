import { homeTemplate } from "./pages/home.js";
import { friendsTemplate } from "./pages/friends.js";
import { downloadsTemplate } from "./pages/downloads.js";
import { contactsTemplate } from "./pages/contacts.js";
import { secretPageTemplate } from "./pages/secret-page.js";
import { memesTemplate } from "./pages/memes.js";
import { MemesGridFill } from "./memesCode/memesGridFill.js";

export const loadPage = (page = '') => {
    switch (page) {

        case 'home':
            document.getElementById('container').innerHTML = homeTemplate();
            return;
        case 'friends':
            document.getElementById('container').innerHTML = friendsTemplate();
            return;
        case 'downloads':
            document.getElementById('container').innerHTML = downloadsTemplate();
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