import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbMenuComponent } from './hb-menu.component';

describe('HbMenuComponent', () => {
  let component: HbMenuComponent;
  let fixture: ComponentFixture<HbMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
