import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

const pagesRoutes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
          {path: 'dashboard', component: DashboardComponent},
          {path: 'progress', component: ProgressComponent},
          {path: 'graficas1', component: Graficas1Component},
          {path: 'account-settings', component: AccoutSettingsComponent},
          {path: '', pathMatch:'full', redirectTo:'/dashboard'},
          {path: '**', component: NopagefoundComponent},
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})
export class PagesRoutes {}
