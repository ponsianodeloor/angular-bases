import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public counter: number = 10;

  public increment() {
    this.counter++;
  }

  public decrement() {
    this.counter--;
  }

  public reset() {
    this.counter = 10;
  }

}
