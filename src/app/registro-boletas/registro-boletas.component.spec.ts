import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBoletasComponent } from './registro-boletas.component';

describe('RegistroBoletasComponent', () => {
  let component: RegistroBoletasComponent;
  let fixture: ComponentFixture<RegistroBoletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroBoletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
