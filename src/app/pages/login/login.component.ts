import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Main } from '../../main';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public userFormLogin:FormGroup;
  alert:boolean = false
  account:any;
  
  @Output() loggedInStatus =  new EventEmitter<any>();




  constructor(
    private _dialogRef:DialogRef<LoginComponent>,
    private _service:ApiService,
    private _formBuilder:FormBuilder,
    private _pageTitle:Title,
    ) {
    this.userFormLogin = this._formBuilder.group({
      username : "",
      password : "",
    })
    this._pageTitle.setTitle(`Login|${Main.Appname}`)


  }

  close() {
    this._dialogRef.close()
  }



  closeAlertHandler(data:boolean){
    
    this.alert = data
  }


  onsubmitlogin(){
    if(this.userFormLogin.valid){
      this._service.loginrequest(this.userFormLogin.value).subscribe(
        {
          next : (value) =>{
            // console.log("loremloremloremloremloremloremlorem")
            this.loggedInStatus.emit( ["success", 'You successfuly logged in ' , value] )
            console.log(value)
            

            this.close( )
          },
          error : err =>{
            this.alert = true
          }
        
        }
      )
    }
  }
}
