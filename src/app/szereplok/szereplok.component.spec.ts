import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzereplokComponent } from './szereplok.component';

describe('SzereplokComponent', () => {
  let component: SzereplokComponent;
  let fixture: ComponentFixture<SzereplokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzereplokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzereplokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
