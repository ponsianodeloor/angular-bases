import { Component } from '@angular/core';
import {Hero} from "../../interface/Hero";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  title = 'List of heroes';

  heroes:Hero[];
  heroForm: FormGroup;
  editingHeroId: number | null = null;
  heroEditForm: FormGroup;
  private fb: FormBuilder = new FormBuilder();

  constructor() {
    console.log('ListComponent created');
    this.heroes = [
      {
        id: 1,
        name: 'Spiderman',
        power: 'Spider sense',
        alterEgo: 'Peter Parker',
        age: 18
      },
      {
        id: 2,
        name: 'Batman',
        power: 'Rich',
        alterEgo: 'Bruce Wayne',
        age: 30
      },
      {
        id: 3,
        name: 'Superman',
        power: 'Flying',
        alterEgo: 'Clark Kent',
        age: 25
      },
      {
        id: 4,
        name: 'Flash',
        power: 'Super speed',
        alterEgo: 'Barry Allen',
        age: 22
      },
      {
        id: 5,
        name: 'Ironman',
        power: 'Rich',
        alterEgo: 'Tony Stark',
        age: 35
      },
    ];

    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      power: ['', Validators.required],
      alterEgo: ['', Validators.required],
      age: ['', Validators.required]
    });

    this.heroEditForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      power: ['', Validators.required],
      alterEgo: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log('ListComponent initialized');
  }

  ngOnDestroy() {
    console.log('ListComponent destroyed');
  }

  trackByFn(index: number, hero: Hero): number {
    return hero.id;
  }

  addHero(): void {
    const newHero: Hero = this.heroForm.value;
    newHero.id = this.heroes.length + 1; // generate a new id
    this.heroes.push(newHero);
    this.heroForm.reset();
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h.id !== hero.id);
  }

  editHero(hero: Hero): void {
    this.editingHeroId = hero.id;
    this.heroEditForm.patchValue(hero);
  }

  updateHero(hero: Hero): void {
    const index = this.heroes.findIndex(h => h.id === hero.id);
    this.heroes[index] = hero;
    this.editingHeroId = null; // reset editingHeroId after updating
  }

  deleteLatestHero(): void {
    this.heroes.pop();
  }

}
