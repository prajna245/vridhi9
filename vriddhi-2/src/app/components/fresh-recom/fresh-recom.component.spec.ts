import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshRecomComponent } from './fresh-recom.component';

describe('FreshRecomComponent', () => {
  let component: FreshRecomComponent;
  let fixture: ComponentFixture<FreshRecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreshRecomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreshRecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
