import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialesComponent } from './testimoniales.component';

describe('TestimonialesComponent', () => {
  let component: TestimonialesComponent;
  let fixture: ComponentFixture<TestimonialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestimonialesComponent]
    });
    fixture = TestBed.createComponent(TestimonialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
