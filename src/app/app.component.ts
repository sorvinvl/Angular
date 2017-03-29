import { Component } from '@angular/core';
import { Hero } from "./hero";
@Component({
  selector: 'my-app',
 template: `
  <h1>{{title}}</h1>
  <h2>Мой любимый город: {{myHero.name}}</h2>
  <p>Города-герой:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
    </li>
  </ul>
<p *ngIf="heroes.length > 3">Много городов!</p>
`
})
export class AppComponent {
  title = 'Тур по Городам-Героям';
 heroes = [
  new Hero(1, 'Масква'),
  new Hero(13, 'Ленинград'),
  new Hero(15, 'Минск'),
  new Hero(20, 'Шумиха')
];
myHero = this.heroes[3];
}