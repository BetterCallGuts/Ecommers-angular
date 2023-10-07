import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  openCardDetail(card:any){
    
    let auth:any = localStorage.getItem('isloggedin')
    card = JSON.stringify(card)
    card = JSON.parse(card)
    if (auth == null || auth == "false"){
      let dialog = this.openTheDialog.open(CarddetailComponent);
      dialog.componentInstance.cards= this.cards;
      dialog.componentInstance.data = card;


      dialog.componentInstance.total = 0;
      dialog.componentInstance.ready = true
      dialog.componentInstance.reloadHandler()

    } else{
      let dialog = this.openTheDialog.open(CarddetailComponent);
      this._api.getCartTotalForUser(localStorage.getItem('userid'), card.id).subscribe({
        next: (val:any)=>{

          dialog.componentInstance.total     = val.howmany * card.price
          dialog.componentInstance.ordered     = val.howmany 
          console.log(val)
          
          dialog.componentInstance.data = card;
          dialog.componentInstance.cards= this.cards;
          dialog.componentInstance.ready = true
          dialog.componentInstance.reloadHandler()

        },
        error: console.log
      })
    }
    // console.log(card)
    // console.log(typeof card)
    


  }

}
