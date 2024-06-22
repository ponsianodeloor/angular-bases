import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'mi primera app en Angular';
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
