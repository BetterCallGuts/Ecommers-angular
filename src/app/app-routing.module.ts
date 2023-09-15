import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainWorkComponent } from './main-work/main-work.component';
import { LandComponent } from './pages/land/land.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
{path: "", component : AppComponent , children : [
  
  {path : "" , component : MainWorkComponent, children : [
    { path : "", component : LandComponent },
    { path : "store", component : StoreComponent}
  ]}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
