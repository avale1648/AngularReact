import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderDataComponentComponent } from './sender-data-component.component';

describe('SenderDataComponentComponent', () => {
  let component: SenderDataComponentComponent;
  let fixture: ComponentFixture<SenderDataComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SenderDataComponentComponent]
    });
    fixture = TestBed.createComponent(SenderDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
