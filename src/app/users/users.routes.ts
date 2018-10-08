import { MoneyHistoryComponent } from './money-history/money-history.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';
import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'money/history', component: MoneyHistoryComponent }
];
