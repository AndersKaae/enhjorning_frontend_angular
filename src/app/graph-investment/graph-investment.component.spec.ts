import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphInvestmentComponent } from './graph-investment.component';

describe('GraphInvestmentComponent', () => {
  let component: GraphInvestmentComponent;
  let fixture: ComponentFixture<GraphInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
