import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Second.ComponentComponent } from './second.component.component';

describe('Second.ComponentComponent', () => {
  let component: Second.ComponentComponent;
  let fixture: ComponentFixture<Second.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Second.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Second.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
