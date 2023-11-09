import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receiver2ndComponent } from './receiver2nd.component';

describe('Receiver2ndComponent', () => {
  let component: Receiver2ndComponent;
  let fixture: ComponentFixture<Receiver2ndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Receiver2ndComponent]
    });
    fixture = TestBed.createComponent(Receiver2ndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
