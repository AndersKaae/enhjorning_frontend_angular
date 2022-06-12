import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';

import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { HttpClientModule} from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { GraphValuationComponent } from './graph-valuation/graph-valuation.component';
import { GraphInvestmentComponent } from './graph-investment/graph-investment.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';




@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    GoogleChartsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'company/:id', component: CompanyComponent},
      {path: 'about', component: AboutComponent}
    ]),
  ],
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    GraphValuationComponent,
    GraphInvestmentComponent,
    AboutComponent
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
