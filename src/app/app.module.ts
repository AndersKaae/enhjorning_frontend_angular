import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';

import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { HomeComponent } from './home/home.component';

import { HttpClientModule} from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { GraphValuationComponent } from './graph-valuation/graph-valuation.component';
import { GraphInvestmentComponent } from './graph-investment/graph-investment.component';




@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    GraphValuationComponent,
    GraphInvestmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    GoogleChartsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'company/:id', component: CompanyComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
