import { Component } from '@angular/core';

@Component({
  selector: 'app-ornaments-jeweleries',
  templateUrl: './ornaments-jeweleries.component.html',
  styleUrl: './ornaments-jeweleries.component.css'
})
export class OrnamentsJeweleriesComponent {
  imagePaths: string[] = [
    'assets/ornaments/s1.jpg',
    'assets/ornaments/s3.jpg',
    'assets/ornaments/s4.jpg',
    'assets/ornaments/s5.jpg',

  ];
  showMore: boolean = false;

  toggleShowMore() {
      this.showMore = !this.showMore;
  }
}
