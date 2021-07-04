import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  base: number = 10;
  contador:number = 0;
   
  acumular():void{
    this.contador += this.base;    
  }
  restar():void{
    this.contador -= this.base;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
