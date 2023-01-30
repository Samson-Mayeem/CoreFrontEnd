import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { EmployeeComponent } from './components/employee/employee.component';
import { ForgotPasswordComponent } from './components/forgotpassword/forgot.password.component';
import { UserLoginComponent } from './components/user.login/user.login.component';
import { UserRegistrationComponent } from './components/user.registration/user.registration.component';

const routes: Routes = [
  {
    path: 'login', component: UserLoginComponent
  },
  {
    path: 'employees', component: EmployeeComponent
  },
  {
    path: 'resetpassword', component: ForgotPasswordComponent
  },
  {
    path: 'newuserregister', component: UserRegistrationComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundError
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }