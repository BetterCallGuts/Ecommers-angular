import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Main } from '../../main';
import { ApiService } from '../api.service';
import { MatDialog  } from "@angular/material/dialog";
import { CarddetailComponent } from '../carddetail/carddetail.component';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements  OnInit {

  ngOnInit(): void {
    this.getalldata()
  }
  cars:Array<string>       = [];
  categories:Array<string> = [];
  cards:Array<object>  = [];



  constructor (
    private _pageTitle:Title ,
    private _api:ApiService  ,
    private openTheDialog:MatDialog,
    )
    { 
      this._pageTitle.setTitle(`Store|${Main.Appname}`)
  }
  
  getalldata ( ) {
    
    this._api.getalldata().subscribe({
      next : (val) => {
        // console.log(val)
        for (let obj of val.cars) {
          this.cars.push(obj.Name)
          // console.log(obj.Name) 
        }
        for (let cat of val.categories) {
          this.categories.push(cat.name)
        }
        // this.cars = val.cars
        this.cards = val.items
        // console.log(this.cards)
        // console.log('finished')
        // console.log(this.cards)
      },

      error: (err) => {
        console.log(err)
      }
    })
  }

  openCardDetail(card:object){
    let dialog = this.openTheDialog.open(CarddetailComponent);
    dialog.componentInstance.data = card
    dialog.componentInstance.cards= this.cards
    // console.log(card)
    // console.log(typeof card)
    


  }

}
