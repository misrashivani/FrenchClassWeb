import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchQuote } from './french-quote';

describe('FrenchQuote', () => {
  let component: FrenchQuote;
  let fixture: ComponentFixture<FrenchQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrenchQuote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrenchQuote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
