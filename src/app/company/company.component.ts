import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {

  companyData: Object;
  cvr = '';

  constructor(private _http: HttpService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(data => {
      this.cvr = data.id;
    })
  }
  
  ngOnInit(): void {
    this._http.getCompany(this.cvr).subscribe(data => {
      this.companyData = data;
      console.log(this.companyData);
    });
  }
}

