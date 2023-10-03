import { Component, Input } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-carddetail',
  templateUrl: './carddetail.component.html',
  styleUrls: ['./carddetail.component.scss']
})
export class CarddetailComponent {

  public data!:object;
  // public description:string;


  constructor(private _dialogref:DialogRef) {
    
    // this.description = this.data.description
    console.log(this.data)



}

}
