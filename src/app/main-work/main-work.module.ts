import { NgModule          } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { RouterModule      } from '@angular/router';
import { MainWorkComponent } from './main-work.component';
import { SharedModule      } from '../shared/shared.module';
import { PagesModule       } from '../pages/pages.module';
import { MatIconModule     } from '@angular/material/icon';
import { MatDialogModule   } from '@angular/material/dialog';
import { MatCommonModule} from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';


// 	<mat-icon>add_shopping_cart</mat-icon>
// <mat-icon>remove_shopping_cart</mat-icon>
@NgModule({
  declarations: [
    MainWorkComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PagesModule,
    MatIconModule,
    MatDialogModule,
    MatCommonModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  
})
export class MainWorkModule { }
