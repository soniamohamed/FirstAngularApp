import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBtn } from './my-btn';

describe('MyBtn', () => {
  let component: MyBtn;
  let fixture: ComponentFixture<MyBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBtn],
    }).compileComponents();

    fixture = TestBed.createComponent(MyBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
