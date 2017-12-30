import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(x: number) {
   if(x % 2 === 0){
      this.evenNumbers.push(x)
    } else {
      this.oddNumbers.push(x);
    }
  }

/* ili ovako -->
console.log(x);
    x % 2 === 0
      ? this.evenNumbers.push(x)
      : this.oddNumbers.push(x);
  }
}*/

 