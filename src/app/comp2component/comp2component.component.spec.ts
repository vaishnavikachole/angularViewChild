import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2componentComponent } from './comp2component.component';

describe('Comp2componentComponent', () => {
  let component: Comp2componentComponent;
  let fixture: ComponentFixture<Comp2componentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comp2componentComponent]
    });
    fixture = TestBed.createComponent(Comp2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
