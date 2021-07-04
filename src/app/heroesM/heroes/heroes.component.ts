import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  nombre:string = 'IronMan';
  edad: number = 31;

  get nombreCapitalizado(){
    return this.nombre.toLocaleUpperCase();
  }

  cambiarHero(){
    this.nombre = 'Spiderman';
    this.edad = 29;
  }

  obtenerNombre():string {
    return `${this.nombre} - ${this.edad}`;
  }
  constructor() { } 

  ngOnInit(): void {
  }

}
