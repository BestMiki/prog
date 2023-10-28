
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogowanieComponent } from './logowanie.component';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogowanieComponent],
    });
    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set default values for username and password', () => {
    expect(component.username).toBe('');
    expect(component.password).toBe('');
  });

  it('should log in when username and password are correct', () => {
    component.username = 'admin';
    component.password = 'admin';
    spyOn(console, 'log');
    component.logowanie();
    expect(console.log).toHaveBeenCalledWith('Zalogowano się');
  });

  it('should show error when username and password are incorrect', () => {
    component.username = 'incorrect';
    component.password = 'incorrect';
    spyOn(console, 'log');
    component.logowanie();
    expect(console.log).toHaveBeenCalledWith('Błąd logowania');
  });
});
