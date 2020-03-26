import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestaComponent } from './vesta.component';

describe('VestaComponent', () => {
  let component: VestaComponent;
  let fixture: ComponentFixture<VestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
