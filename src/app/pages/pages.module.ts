import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { LandComponent } from './land/land.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCommonModule} from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../shared/alert/alert.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StoreComponent,
    LandComponent,
    LoginComponent,
    SignupComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCommonModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports : [
    StoreComponent,
    LandComponent,
    LoginComponent,
    SignupComponent,
    CardComponent,
    
  ],
  providers : [HttpClientModule, HttpClient]
})
export class PagesModule { }
