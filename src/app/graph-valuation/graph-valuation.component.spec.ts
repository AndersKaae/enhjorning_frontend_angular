import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphValuationComponent } from './graph-valuation.component';

describe('GraphValuationComponent', () => {
  let component: GraphValuationComponent;
  let fixture: ComponentFixture<GraphValuationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphValuationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphValuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
