import { Component } from '@angular/core';

@Component({
  selector: 'app-fresh-recom',
  templateUrl: './fresh-recom.component.html',
  styleUrl: './fresh-recom.component.css'
})
export class FreshRecomComponent {
  showMore: boolean = false;

  toggleShowMore() {
      this.showMore = !this.showMore;
  }
}
