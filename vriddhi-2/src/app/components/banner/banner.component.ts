import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  images = [
    'assets/card4.png',
    'assets/car2.jpg',
    'assets/car3.jpg',
    'assets/jewlrey.jpg',
    'assets/car5.jpg',
   
  ];
  interval = 500; 
  
  
}
