import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  constructor(private _dialogRef:DialogRef<LoginComponent>, private _service:ApiService) {}

  close() {
    this._dialogRef.close()
  }


  onsubmitlogin(){
    this._service.giverequest().subscribe(
      {
        next : (value) =>{
          console.log("loremloremloremloremloremloremlorem")
          console.log(value)
        },
        error : err =>{
          console.log(err)
        }
        
      }
    )
  }
}
