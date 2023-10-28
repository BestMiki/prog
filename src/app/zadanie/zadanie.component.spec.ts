import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadanieComponent } from './zadanie.component';

describe('ZadanieComponent', () => {
  let component: ZadanieComponent;
  let fixture: ComponentFixture<ZadanieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZadanieComponent]
    });
    fixture = TestBed.createComponent(ZadanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
