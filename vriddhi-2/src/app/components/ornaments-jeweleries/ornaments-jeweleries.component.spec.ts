import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentsJeweleriesComponent } from './ornaments-jeweleries.component';

describe('OrnamentsJeweleriesComponent', () => {
  let component: OrnamentsJeweleriesComponent;
  let fixture: ComponentFixture<OrnamentsJeweleriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrnamentsJeweleriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrnamentsJeweleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
