import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private _dialogRef:DialogRef<SignupComponent>) {}


  close() {
    this._dialogRef.close()
  }

}
