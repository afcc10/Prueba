import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Prueba';  
  operandoA:number;
  operandoB:number;  
  resultado:number;

  constructor(){
    this.operandoA = 0;
    this.operandoB = 0;
    this.resultado = 0;
  }

  onSumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }

  onRestar():void{
    this.resultado = this.operandoA - this.operandoB;
  }

  onMultiplicar():void{
    this.resultado = this.operandoA * this.operandoB;
  }

  onPromedio():void{
    this.resultado = (this.operandoA + this.operandoB)/2;
  }
}
