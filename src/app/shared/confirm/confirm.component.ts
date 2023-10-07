import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {




  public status!:boolean;
  public masseg!:string;


  constructor(
    private _dialogRef:DialogRef
  ) {
    
  }

  
  beRaady(){
    this.status = true
    this._dialogRef.close()
  }


  close(){
    this._dialogRef.close()
    this.status = false
  }
}
