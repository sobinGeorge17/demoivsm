import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes =[
  {path:'',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'change-password',component:NewPasswordComponent},
  {path:'**', redirectTo:'',pathMatch:'full'}
]

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    NewPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class AuthenticationModule { }
