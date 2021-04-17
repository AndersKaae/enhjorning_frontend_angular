import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-investment',
  templateUrl: './graph-investment.component.html',
  styleUrls: ['./graph-investment.component.css']
})
export class GraphInvestmentComponent implements OnInit {
  @Input() companyData: Object;

  constructor() {}

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    showAllTooltips: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{ data: [], label: 'Investment' }];

  ngOnInit(): void {
    for (let i = 0; i < this.companyData['increases'].length; i++) {
      if (i == 0) {
        this.barChartData[0].data.push(
          Number(this.companyData['increases'][0].capital)
        );
      } else {
        this.barChartData[0].data.push(
          Number(this.companyData['increases'][i].investment)
        );
      }
      this.barChartLabels.push(this.companyData['increases'][i].validFrom);
    }
  }
}