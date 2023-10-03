export const loadPage = (page = '') => {
    switch (page) {

        case 'memes':
            window.open('memes.html');
            return;
        // case ABOUT:
        //     setActiveNav(ABOUT);
        //     return renderAbout();
        // case CATEGORIES:
        //     setActiveNav(CATEGORIES);
        //     return renderCategories();
        // case FAVORITES:
        //     setActiveNav(FAVORITES);
        //     return renderFavorites();
    }
}