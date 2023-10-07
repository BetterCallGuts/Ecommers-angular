import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from  '../../pages/login/login.component';
import { SignupComponent } from '../../pages/signup/signup.component';
import { state } from '@angular/animations';
import { asyncScheduler } from 'rxjs';
import { async } from '@angular/core/testing';

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



  ngOnInit(): void {
    this.authHandler()
    
  }


  constructor(private _dialog:MatDialog) {}


  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    window.opener.location.reload();
  
  }

  loginpressed():void {
    this._dialogref = this._dialog.open(LoginComponent)
    this._dialogref.componentInstance.loggedInStatus.subscribe(
      (val:any) =>{
          this.satus       = val[0];
          this.isAlert     = true;
          this.massegAlert = val[1];
          this.isLoggedIn = true
          localStorage.setItem('isloggedin', 'true'); 
          localStorage.setItem('userid', val[2].id); 
          
          location.reload()


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
        localStorage.setItem('userid', val[2].id); 
        location.reload()

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
    localStorage.removeItem('userid');
      location.reload()
    
    
    // this.isLoggedIn = false
    // this.isAlert = true
    // this.massegAlert = "Successfully logged out!"
    // this.satus       = "warning"



  }



}
