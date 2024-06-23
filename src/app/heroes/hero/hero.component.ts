import { Component } from '@angular/core';
import {Hero} from "../../interface/Hero";

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public hero:{id: number, name:string, power:string, alterEgo:string, age:number} = {
    id: 1,
    name: 'Windstorm',
    power: 'Weather control',
    alterEgo: 'Jane Doe',
    age: 30
  };

  public heroTwo:Hero = {
    id: 2,
    name: 'Batman',
    power: 'Rich',
    alterEgo: 'Bruce Wayne',
    age: 40
  }

  constructor() { }

  ngOnInit() {
  }

  changeHero():void {
    this.hero = {
      id: 3,
      name: 'Spiderman',
      power: 'Spider',
      alterEgo: 'Peter Parker',
      age: 25
    };
  }

  changeHeroBatman():void {
    this.hero = this.heroTwo;
  }

  changeName():void {
    this.hero.name = 'Superman';
  }

  changeAge():void {
    this.hero.age = 35;
  }

  get capitalizedName():string {
    return this.hero.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.hero.name} is ${this.hero.alterEgo}`;
  }

}
