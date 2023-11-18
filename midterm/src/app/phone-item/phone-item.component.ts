// phone-item.component.ts
import { Component, Input } from '@angular/core';
import { Phone } from '../phone.interface';

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.css']
})
export class PhoneItemComponent {
  @Input() phone!: Phone; 
}
