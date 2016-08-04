import { Component } from '@angular/core';

export class Hero{
	id: number;
	name: string;
}

@Component({
    selector: 'my-app',
    template: ` <h1>{{title}}</h1>
    			<h2>My Heroes</h2>
    			<ul class="heroes">
    				<li *ngFor="let hero of heroes">
    					<span class="badge">{{hero.id}}</span> {{hero.name}}
    				</li>
    			</ul>
    			<h2>{{hero.name}} details!</h2>
    			<div><label>id: </label>{{hero.id}}</div>
    			<div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"></div>`
})

export class AppComponent {
	title = 'Tour of Heroes';
	hero = Hero = {
		id: 1,
		name: 'Windstorm'
	};

	public heroes = HEROES;
 }

const HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice'},
	{ id: 12, name: 'Bombasto'},
	{ id: 13, name: 'Celeritas'},
	{ id: 14, name: 'Magneta'},
	{ id: 15, name: 'RubberMan'},
	{ id: 16, name: 'Dynama'},
	{ id: 17, name: 'Dr IQ'},
	{ id: 18, name: 'Magma'},
	{ id: 19, name: 'Tornado'},
	{ id: 20, name: 'Superman'},
]