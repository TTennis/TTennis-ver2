export default class Game {
  
  constructor() {
    this.fieldPlayerOne = document.querySelector('.game-player--1');
    this.fieldPlayerTwo = document.querySelector('.game-player--2');
  
    this.pointPlayerOne = this.fieldPlayerOne.querySelector('.game-player__count--1');
    this.pointPlayerTwo = this.fieldPlayerTwo.querySelector('.game-player__count--2');
    
    this.btnGameFinish = document.querySelector('.game__finish');
  }
  
  counter() {
    this.fieldPlayerOne.addEventListener('click', function () {
      alert('work');
      this.pointPlayerOne.innerHTML = +this.pointPlayerOne.innerHTML + 1; // Не работает
      Game.prototype.exitGame();
    });
  
    this.fieldPlayerTwo.addEventListener('click', function () {
      alert('work2');
      this.pointPlayerTwo.innerHTML = +this.pointPlayerTwo.innerHTML + 1; // Не работает
      Game.prototype.exitGame();
    });
  }
  
  exitGame() {
    if (+this.pointPlayerOne.innerHTML >= 21 || +this.pointPlayerTwo.innerHTML >= 21) {
      alert('End Game');
    }
    
    this.btnGameFinish.addEventListener('click', function () {
      alert('Игра закончилась');
      
    });
  }
}