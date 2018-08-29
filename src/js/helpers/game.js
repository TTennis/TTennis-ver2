export default class Game {
  
  constructor() {
    this.fieldPlayerOne = document.querySelector('.game-player--1');
    this.fieldPlayerTwo = document.querySelector('.game-player--2');
  
    this.pointPlayerOne = this.fieldPlayerOne.querySelector('.game-player__count--1');
    this.pointPlayerTwo = this.fieldPlayerTwo.querySelector('.game-player__count--2');
    
    this.btnGameFinish = document.querySelector('.game__finish');
  }
  
  counter() {
    this.fieldPlayerOne.addEventListener('click', () => {
      this.pointPlayerOne.innerHTML = String(+this.pointPlayerOne.innerHTML + 1);
      this.exitGame();
    });
  
    this.fieldPlayerTwo.addEventListener('click', () => {
      this.pointPlayerTwo.innerHTML = String(+this.pointPlayerTwo.innerHTML + 1);
      this.exitGame();
    });
  }
  
  exitGame() {
    
    if (+this.pointPlayerOne.innerHTML >= 21 || +this.pointPlayerTwo.innerHTML >= 21) {
      alert('End Game');
      console.log(1);
    }
    
    this.btnGameFinish.addEventListener('click', function () {
    
    });
  }
}