import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponent } from './some-component.component';

describe('SomeComponentComponent', () => {
  let component: SomeComponent;
  let fixture: ComponentFixture<SomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomeComponent]
    });
    fixture = TestBed.createComponent(SomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
