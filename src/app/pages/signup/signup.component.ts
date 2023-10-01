import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';
import { Main } from '../../main';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public formGroup:FormGroup;
  
  
  @Output() statusOfSignup =  new EventEmitter<any>();
  alert = false
  status!:string;
  masseg!:string;



  constructor(
    private _dialogRef:DialogRef<SignupComponent>,
    private _formBuilder:FormBuilder,
    private _service:ApiService,
    private _pageTitle:Title
    ) {
    this.formGroup = this._formBuilder.group({
      username : "",
      email    : "",
      password1 : "",
      password2: ""
    })
    this._pageTitle.setTitle(`Signup|${Main.Appname}`)
  }




  signupsubmit(){
    if (this.formGroup.valid && this.formGroup.value.password1 == this.formGroup.value.password2){
      console.log(this.formGroup.value.username)
      this._service.signuprequest(this.formGroup.value).subscribe(
        {
          

          next : (value)=> {
            console.log(value)
            this.statusOfSignup.emit(["success", 'You successfuly created an account'])
            this.close()
          },
          error : (error) =>{
           this.alert = true;
           console.log(error.error.status)
           this.masseg = error.error.status
           this.status = 'danger'


          }

        }
      )

    }
  }
  close() {
    this._dialogRef.close()
  }

  closeAlertHandler(data:boolean){
    console.log(data)
    this.alert = data
  }
}
