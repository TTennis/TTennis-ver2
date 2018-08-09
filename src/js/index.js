let btnHomeNewGame = document.querySelector('.home__new-game');
let btnHomeQuickGame = document.querySelector('.home__quick-game');

let listBtnPrev = document.querySelectorAll('.btns__prev');
let arrayBtnPrev = Array.prototype.slice.call(listBtnPrev);

let home = document.querySelector('.home');
let settings = document.querySelector('.settings');

let game = document.querySelector('.game');

let standartGame = {
  player1: 'Игрок 1',
  player2: 'Игрок 2',
  points: 21,
  pitch: 5,
};


btnHomeNewGame.addEventListener('click', function () {
  nextStep(home, settings);
});

btnHomeQuickGame.addEventListener('click', function () {
  nextStep(home, game);
  quickGame();
});

arrayBtnPrev.forEach(function (elem) {
  elem.addEventListener('click', function () {
    prevStep(elem);
  });
});

function nextStep(prevBlock, nextBlock) {
  prevBlock.classList.add('prev');
  prevBlock.classList.add('hidden');
  prevBlock.classList.remove('visible');

  nextBlock.classList.add('visible');
  nextBlock.classList.remove('hidden');
}

function prevStep(currentElem) {
  console.log('1');
}

function quickGame() {
  let currentGame = {};
  currentGame.__proto__ = standartGame;
}
