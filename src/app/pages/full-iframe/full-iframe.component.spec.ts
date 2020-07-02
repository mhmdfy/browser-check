import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullIframeComponent } from './full-iframe.component';

describe('FullIframeComponent', () => {
  let component: FullIframeComponent;
  let fixture: ComponentFixture<FullIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
