import { gamesData } from "./gamesData.js"

export const viewGames = () => {
    let gamesHTML = '';

    gamesData().map(game => {
        gamesHTML += `
        <div class="game-div" view-details="${game}">
            <h2>${game.name}</h2>
            <img src="${game.cover}" alt="${game.name}.png">
        </div>\n
        `;
    });

    return gamesHTML;
}

export const gameInfo = (game) => `
    <h1>${game.name}</h1>
    <div class="game-info">
        <img src="${game.cover}">
        <p>Release Year: ${game.releaseYear}</p>
        <p>Release Date: ${game.releaseDate}</p>
        <p>Game Link: ${game.link}</p>
    </div>
`;