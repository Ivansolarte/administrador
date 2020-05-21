import { Injectable, Inject } from '@angular/core';
import { log } from 'util';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

ajustes:Ajustes={
  temaUrl:'assets/css/colors/default.css',
  tema: 'default'
};

  constructor(
    @Inject(DOCUMENT) private _document,
  ) {
    this.cargarAjustes();
   }

  guardarAjustes(){
    console.log('guardado en localstrorage');
    
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
  }

  cargarAjustes(){

    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('cargando satos del localsttorege');
      this.aplicarTema(this.ajustes.tema);
      
    }else{
      console.log('usando valoes por defectos');
      this.aplicarTema(this.ajustes.tema);

    }
  }
  
  aplicarTema(tema:string){
    let url = "assets/css/colors/"+tema+".css";
    this._document.getElementById('tema').setAttribute('href',url);

    this.ajustes.tema=tema;
    this.ajustes.temaUrl=url;

    this.guardarAjustes();
  }
}

interface Ajustes{
temaUrl:string;
tema:string;
}
