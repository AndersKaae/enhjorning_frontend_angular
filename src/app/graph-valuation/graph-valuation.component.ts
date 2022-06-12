import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-valuation',
  templateUrl: './graph-valuation.component.html',
  styleUrls: ['./graph-valuation.component.css']
})
export class GraphValuationComponent implements OnInit {
  @Input() companyData: Object;

  constructor() {}

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    showAllTooltips: true
  };
  public barChartLabels = [];
  public barChartType = 'line';
  public barChartLegend = false;
  public barChartData = [{ data: [], label: 'Valuation' }];

  ngOnInit(): void {
    console.log(this.companyData['increases']);
    for (let i = 0; i < this.companyData['increases'].length; i++) {
      if (i == 0) {
        this.barChartData[0].data.push(
          Number(this.companyData['increases'][0].capital)
        );
      } else {
        this.barChartData[0].data.push(
          Number(this.companyData['increases'][i].capital)
        );
      }
      this.barChartLabels.push(this.companyData['increases'][i].validFrom);
    }
    console.log(this.barChartData);
  }
}