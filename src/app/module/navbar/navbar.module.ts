import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  
  declarations: [
    NavbarComponent,
    FooterComponent
  ],

  imports: [
    CommonModule,
    NavbarRoutingModule,
    FormsModule
  ],

})
export class NavbarModule { 
  
}
