import { Component, OnInit,  Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styleUrls: ['./accout-settings.component.css']
})
export class AccoutSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document,
    private _ajustesService: SettingsService
  ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema:string , link: any){
    this.aplicarCheck(link);

    this._ajustesService.aplicarTema(tema);
    
  }

  aplicarCheck(link: any){

    const selectors: any = document.getElementsByClassName('selector');
    
    for(let ref of selectors){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(){
    const selectors: any = document.getElementsByClassName('selector');
    let tema = this._ajustesService.ajustes.tema;
    
    for(let ref of selectors){
      if (ref.getAttribute('data-theme')===tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
