import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SecNavbarComponent } from './components/sec-navbar/sec-navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { QuickRecomComponent } from './components/quick-recom/quick-recom.component';
import { FreshRecomComponent } from './components/fresh-recom/fresh-recom.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { FoodBeveragesComponent } from './components/food-beverages/food-beverages.component';
import { OrnamentsJeweleriesComponent } from './components/ornaments-jeweleries/ornaments-jeweleries.component';
import { DecorativesComponent } from './components/decoratives/decoratives.component';
import { OthersComponent } from './components/others/others.component';
import { ProductComponent } from './components/product/product.component';
import { SellComponent } from './components/sell/sell.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    SecNavbarComponent,
    BannerComponent,
    QuickRecomComponent,
    FreshRecomComponent,
    AboutUsComponent,
    FooterComponent,
    FoodBeveragesComponent,
    OrnamentsJeweleriesComponent,
    DecorativesComponent,
    OthersComponent,
    ProductComponent,
    SellComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
