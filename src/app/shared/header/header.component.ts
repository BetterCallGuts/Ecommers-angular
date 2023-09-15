import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private _dialog:MatDialog) {}




  loginpressed():void {
    this._dialog.open(LoginComponent)
  }

  signuppressed(){
    this._dialog.open(SignupComponent)
  }
}
