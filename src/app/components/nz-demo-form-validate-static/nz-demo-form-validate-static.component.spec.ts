import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoFormValidateStaticComponent } from './nz-demo-form-validate-static.component';

describe('NzDemoFormValidateStaticComponent', () => {
  let component: NzDemoFormValidateStaticComponent;
  let fixture: ComponentFixture<NzDemoFormValidateStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzDemoFormValidateStaticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzDemoFormValidateStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
