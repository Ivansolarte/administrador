import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

//modulos
import { SharedModule } from '../shared/shared.module';

//ng2-charts grafias
// import { ChartsModule } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';



//rutas
import { PagesRoutes } from './pages.routes';

//componentes 
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


@NgModule({

  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],

  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    // ChartsModule
  ],

  imports: [
    CommonModule,
    SharedModule,
    PagesRoutes,
    FormsModule,
    ChartsModule
  ]
})
export class PagesModule { }
