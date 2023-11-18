import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneItemComponent } from './phone-item.component';

describe('PhoneItemComponent', () => {
  let component: PhoneItemComponent;
  let fixture: ComponentFixture<PhoneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
