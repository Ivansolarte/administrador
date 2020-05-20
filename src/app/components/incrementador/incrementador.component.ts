import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtporcentaje') txtporcentaje: ElementRef;

  @Input('nombre') leyenda: string ='leyenda';
  @Input() porcentaje: number = 50;

  @Output('actualNUmero') cambioValor: EventEmitter<number>= new EventEmitter();

  constructor() { 
    // console.log(this.leyenda);
    // console.log(this.porcentaje);
    
  }

  ngOnInit() {
  }

  onChanger( nuevoValor: number ){

    // let elemtHTML: any = document.getElementsByName('porcentaje')[0];
  

    if (nuevoValor >= 100 ) {
      this.porcentaje=100;
    } else if (nuevoValor <= 0) {
      this.porcentaje=0;
    } else {
      this.porcentaje=nuevoValor;
    }

    // elemtHTML.value =this.porcentaje;
    this.txtporcentaje.nativeElement.value = this.porcentaje;
   
    this.cambioValor.emit(this.porcentaje);  

  }

  cambiarValor(valor:number){
    if (this.porcentaje>=100 && valor > 0) {
      this.porcentaje=100;
      return
    }
    if (this.porcentaje<=5 && valor < 0) {
      this.porcentaje=0;
      return
    }
    this.txtporcentaje.nativeElement.focus();
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje); 

  }

}
