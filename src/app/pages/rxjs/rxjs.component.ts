import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  subscription:Subscription;

  constructor() {

    this.subscription = this.regresaObservable()    
    .subscribe(
      numero => console.log("sub",numero),
      error => console.error('error en el obs ',error),
      () => console.log('el observador termino')
    );

   }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }

  regresaObservable(): Observable<any> {

    return new Observable (observer =>{

      let contador = 0;

      let intervalo = setInterval( ()=>{

        contador +=1;

        let salida = {
          valor:contador
        };

        observer.next(salida);

        // if (contador === 3) {

        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('!mensaje del error observador!');
        // }

      },500)

    }).pipe(
      retry(2),
      map((rest:any)=>{
        return rest.valor;
      }),
      filter((valor,index)=>{
       if ((valor%2)===1) {
        //  impa
        return true;
       } else {
        //  par
        return false;
       }
        
      })
    );
    
  }
}
