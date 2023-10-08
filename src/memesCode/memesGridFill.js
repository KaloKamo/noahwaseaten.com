export const MemesGridFill = () => {
    let answer = '';

    for(let i = 0; i < 705; i++) { // 47 on row x 15 rows
        answer += '<div class="meme-grid-box-full"><div class="meme-grid-box"></div></div>';
    }

    return answer;
}