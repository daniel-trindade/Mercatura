import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultFormComponent } from './consult-form.component';

describe('ConsultFormComponent', () => {
  let component: ConsultFormComponent;
  let fixture: ComponentFixture<ConsultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
