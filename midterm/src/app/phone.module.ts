import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneItemComponent } from './phone-item/phone-item.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneService } from './phone.service';

@NgModule({
  declarations: [
    PhoneListComponent,
    PhoneItemComponent,
    PhoneComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [PhoneService],
  exports: [PhoneListComponent, PhoneComponent],
})
export class PhoneModule { }
