
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { Project2Component } from './components/projects/project2/project2.component';
import { Project1Component } from './components/projects/project1/project1.component';
import { Service1Component } from './components/services/myServices/service1/service1.component';
import { Service2Component } from './components/services/myServices/service2/service2.component';
import { Service3Component } from './components/services/myServices/service3/service3.component';
import { ServicesComponent } from './components/services/myServices/services.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';






@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponent,
    FooterComponent,
    ProjectsComponent,
    Project2Component,
    Project1Component,
    ServicesComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginpageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule{ }
