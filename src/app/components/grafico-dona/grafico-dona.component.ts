import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  // @Input() doughnutChartLabels: any ='leyenda';
  // @Input() doughnutChartData: any ='leyenda';
  // @Input() doughnutChartType: any ='leyenda';

   // Doughnut
   @Input('chartData') doughnutChartLabels: string[] = [];
   @Input('chartLabels') doughnutChartData: number[] = [];
   @Input('chartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
