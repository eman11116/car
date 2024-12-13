import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestImonialsComponent } from './test-imonials.component';

describe('TestImonialsComponent', () => {
  let component: TestImonialsComponent;
  let fixture: ComponentFixture<TestImonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestImonialsComponent]
    });
    fixture = TestBed.createComponent(TestImonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
