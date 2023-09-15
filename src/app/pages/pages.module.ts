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
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    StoreComponent,
    LandComponent,
    LoginComponent,
    SignupComponent
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
    HttpClientModule
  ],
  exports : [
    StoreComponent,
    LandComponent,
    LoginComponent,
    SignupComponent,
  ],
  providers : [HttpClientModule, HttpClient]
})
export class PagesModule { }
