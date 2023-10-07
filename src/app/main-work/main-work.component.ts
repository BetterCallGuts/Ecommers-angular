import { Component } from '@angular/core';

@Component({
  selector: 'app-main-work',
  templateUrl: './main-work.component.html',
  styleUrls: ['./main-work.component.scss']
})
export class MainWorkComponent {



    authHandler(isauthed:any){
      console.log(isauthed)

  }
}
