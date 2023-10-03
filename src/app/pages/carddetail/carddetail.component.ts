import { Component, Input } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { Main } from 'src/app/main';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-carddetail',
  templateUrl: './carddetail.component.html',
  styleUrls: ['./carddetail.component.scss']
})
export class CarddetailComponent {

  public data!:any;
  public url:string = Main.API_IMG_URL
  public ready:boolean = false
  public pound:string  = Main.POUND
  public howManyOfThisItem:number = 0;
  public cards!:Array<object>;
  // public description:string;


  constructor(
    private _dialogref:DialogRef,
    private openTheDialog:MatDialog,

    ) {
    
    // this.description = this.data.description
    setTimeout(()=>{                           // <<<---using ()=> syntax
      // console.log(this.data);
      this.data = JSON.stringify(this.data)
      this.data = JSON.parse(this.data)
      this.ready  = true

  }, 1000);



}


  closeDialogComponent(){
    // console.log("clicked")
    this._dialogref.close()
  }

  addOne(){
    this.howManyOfThisItem++
  }

  removeOne(){
    this.howManyOfThisItem--
    if(this.howManyOfThisItem < 0){
      this.howManyOfThisItem = 0
    }
  }


  openCardDetail(card:object){
    let dialog = this.openTheDialog.open(CarddetailComponent);
    dialog.componentInstance.cards = this.cards;
    dialog.componentInstance.data  = card


  }
}
