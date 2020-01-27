import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSaveUpComponent } from './total-save-up.component';

describe('TotalSaveUpComponent', () => {
  let component: TotalSaveUpComponent;
  let fixture: ComponentFixture<TotalSaveUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalSaveUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSaveUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
