import { Component } from '@angular/core';

@Component({
  selector: 'app-decoratives',
  templateUrl: './decoratives.component.html',
  styleUrl: './decoratives.component.css'
})
export class DecorativesComponent {
  showMore: boolean = false;

  toggleShowMore() {
      this.showMore = !this.showMore;
  }

  imagePaths: string[] = [
    'assets/decorative/d1.jpg',
    'assets/decorative/d2.jpg',
    'assets/decorative/d3.jpg',
    'assets/decorative/d4.jpg',
  ];
}
