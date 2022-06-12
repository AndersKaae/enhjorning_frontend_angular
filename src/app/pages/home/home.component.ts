import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
  	private meta: Meta
  	) {

    this.title.setTitle('EnhjørningBot - Investments in Danish Start Ups');
	  this.meta.addTags([
      { name: 'description', content: "Follow what's happening on the Danish Start Up scene" },
	    { name: 'twitter:card', content: 'summary' },
	    { name: 'twitter:site', content: 'enhjorning.bot' },
    	{ name: 'og:title', content: 'EnhjørningBot - Investments in Danish Start Ups'},
    	{ name: 'og:description', content: "Follow what's happening on the Danish Start Up scene"},
    	{ name: 'og:url', content: 'https://enhjorning.bot'},
    	{ name: 'og:image', content: ''}    
	  ]);
	}
	
  ngOnInit(): void {}

}
