import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';
import { CarddetailComponent } from '../carddetail/carddetail.component';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';
import { PaymentComponent } from 'src/app/shared/payment/payment.component';
import { UpdatecardComponent } from '../updatecard/updatecard.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  public cards:Array<object> = [];
  public empty:boolean       = true;

  ngOnInit(): void {

    this.checkForUser()
    this.getData()
  }
  constructor(
    private _service:ApiService,
    private openTheDialog:MatDialog
  ){

  }


  openCardDetail(card:any){
    // let dialog = this.openTheDialog.open(CarddetailComponent);
    // dialog.componentInstance.cards = this.cards;
    // dialog.componentInstance.data  = card
    let auth:any = localStorage.getItem('isloggedin')
    card = JSON.stringify(card)
    card = JSON.parse(card)
    if (auth == null || auth == "false"){
      let dialog = this.openTheDialog.open(UpdatecardComponent);
      dialog.componentInstance.data = card;


      dialog.componentInstance.total = 0;
      dialog.componentInstance.ready = true
      dialog.componentInstance.reloadHandler()

    } else{
      let dialog = this.openTheDialog.open(UpdatecardComponent);
      this._service.getCartTotalForUser(localStorage.getItem('userid'), card.id).subscribe({
        next: (val:any)=>{

          dialog.componentInstance.total     = val.howmany * card.price
          dialog.componentInstance.ordered     = val.howmany 
          dialog.componentInstance.counterItem = dialog.componentInstance.ordered 
          console.log(val)
          
          dialog.componentInstance.data = card;
          dialog.componentInstance.ready = true
          dialog.componentInstance.reloadHandler()

        },
        error: console.log
      })
    

  }
}

  checkForUser(){
    let user = localStorage.getItem('isloggedin')
    if (user == 'true'){ return}
    else{
      location.replace('store')
    }
  }

  deleteCart(){


    let c = this.openTheDialog.open(ConfirmComponent)
    c.componentInstance.masseg = 'delete youre Cart?'
    c.afterClosed().subscribe({
      next: ()=>{

      this.deleteCartCall(c)
      },
      error: console.log
    })
    

  }



  deleteCartCall(c:any){
    if(c.componentInstance.status == true)
    {

      this._service.clearCart(localStorage.getItem('userid')).subscribe(
      {
        next: (val)=>{
          location.reload()
        },
        error: console.log
      })

    }
  }

  getData(){
    this._service.getAllCartForUser(localStorage.getItem('userid')).subscribe({
      next: (val:any)=>{
        this.cards = val.data
        this.empty = val.empty
        console.log(val)
      },
      error: console.log
    })
  }


  openPayment(){
    let component = this.openTheDialog.open(PaymentComponent)

  }
}
