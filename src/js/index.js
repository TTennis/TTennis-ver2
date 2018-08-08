let btnHomeNewGame = document.querySelector('.home__new-game');

let home = document.querySelector('.home');
let settings = document.querySelector('.settings');

btnHomeNewGame.addEventListener('click', function () {
  nextStep(home, settings);
});

function nextStep(prevBlock, nextBlock) {
  prevBlock.classList.add('prev');
  prevBlock.classList.add('hidden');
  prevBlock.classList.remove('visible');

  nextBlock.classList.add('visible');
  nextBlock.classList.remove('hidden');
}
