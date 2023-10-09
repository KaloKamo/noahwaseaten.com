import { gamesData } from "./gamesData.js"

export const viewGames = () => {
    let gamesHTML = '';

    gamesData().map(game => {
        gamesHTML += `
        <div class="game-div">
            <h2>${game.name}</h2>
            <p>${game.releaseYear}</p>
            <img src="${game.cover}" alt="${game.name}.png">
        </div>\n
        `;
    });

    return gamesHTML;
}