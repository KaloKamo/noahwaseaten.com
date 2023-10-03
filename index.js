import { loadPage } from "./navigation-events.js";

document.addEventListener('DOMContentLoaded', () => {

});

document.addEventListener('click', event => {

    console.log(event.target);

    if (event.target.classList.contains('secret-div')) {
        loadPage(event.target.getAttribute('load-page'));
    }

});