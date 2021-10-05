// import functions and grab DOM elements
import { answerList, getRandomNum } from './answer.js';
// initialize global state
const answerText = document.getElementById('answer-text');
const revealButton = document.getElementById('reveal-button');

// set event listeners 
revealButton.addEventListener('click', () => {
    answerText.textContent = answerList[getRandomNum(answerList.length)];
});