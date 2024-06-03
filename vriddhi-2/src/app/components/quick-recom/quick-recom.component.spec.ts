import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickRecomComponent } from './quick-recom.component';

describe('QuickRecomComponent', () => {
  let component: QuickRecomComponent;
  let fixture: ComponentFixture<QuickRecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickRecomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickRecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
