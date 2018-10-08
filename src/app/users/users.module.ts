import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { USERS_ROUTES } from './users.routes';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MoneyHistoryComponent } from './money-history/money-history.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(USERS_ROUTES),
    SharedModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    MoneyHistoryComponent
  ]
})
export class UsersModule { }
