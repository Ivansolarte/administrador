import { Component, OnInit } from '@angular/core';
import { log } from 'util';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {

    

    this.contarTres().then(
      // ()=>console.log('termino!') 
      mensaje =>console.log('termino!', mensaje) 
    )
    .catch(error => console.error('error en el promesa',error))

   }

  ngOnInit() {
  }

  contarTres():Promise<boolean>{

    return new Promise((resolve,reject)=>{

      let contador =0;
      let intervalo = setInterval( ()=>{

        contador +=1;
        console.log(contador);
        
        if (contador === 3) {
          // resolve();
          // reject('simplente un error');
          resolve(true);
          clearInterval(intervalo);
        }

      },1000 )

    });
  }

}
