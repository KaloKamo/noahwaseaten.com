import { homeTemplate } from "./pages/home.js";
import { friendsTemplate } from "./pages/friends.js";
import { downloadsTemplate } from "./pages/downloads.js";
import { contactTemplate } from "./pages/contact.js";

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
        case 'contact':
            document.getElementById('container').innerHTML = contactTemplate();
            return;
        case 'secret-page':
            document.getElementById('container').innerHTML = friendsTemplate();
        case 'memes':
            window.open('memes.html');
            return;
    }
}