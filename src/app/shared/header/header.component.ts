import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from  '../../pages/login/login.component';
import { SignupComponent } from '../../pages/signup/signup.component';
import { state } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAlert = false
  satus   = "success"
  massegAlert = "YOu succefully logged in"
  _dialogref:any;

  constructor(private _dialog:MatDialog) {}




  loginpressed():void {
    this._dialog.open(LoginComponent)
  }

  signuppressed(){
    this._dialogref =  this._dialog.open(SignupComponent)
    this._dialogref.componentInstance.statusOfSignup.subscribe(
      (val:any) =>{
        this.satus = val[0];
        this.isAlert = true
        this.massegAlert = val[1]
      }
      )

  }

  closeAlertHandler(data:boolean){
    console.log(data)
    this.isAlert = data
  }
}
