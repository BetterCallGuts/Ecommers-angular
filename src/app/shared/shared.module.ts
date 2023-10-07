import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCommonModule} from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from "@angular/material/toolbar";
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PaymentComponent } from './payment/payment.component'

// BrowserModule,
  
  // AppRoutingModule,
  // BrowserAnimationsModule,

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    ConfirmComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCommonModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    AlertComponent
  ]
})
export class SharedModule { }
