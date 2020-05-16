import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos
import { SharedModule } from '../shared/shared.module';

//rutas
import { PagesRoutes } from './pages.routes';

//componentes 
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({

  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],

  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],

  imports: [
    CommonModule,
    SharedModule,
    PagesRoutes
  ]
})
export class PagesModule { }
