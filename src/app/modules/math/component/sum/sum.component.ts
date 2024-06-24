import { Component } from '@angular/core';

@Component({
  selector: 'app-math-sum',
  templateUrl: './sum.component.html',
  styleUrl: './sum.component.css'
})
export class SumComponent {

  public numberOne: number = 10;
  public numberTwo: number = 20;
  public sum: number = 0;

  public calculateSum() {
    this.sum = this.numberOne + this.numberTwo;
  }

  public reset() {
    this.numberOne = 10;
    this.numberTwo = 20;
    this.sum = 0;
  }

}
