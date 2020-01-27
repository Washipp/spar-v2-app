import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUpComponent } from './save-up.component';

describe('SaveUpComponent', () => {
  let component: SaveUpComponent;
  let fixture: ComponentFixture<SaveUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
