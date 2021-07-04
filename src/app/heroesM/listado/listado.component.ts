import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['CapitanAmerica','IronMan','Hulk','BlackWidow','Thor','HawkEye'];
  deleteHeroes: String[] = [];
  
  constructor() { }
  addHero(hero:string):void{
    var c= 0;
    for(let i = 0; i < this.heroes.length; i++){
      if(this.heroes[i] == hero){
          c = 1;
          console.log(hero);
          break;
      }
   }

   for(let i = 0; i < this.deleteHeroes.length; i++){
    if(this.deleteHeroes[i] == hero){
        //c = 1;
        //console.log(hero);
        this.deleteHeroes.splice(i,1);
        break;
    }
 }

   if(c == 0){
    this.heroes.push(hero);
  }else{
    alert("El Heroe ya existe en la lista");
  }
   

  }
  deleteHero(hero:string):void{
   for(let i = 0; i < this.heroes.length; i++){
      if(this.heroes[i] == hero){
        this.deleteHeroes.push(hero);
        this.heroes.splice(i,1);
          alert("Heroe Eliminado");
      }
   }
    
  }
  ngOnInit(): void {
  }

}
