import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user.login/user.login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ForgotPasswordComponent } from './components/forgotpassword/forgot.password.component';
import { UserRegistrationComponent } from './components/user.registration/user.registration.component';
import { AdmindashboarddComponent } from './components/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    EmployeeComponent,
    ForgotPasswordComponent,
    UserRegistrationComponent,
    AdmindashboarddComponent,
    UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
