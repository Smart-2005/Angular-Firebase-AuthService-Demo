import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/myServices/services.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { Project2Component } from './components/projects/project2/project2.component';
import { Project1Component } from './components/projects/project1/project1.component';
import { Service1Component } from './components/services/myServices/service1/service1.component';
import { Service3Component } from './components/services/myServices/service3/service3.component';
import { Service2Component } from './components/services/myServices/service2/service2.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'services', component:ServicesComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'projects/P-1', component:Project1Component},
  {path:'projects/P-2', component:Project2Component},
  {path:'services/S-1', component:Service1Component},
  {path:'services/S-2', component:Service2Component},
  {path:'services/S-3', component:Service3Component},
  {path: 'loginpage', component:LoginpageComponent},
  {path: 'signuppage', component:SignupPageComponent},
  {path:'**', component:ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
