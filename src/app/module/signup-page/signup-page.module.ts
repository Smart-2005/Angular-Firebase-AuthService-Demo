import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupPageRoutingModule } from './signup-page-routing.module';
import { SignupPageComponent } from './signup-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    SignupPageRoutingModule,
    FormsModule
  ]
})
export class SignupPageModule { }
