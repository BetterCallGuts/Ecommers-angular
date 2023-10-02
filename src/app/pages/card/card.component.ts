import { Component, Input } from '@angular/core';
import { Main } from 'src/app/main';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {


@Input() objects:any;
        url:string = Main.API_IMG_URL;
        pound:string = Main.POUND;




constructor () {  

  
}


}
