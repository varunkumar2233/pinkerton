import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountWrapperComponent } from './accountDetails/account-wrapper/account-wrapper.component';
import { LoginComponent } from './accountDetails/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './accountDetails/sign-up/sign-up.component';
import { LeftWrapperComponent } from './accountDetails/left-wrapper/left-wrapper.component';
import { ForgotPasswordComponent } from './accountDetails/forgot-password/forgot-password.component';
import { CreatePasswordComponent } from './accountDetails/create-password/create-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { MapOnHomeComponent } from './map-on-home/map-on-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountWrapperComponent,
    LoginComponent,
    FooterComponent,
    SignUpComponent,
    LeftWrapperComponent,
    ForgotPasswordComponent,
    CreatePasswordComponent,
    PageNotFoundComponent,
    MapOnHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
   
  ],
  providers: [BsDropdownModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
