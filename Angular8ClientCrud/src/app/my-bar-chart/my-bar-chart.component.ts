import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  tutorials: any;
  informacao = {
    data: [],
    label: ''
  }

  constructor(private tutorialService: TutorialService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [
    {
      data: [0],
      label: '',
    }
  ];

  ngOnInit() {
    this.countCargos()
  }

  async countCargos() {
    this.tutorialService.countCargo().subscribe(
      result => {
        this.tutorials = result;
        for(let dados of this.tutorials) {
          
          this.barChartLabels.push(dados.cargo);

          this.informacao.label = dados.cargo;
          this.informacao.data.push(dados.count);
          this.barChartData.push(this.informacao);
        }
      }, error => {
        console.error(error);
      }
    );
  }
}
