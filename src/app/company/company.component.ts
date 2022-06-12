import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
 

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {

  companyData: Object;
  cvr = '';

  constructor(
      private _http: HttpService,
      private activatedRoute: ActivatedRoute,
      private title: Title,
      private meta: Meta,
    ) {

    this.activatedRoute.params.subscribe(data => {
      this.cvr = data.id;
    });

    this.title.setTitle("See company details for CVR" + this.cvr);
    this.meta.addTags([
      { name: 'description', content: "See investment and valuation history for CVR " +this.cvr},
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'enhjorning.bot/compan/'+this.cvr },
      { name: 'og:title', content: "See company details for CVR" + this.cvr},
      { name: 'og:description', content: "See investment and valuation history for CVR " + this.cvr},
      { name: 'og:url', content: 'https://enhjorning.bot'},
      { name: 'og:image', content: ''}    
    ]);

  }
  
  ngOnInit(): void {
    /*this._http.getCompany(this.cvr).subscribe(data => {
      this.companyData = data;
      console.log(this.companyData);
    });
    */
    this.companyData = {
      "cvr":"37890235",
      "name":"LegalDesk.dk ApS",
      "website":"www.legaldesk.dk",
      "businessCode":"Detailhandel via Internettet med digitale produkter",
      "lastUpdated":"2020-08-24T16:29:49.000+02:00",
      "ceo":[
        {"name":"Simon Nikolaj Eklund","role":"ADM. DIR.","validFrom":"2016-07-20 00:00:00","validTo":"None"},
        {"name":"Anders Lyager Kaae","role":"DIREKTØR","validFrom":"2016-07-20 00:00:00","validTo":"None"}],
      "boardMembers":[
        { 
          "name":"Steen Ulf Jensen",
          "role":"BESTYRELSESMEDLEM",
          "validFrom":"2016-09-27 00:00:00",
          "validTo":"None"
        },
        {"name":"Simon Nikolaj Eklund","role":"BESTYRELSESMEDLEM","validFrom":"2016-09-27 00:00:00","validTo":"None"},
        {"name":"Anders Lyager Kaae","role":"FORMAND","validFrom":"2016-09-27 00:00:00","validTo":"None"},
        {"name":"Peter Sandberg","role":"BESTYRELSESMEDLEM","validFrom":"2016-09-27 00:00:00","validTo":"None"},
        {"name":"Thomas Hald","role":"BESTYRELSESMEDLEM","validFrom":"2016-12-22 00:00:00","validTo":"None"}
        ],
      "owners":[
        {"name":"Peter Sandberg Management ApS",
          "values":[{"ownerPercentage":"0.05","validFrom":"2016-09-27 00:00:00","validTo":"2017-06-18 00:00:00"},
        {"ownerPercentage":"0.05","validFrom":"2017-06-19 00:00:00","validTo":"None"}]},
        {"name":"PRICEWATERHOUSECOOPERS STATSAUTORISERET REVISIONSPARTNERSELSKAB","values":[{"ownerPercentage":"0.05","validFrom":"2017-12-31 00:00:00","validTo":"None"}]},
        {"name":"LEGAL DESK ApS","values":[{"ownerPercentage":"0.6667","validFrom":"2016-07-20 00:00:00","validTo":"None"}]
      }],
      "increases":[
        {"capital":50000.0,"validFrom":"2016-07-20"},
        {"capital":55556.0,
          "validFrom":"2016-09-27",
          "amount":5556.0,
          "virkIncrease":[{
              "typeIncrease":"Kontant",
              "kurs":7200.0,
              "amount":5556.0,
              "subText":"kr. 5.556,00, indbetalt kontant, kurs 7.200,00. "
          }],
          "virkParity":true,
          "kurs":"null",
            "virkText":"29.09.2016  Ændring i personkreds, Ændring af kapital CVR-nummer: 37890235Navn og adresse: LegalDesk.dk ApSKrusågade 13, kl. d., 1719 København V   Vedtægter ændret: 27.09.2016 Kapitalforhøjelsen er besluttet den 27.09.2016. kr. 5.556,00, indbetalt kontant, kurs 7.200,00. Kapitalen udgør herefter kr. 55.556,00.  Bestyrelse:  Tiltrådte: Simon Nikolaj Eklund, den 27.09.2016, Steen Ulf Jensen, den 27.09.2016, Anders Lyager Kaae (formand), den 27.09.2016, Peter Sandberg, den 27.09.2016. Selskabet tegnes af bestyrelsens formand i forening med en direktør eller den samlede bestyrelse.."},
        { "capital":58520.0,"validFrom":"2017-06-19",
          "amount":2964.0,
          "virkIncrease":[{
            "typeIncrease":"Kontant",
            "kurs":27000.0,
            "amount":2964.0,"subText":"kr. 2.964,00, indbetalt kontant, kurs 27.000,00. "
          }],
            "virkParity":true,"kurs":"null","virkText":"19.06.2017  Ændring af kapital CVR-nummer: 37890235Navn og adresse: LegalDesk.dk ApSKrusågade 13, kl. d, 1719 København V   Vedtægter ændret: 19.06.2017 Kapitalforhøjelsen er besluttet den 19.06.2017. kr. 2.964,00, indbetalt kontant, kurs 27.000,00. Kapitalen udgør herefter kr. 58.520,00."},
        {"capital":64372.0,"validFrom":"2017-12-31","amount":5852.0,"virkIncrease":[{"typeIncrease":"Kontant","kurs":59809.0,"amount":5852.0,"subText":"kr. 5.852,00, indbetalt kontant, kurs 59.809,00. "}],"virkParity":true,"kurs":"null","virkText":"05.01.2018  Ændring af kapital CVR-nummer: 37890235Navn og adresse: LegalDesk.dk ApSKrusågade 13, kl. d, 1719 København V   Vedtægter ændret: 31.12.2017 Kapitalforhøjelsen er besluttet den 31.12.2017. kr. 5.852,00, indbetalt kontant, kurs 59.809,00. Kapitalen udgør herefter kr. 64.372,00."},
        {"capital":65659.0,"validFrom":"2019-07-10","amount":1287.0,"virkIncrease":[{"typeIncrease":"Kontant","kurs":77700.0,"amount":1287.0,"subText":"kr. 1.287,00, indbetalt kontant, kurs 77.700,00. "}],"virkParity":true,"kurs":"null","virkText":"16.07.2019  Ændring af kapital CVR-nummer: 37890235Navn og adresse: LegalDesk.dk ApSTrommesalen 5, 5. tv, 1614 København V   Vedtægter ændret: 10.07.2019 Kapitalforhøjelsen er besluttet den 10.07.2019. kr. 1.287,00, indbetalt kontant, kurs 77.700,00. Kapitalen udgør herefter kr. 65.659,00."}
        ]
      };
  }
}

