import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountWrapperComponent } from './accountDetails/account-wrapper/account-wrapper.component';
import { ForgotPasswordComponent } from './accountDetails/forgot-password/forgot-password.component';
import { SignUpComponent } from './accountDetails/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: AccountWrapperComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },

  // otherwise redirect to home
 // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





