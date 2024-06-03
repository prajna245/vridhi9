import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativesComponent } from './decoratives.component';

describe('DecorativesComponent', () => {
  let component: DecorativesComponent;
  let fixture: ComponentFixture<DecorativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecorativesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecorativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
