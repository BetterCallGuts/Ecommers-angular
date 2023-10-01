import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Main } from '../../main';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {

  constructor (private _pageTitle:Title) {
    this._pageTitle.setTitle(`Store|${Main.Appname}`)

  }

}
