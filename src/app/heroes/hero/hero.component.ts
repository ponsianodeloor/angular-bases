import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  hero = {
    id: 1,
    name: 'Windstorm',
    power: 'Weather control',
    alterEgo: 'Jane Doe',
    universe: 'DC',
    description: 'Windstorm is a fictional superhero appearing in American comic books published by DC Comics. The character was created by writer Gardner Fox and artist Dennis Neville, and first appeared in Flash Comics #1 in',
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg',
    thumbnail: 'https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg',
    movies: ['Justice League', 'Wonder'],
    comics: ['Flash Comics', 'Justice'],
    age: 30

  };

  constructor() { }

  ngOnInit() {
  }

  changeName() {
    this.hero.name = 'Superman';
  }

  changeAge() {
    this.hero.age = 35;
  }

}
