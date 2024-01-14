import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/logowanie/auth.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [AuthService] // Wstrzyknięcie AuthService
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display menu when user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const menuElement = fixture.nativeElement.querySelector('app-menu');
    expect(menuElement).toBeTruthy();
  });

  it('should not display menu when user is not logged in', () => {
    component.isLoggedIn = false;
    fixture.detectChanges();
    const menuElement = fixture.nativeElement.querySelector('app-menu');
    expect(menuElement).toBeNull();
  });
});


 
  