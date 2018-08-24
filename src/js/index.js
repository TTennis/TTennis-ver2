import Game from './helpers/game.js';

let btnHomeNewGame = document.querySelector('.home__new-game');
let btnHomeQuickGame = document.querySelector('.home__quick-game');

let listBtnPrev = document.querySelectorAll('.btns__prev');
let arrayBtnPrev = Array.prototype.slice.call(listBtnPrev);

let home = document.querySelector('.home');
let settings = document.querySelector('.settings');

let game = document.querySelector('.game');

location.hash = 'home';

let standartGame = {
  player1: 'Игрок 1',
  player2: 'Игрок 2',
  points: 21,
  pitch: 5,
};

let screenPlay = ['home'];

let gameCount = new Game();

gameCount.counter();
gameCount.exitGame();

btnHomeNewGame.addEventListener('click', function () {
  nextStep(home, settings, 'newGame');
});

btnHomeQuickGame.addEventListener('click', function () {
  nextStep(home, game, 'quickGame');
  quickGame();
});

arrayBtnPrev.forEach(function (elem) {
  elem.addEventListener('click', function () {
    prevStep();
  });
});

function nextStep(prevBlock, nextBlock, linkHash) {
  screenPlay.push(linkHash);
  prevBlock.classList.add('prev');
  prevBlock.classList.add('hidden');
  prevBlock.classList.remove('visible');

  nextBlock.classList.add('visible');
  nextBlock.classList.remove('hidden');
  location.hash = linkHash;
}

function workWithClass(prevBlock, nextBlock) {
  prevBlock.classList.add('prev');
  prevBlock.classList.add('hidden');
  prevBlock.classList.remove('visible');
  
  nextBlock.classList.add('visible');
  nextBlock.classList.remove('hidden');
}

function prevStep() {
  let prevBlock = screenPlay[screenPlay.length - 1];
  let currentBlock = screenPlay[screenPlay.length - 2];
  screenPlay.pop();
  
  location.hash = currentBlock;
  
  workWithClass(document.getElementById(prevBlock), document.getElementById(currentBlock));
}

function quickGame() {
  let currentGame = {};
  currentGame.__proto__ = standartGame;
}
