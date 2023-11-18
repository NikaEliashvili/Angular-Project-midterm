// phone-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Phone } from '../phone.interface'; 

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phoneList: Phone[] = []; 

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.phoneList = this.phoneService.getPhoneList();
  }
}
