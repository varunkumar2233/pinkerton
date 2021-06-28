import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountWrapperComponent } from './accountDetails/account-wrapper/account-wrapper.component';
import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: AccountWrapperComponent },
//  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
 // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





