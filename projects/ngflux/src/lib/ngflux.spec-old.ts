import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngflex } from './ngflux';

describe('Ngflex', () => {
  let component: Ngflex;
  let fixture: ComponentFixture<Ngflex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngflex],
    }).compileComponents();

    fixture = TestBed.createComponent(Ngflex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
