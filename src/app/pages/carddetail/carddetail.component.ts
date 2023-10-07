import { Component, Input, Output } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { Main } from 'src/app/main';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-carddetail',
  templateUrl: './carddetail.component.html',
  styleUrls: ['./carddetail.component.scss']
})
export class CarddetailComponent {

  public data!:any;
  public url:string = Main.API_IMG_URL
  public ready:boolean = false;
  public counterItem:number =  0;
  public pound:string  = Main.POUND;
  public ordered!:any;
  public howManyOfThisItem:number = 0;
  public cards!:Array<any>;
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


  openCardDetail(card:any){
    // let dialog = this.openTheDialog.open(CarddetailComponent);
    // dialog.componentInstance.cards = this.cards;
    // dialog.componentInstance.data  = card
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
      this._service.getCartTotalForUser(localStorage.getItem('userid'), card.id).subscribe({
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
}

  totalCost(n:any){
    
    return n * this.data.price
  }


  addToCart(){

    if(this.counterItem === 0){

      
      this.masseg = `You must add at least 1 or more!`;
      this.status = 'info';
      this.alert = true;

    }else{


      const isloggedin  = localStorage.getItem('isloggedin')


      if (isloggedin === null || isloggedin === 'false'){

        this.loginHandler()

      }else{
        const acc = localStorage.getItem("userid");
        this._service.addToCart({
              "userid" : acc,
              "itemid" : this.data.id,
              "howmany":this.counterItem,
        }).subscribe({
          next:  (data)=>{  
            this.masseg = `Successfully Added ${this.counterItem} of ${this.data.name} to cart`;
            this.status = 'success';
            this.alert = true;
            this.ordered += this.counterItem
            this.refreshTheTotalOrder()
            this.refreshCounter()

          },
          error: console.log
        })

      }
    }
  }

  refreshTheTotalOrder(){
    this.total = this.data.price * this.ordered
  }
  closeAlertHandler(data:boolean){
    
    this.alert = data
  }
  refreshCounter(){
    this.counterItem = 0;
    this.totalCounter= 0 ;
  }

  loginHandler():void {
    let w__dialogref = this.openTheDialog.open(LoginComponent)
    w__dialogref.componentInstance.loggedInStatus.subscribe(
      (val:any) =>{
          this.status       = val[0];
          this.alert     = true;
          this.masseg = val[1];
          localStorage.setItem('isloggedin', 'true'); 
          localStorage.setItem('userid', val[2].id); 
          location.reload()
          // this._service.getCartTotalForUser( val[2], this.data.id).subscribe(
          //   {
          //     next: (val)=>{
          //       console.log(val)
          //     },
          //     error: console.log
          //   }
          // )
        }
    )

  }
}
