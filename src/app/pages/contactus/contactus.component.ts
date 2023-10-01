import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Main } from '../../main';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {


  constructor( private title:Title) {
    this.title.setTitle(`Contact us|${Main.Appname}`)

  }
}

