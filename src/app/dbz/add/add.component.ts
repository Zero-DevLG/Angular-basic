import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() nuevo: Personaje =  {
    nombre: '',
    poder: 0
  }

  constructor(private DbzService: DbzService){}

 // Emitir eventos @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter<Personaje>();
   

  ngOnInit(): void {
  }


  agregar(){
    if(this.nuevo.nombre.trim().length === 0){ return; }
    //this.onNewCharacter.emit(this.nuevo);
    this.DbzService.addCharacter(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  
  }
}
