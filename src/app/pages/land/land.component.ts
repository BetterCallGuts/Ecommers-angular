import { Component, OnInit } from '@angular/core';
import { Main } from '../../main';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss']
})
export class LandComponent implements OnInit{


ngOnInit(): void {

}

constructor (
  private _pageTitle:Title 
) {

  this._pageTitle.setTitle(`Welcome|${Main.Appname}`)

}

}
