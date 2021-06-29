import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountWrapperComponent } from './accountDetails/account-wrapper/account-wrapper.component';
import { LoginComponent } from './accountDetails/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './accountDetails/sign-up/sign-up.component';
import { LeftWrapperComponent } from './accountDetails/left-wrapper/left-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountWrapperComponent,
    LoginComponent,
    FooterComponent,
    SignUpComponent,
    LeftWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
