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
     "lastUpdated":"2022-05-06T09:01:58.000+02:00",
     "ceo":[
        {
           "name":"Simon Nikolaj Eklund",
           "role":"ADM. DIR.",
           "validFrom":"2016-07-20 00:00:00",
           "validTo":"None"
        },
        {
           "name":"Anders Lyager Kaae",
           "role":"DIREKTØR",
           "validFrom":"2016-07-20 00:00:00",
           "validTo":"None"
        }
     ],
     "board":[
        {
           "name":"Steen Ulf Jensen",
           "role":"FORMAND",
           "validFrom":"2016-09-27 00:00:00",
           "validTo":"None"
        },
        {
           "name":"Simon Nikolaj Eklund",
           "role":"BESTYRELSESMEDLEM",
           "validFrom":"2016-09-27 00:00:00",
           "validTo":"None"
        },
        {
           "name":"Anders Lyager Kaae",
           "role":"BESTYRELSESMEDLEM",
           "validFrom":"2016-09-27 00:00:00",
           "validTo":"None"
        },
        {
           "name":"Peter Sandberg",
           "role":"BESTYRELSESMEDLEM",
           "validFrom":"2016-09-27 00:00:00",
           "validTo":"2021-04-19 00:00:00"
        },
        {
           "name":"Thomas Hald",
           "role":"BESTYRELSESMEDLEM",
           "validFrom":"2016-12-22 00:00:00",
           "validTo":"None"
        }
     ],
     "owner":[
        {
           "name":"LEGAL DESK ApS",
           "values":[
              {
                 "ownerPercentage":"0.5",
                 "validFrom":"2022-05-05 00:00:00",
                 "validTo":"None"
              },
              {
                 "ownerPercentage":"0.6667",
                 "validFrom":"2016-07-20 00:00:00",
                 "validTo":"2022-05-04 00:00:00"
              }
           ]
        },
        {
           "name":"JENSENGROUP MEDIA HOLDING ApS",
           "values":[
              {
                 "ownerPercentage":"0.05",
                 "validFrom":"2016-09-27 00:00:00",
                 "validTo":"2017-06-18 00:00:00"
              },
              {
                 "ownerPercentage":"0.05",
                 "validFrom":"2017-06-19 00:00:00",
                 "validTo":"None"
              }
           ]
        },
        {
           "name":"Peter Sandberg Management ApS",
           "values":[
              {
                 "ownerPercentage":"0.05",
                 "validFrom":"2016-09-27 00:00:00",
                 "validTo":"2017-06-18 00:00:00"
              },
              {
                 "ownerPercentage":"0.05",
                 "validFrom":"2017-06-19 00:00:00",
                 "validTo":"None"
              }
           ]
        },
        {
           "name":"PRICEWATERHOUSECOOPERS STATSAUTORISERET REVISIONSPARTNERSELSKAB",
           "values":[
              {
                 "ownerPercentage":"0.05",
                 "validFrom":"2017-12-31 00:00:00",
                 "validTo":"None"
              }
           ]
        }
     ],
     "increases":[
        {
           "capital":50000,
           "validFrom":"2016-07-20"
        },
        {
           "capital":55556,
           "validFrom":"2016-09-27",
           "amount":5556,
           "virkIncrease":[
              {
                 "typeIncrease":"Kontant",
                 "kurs":7200,
                 "amount":5556,
                 "subText":"kr. 5.556,00, indbetalt kontant, kurs 7.200,00. "
              }
           ],
           "virkParity":true,
           "kurs":"null",
           "virkText":"Vedtægter ændret: 27.09.2016 Kapitalforhøjelsen er besluttet den 27.09.2016. kr. 5.556,00, indbetalt kontant, kurs 7.200,00. Kapitalen udgør herefter kr. 55.556,00. Bestyrelse: Tiltrådte: @pers{\"Simon Nikolaj Eklund\",4000604182}, den 27.09.2016, @pers{\"Steen Ulf Jensen\",4000454374}, den 27.09.2016, @pers{\"Anders Lyager Kaae\",4000744514} (formand), den 27.09.2016, @pers{\"Peter Sandberg\",4004151316}, den 27.09.2016. Selskabet tegnes af bestyrelsens formand i forening med en direktør eller den samlede bestyrelse.."
        },
        {
           "capital":58520,
           "validFrom":"2017-06-19",
           "amount":2964,
           "virkIncrease":[
              
           ],
           "virkParity":false,
           "kurs":"null",
           "virkText":"Not Found!"
        },
        {
           "capital":64372,
           "validFrom":"2017-12-31",
           "amount":5852,
           "virkIncrease":[
              {
                 "typeIncrease":"Kontant",
                 "kurs":59809,
                 "amount":5852,
                 "subText":"kr. 5.852,00, indbetalt kontant, kurs 59.809,00. "
              }
           ],
           "virkParity":true,
           "kurs":"null",
           "virkText":"Vedtægter ændret: 31.12.2017 Kapitalforhøjelsen er besluttet den 31.12.2017. kr. 5.852,00, indbetalt kontant, kurs 59.809,00. Kapitalen udgør herefter kr. 64.372,00."
        },
        {
           "capital":65659,
           "validFrom":"2019-07-10",
           "amount":1287,
           "virkIncrease":[
              {
                 "typeIncrease":"Kontant",
                 "kurs":77700,
                 "amount":1287,
                 "subText":"kr. 1.287,00, indbetalt kontant, kurs 77.700,00. "
              }
           ],
           "virkParity":true,
           "kurs":"null",
           "virkText":"Vedtægter ændret: 10.07.2019 Kapitalforhøjelsen er besluttet den 10.07.2019. kr. 1.287,00, indbetalt kontant, kurs 77.700,00. Kapitalen udgør herefter kr. 65.659,00."
        },
        {
           "capital":66319,
           "validFrom":"2021-07-16",
           "amount":660,
           "virkIncrease":[
              {
                 "typeIncrease":"Kontant",
                 "kurs":100,
                 "amount":660,
                 "subText":"kr. 660,00, indbetalt kontant, kurs 100,00. "
              }
           ],
           "virkParity":true,
           "kurs":"null",
           "virkText":"Vedtægter ændret: 16.07.2021 Kapitalforhøjelsen er besluttet den 16.07.2021. kr. 660,00, indbetalt kontant, kurs 100,00. Kapitalen udgør herefter kr. 66.319,00."
        },
        {
           "capital":84995,
           "validFrom":"2022-05-05",
           "amount":18676,
           "virkIncrease":[
              {
                 "typeIncrease":"Kontant",
                 "kurs":120629,
                 "amount":18676,
                 "subText":"kr. 18.676,00, indbetalt kontant, kurs 120.629,00. "
              }
           ],
           "virkParity":true,
           "kurs":"null",
           "virkText":"Vedtægter ændret: 05.05.2022 Kapitalforhøjelsen er besluttet den 05.05.2022. kr. 18.676,00, indbetalt kontant, kurs 120.629,00. Kapitalen udgør herefter kr. 84.995,00."
        }
     ]
    }
  }
}

