import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  phoneForm: FormGroup;

  constructor(private fb: FormBuilder, private phoneService: PhoneService) {
    this.phoneForm = this.fb.group({
      brand: ['', Validators.required],
      color: [''],
      isAvailableInStore: [false]
    });
  }

  onSubmit(): void {
    if (this.phoneForm.valid) {
      const newPhone = this.phoneForm.value;
      this.phoneService.addPhone(newPhone);
      this.phoneForm.reset();
    }
  }
}
