// phone.service.ts
import { Injectable } from '@angular/core';
import { Phone } from './phone.interface';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private phoneList: Phone[] = [];

  getPhoneList(): Phone[] {
    return this.phoneList;
  }

  addPhone(phone: Phone): void {
    this.phoneList.push(phone);
  }
}
