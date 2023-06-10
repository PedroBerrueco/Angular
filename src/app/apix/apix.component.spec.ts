import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApixComponent } from './apix.component';

describe('ApixComponent', () => {
  let component: ApixComponent;
  let fixture: ComponentFixture<ApixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
