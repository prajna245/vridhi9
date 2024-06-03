import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { FoodBeveragesComponent } from './components/food-beverages/food-beverages.component';
import { OrnamentsJeweleriesComponent } from './components/ornaments-jeweleries/ornaments-jeweleries.component';
import { DecorativesComponent } from './components/decoratives/decoratives.component';
import { OthersComponent } from './components/others/others.component';
import { ProductComponent } from './components/product/product.component';
import { SellComponent } from './components/sell/sell.component';



const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },

  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'food',
    component:FoodBeveragesComponent
  },
  {
    path: 'ornaments',
    component:OrnamentsJeweleriesComponent
  },
  {
    path: 'decorative',
    component:DecorativesComponent
  },
  {
    path: 'others',
    component:OthersComponent
  },
  {
    path: 'product',
    component:ProductComponent
  },
  {
    path: 'selling',
    component:SellComponent
  },
  {
    path: '', 
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
