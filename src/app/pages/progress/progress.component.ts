import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  porcentaje1: number = 1;
  porcentaje2: number = 2;

  constructor() { }

  ngOnInit() {
  }

  actualizar(event: number){

    // console.log('evento: ',event);
    
  }

}
