
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarModule } from './module/navbar/navbar.module';
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
import { UserCrudComponent } from './components/user.crud/user.crud.component';






@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponent,
    ProjectsComponent,
    Project2Component,
    Project1Component,
    ServicesComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    UserCrudComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
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
