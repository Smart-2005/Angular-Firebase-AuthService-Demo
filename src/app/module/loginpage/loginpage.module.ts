import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpageRoutingModule } from './loginpage-routing.module';
import { LoginpageComponent } from './loginpage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginpageComponent,

  ],
  imports: [
    CommonModule,
    LoginpageRoutingModule,
    FormsModule

  ]
})
export class LoginpageModule { }
