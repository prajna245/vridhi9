import { Component } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrl: './others.component.css'
})
export class OthersComponent {
  showMore: boolean = false;

  toggleShowMore() {
      this.showMore = !this.showMore;
  }

  imagePaths: string[] = [
    'assets/images7.jpg',
    'assets/images4.jpg',
    'assets/images8.jpg',
    'assets/images9.jpg',
  ];
}
