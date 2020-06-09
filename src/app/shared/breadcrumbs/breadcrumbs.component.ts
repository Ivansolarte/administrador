import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  pagina: string = '';

  constructor(

    private router:Router,
    public titulo: Title

  ) {

    this.getDataRoute()
    .subscribe(data=>{

      console.log(data);
      this.pagina=data.titulo;
      this.titulo.setTitle(this.pagina);

    })

   }

   getDataRoute(){

    return this.router.events
    .pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento:ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento:ActivationEnd) => evento.snapshot.data)
    )

   }

  ngOnInit() {
  }

}
