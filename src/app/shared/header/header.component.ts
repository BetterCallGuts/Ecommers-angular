import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from  '../../pages/login/login.component';
import { SignupComponent } from '../../pages/signup/signup.component';
import { state } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAlert = false
  satus   = "success"
  massegAlert = "YOu succefully logged in"
  _dialogref:any;
  isLoggedIn!:boolean;

  @Output() auth_data =  new EventEmitter<any>();


  ngOnInit(): void {
    this.authHandler()
    
  }


  constructor(private _dialog:MatDialog) {}




  loginpressed():void {
    this._dialogref = this._dialog.open(LoginComponent)
    this._dialogref.componentInstance.loggedInStatus.subscribe(
      (val:any) =>{
          this.satus       = val[0];
          this.isAlert     = true;
          this.massegAlert = val[1];

          this.isLoggedIn = true
          localStorage.setItem('isloggedin', 'true'); 
          this.auth_data.emit(val[2])

        }
    )

  }

  signuppressed(){
    this._dialogref =  this._dialog.open(SignupComponent)
    this._dialogref.componentInstance.statusOfSignup.subscribe(
      (val:any) =>{
        this.satus = val[0];
        this.isAlert = true
        this.massegAlert = val[1]
        this.isLoggedIn = true
        localStorage.setItem('isloggedin', 'true'); 
        this.auth_data.emit(val[2])
      }
      )

  }

  closeAlertHandler(data:boolean){
    // console.log(data)
    this.isAlert = data
  }


  authHandler(){
    const isloggedin  = localStorage.getItem('isloggedin')
    if (isloggedin === null){
      this.isLoggedIn = false;

    } else if (isloggedin === 'false') {
      this.isLoggedIn = false;
    } else if (isloggedin === 'true') {
      this.isLoggedIn = true;
    }

  }

  logouHandler(){
    localStorage.setItem('isloggedin' , 'false');
    this.isLoggedIn = false

  }



}
