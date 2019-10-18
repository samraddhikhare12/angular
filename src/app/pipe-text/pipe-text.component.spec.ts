import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTextComponent } from './pipe-text.component';

describe('PipeTextComponent', () => {
  let component: PipeTextComponent;
  let fixture: ComponentFixture<PipeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
