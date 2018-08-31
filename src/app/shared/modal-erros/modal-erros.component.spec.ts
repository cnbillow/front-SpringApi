import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErrosComponent } from './modal-erros.component';

describe('ModalErrosComponent', () => {
  let component: ModalErrosComponent;
  let fixture: ComponentFixture<ModalErrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalErrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
