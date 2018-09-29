import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { USERS_ROUTES } from './users.routes';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(USERS_ROUTES)
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ]
})
export class UsersModule { }
