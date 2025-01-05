import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NzLoginComponent } from './nz-login.component';

describe('LoginComponent', () => {
  let component: NzLoginComponent;
  let fixture: ComponentFixture<NzLoginComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NzLoginComponent ]
    })
    .compileComponents();
    ;

    fixture = TestBed.createComponent(NzLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
