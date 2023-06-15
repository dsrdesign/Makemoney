import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRevenuComponent } from './new-revenu.component';

describe('NewRevenuComponent', () => {
  let component: NewRevenuComponent;
  let fixture: ComponentFixture<NewRevenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRevenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
