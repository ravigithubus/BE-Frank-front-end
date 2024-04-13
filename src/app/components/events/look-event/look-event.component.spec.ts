import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookEventComponent } from './look-event.component';

describe('LookEventComponent', () => {
  let component: LookEventComponent;
  let fixture: ComponentFixture<LookEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookEventComponent]
    });
    fixture = TestBed.createComponent(LookEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
