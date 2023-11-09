import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receiver1stComponent } from './receiver1st.component';

describe('Receiver1stComponent', () => {
  let component: Receiver1stComponent;
  let fixture: ComponentFixture<Receiver1stComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Receiver1stComponent]
    });
    fixture = TestBed.createComponent(Receiver1stComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
