import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekComponent } from './termekReszletes.component';

describe('TermekComponent', () => {
  let component: TermekComponent;
  let fixture: ComponentFixture<TermekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
