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
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{ data: [], label: 'Valuation' }];

  ngOnInit(): void {
    for (let i = 0; i < this.companyData['increases'].length; i++) {
      if (i == 0) {
        this.barChartData[0].data.push(
          Number(this.companyData['increases'][0].capital)
        );
      } else {
        this.barChartData[0].data.push(
          Number(this.companyData['increases'][i].valuation)
        );
      }
      this.barChartLabels.push(this.companyData['increases'][i].validFrom);
    }
  }
}