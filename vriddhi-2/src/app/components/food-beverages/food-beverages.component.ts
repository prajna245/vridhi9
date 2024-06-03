import { Component } from '@angular/core';

@Component({
  selector: 'app-food-beverages',
  templateUrl: './food-beverages.component.html',
  styleUrl: './food-beverages.component.css'
})
export class FoodBeveragesComponent {
  showMore: boolean = false;

  toggleShowMore() {
      this.showMore = !this.showMore;
  }
}
