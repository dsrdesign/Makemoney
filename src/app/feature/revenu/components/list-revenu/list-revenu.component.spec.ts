import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRevenuComponent } from './list-revenu.component';

describe('ListRevenuComponent', () => {
  let component: ListRevenuComponent;
  let fixture: ComponentFixture<ListRevenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRevenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
