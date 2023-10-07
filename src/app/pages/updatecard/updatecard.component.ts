import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { Main } from 'src/app/main';

@Component({
  selector: 'app-updatecard',
  templateUrl: './updatecard.component.html',
  styleUrls: ['./updatecard.component.scss']
})
export class UpdatecardComponent {


  public data!:any;
  public url:string = Main.API_IMG_URL
  public ready:boolean = false;
  public counterItem!:number;
  public pound:string  = Main.POUND;
  public ordered!:any;
  public howManyOfThisItem:number = 0;
  public total!:number;
  public totalCounter:number = 0;
  public alert:boolean= false;
  public status:string = "";
  public masseg:String = "";
  // public description:string;


  
constructor(
    private _dialogref:DialogRef,
    private openTheDialog:MatDialog,
    private _service:ApiService

    ) {
    
    // this.description = this.data.description
   ;



}



  reloadHandler() {

      this.data = JSON.stringify(this.data)
      this.data = JSON.parse(this.data)
      
      this.totalCost(this.total)
  }


  closeDialogComponent(){
    // console.log("clicked")
    this._dialogref.close()
  }

  addOne(){
    this.counterItem++
     
    this.totalCounter = this.totalCost(this.counterItem)

  }

  removeOne(){
    this.counterItem--
    if(this.counterItem < 0){
      this.counterItem = 0
    }
    this.totalCounter=  this.totalCost(this.counterItem  )
  }




  totalCost(n:any){
    
    return n * this.data.price
  }


  
  refreshTheTotalOrder(){
    this.total    = this.data.price * this.counterItem
    this.ordered  = this.counterItem
  }
  closeAlertHandler(data:boolean){
    
    this.alert = data
  }
  refreshCounter(){
    this.counterItem = 0;
    this.totalCounter= 0 ;
  }



  updateCart(){
    let userid = localStorage.getItem('userid');
    let itemid = this.data.id;
    let howmuch=this.counterItem


    this._service.updateCart({ userid : userid, itemid: itemid, howmuch : howmuch}).subscribe({
      next: (val)=>{
        this.refreshTheTotalOrder()
      },
      error : console.log
    })
  }



  deleteItemFromCart(){


    let data:object = {
      userid : localStorage.getItem('userid'),
      itemid : this.data.id

    }
    this._service.deleteItemFromCart(data).subscribe({
      next: val =>{
        location.reload()
      },
      error: console.log
    })
  }

}
