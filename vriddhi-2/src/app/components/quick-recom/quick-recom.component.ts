import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quick-recom',
  templateUrl: './quick-recom.component.html',
  styleUrl: './quick-recom.component.css'
})
export class QuickRecomComponent {
  showMore: boolean = false;

  toggleShowMore() {
      this.showMore = !this.showMore;
  }
 
}
