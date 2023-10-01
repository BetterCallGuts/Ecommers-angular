import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Main } from '../../main';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private _title:Title) {
    this._title.setTitle(`About us|${Main.Appname}`)

    
  }
}
