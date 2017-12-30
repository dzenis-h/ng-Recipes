import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  myInterval;
  myNum = 0;

  constructor() {}

  ngOnInit() {}

  onStartGame() {
    console.log('Game started');
    //setInterval je ugradjena JS funkcija
    this.myInterval = setInterval(
      () => { // ES6 sranje ...
        this.intervalFired.emit(this.myNum + 1); // kako bi 1. broj bio 1
        this.myNum++;
      },
      1000 // ovo je 1 sekunda ...
    );
  }

  onPauseGame() {
    //clearInterval je ugradjena JS funkcija
    clearInterval(this.myInterval);
    console.log('Game paused');
  }
}
