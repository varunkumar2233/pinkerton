import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';

import { LeftNavigationComponent } from './left-navigation/left-navigation.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';


@NgModule({
  declarations: [
     HeaderComponent,
     WrapperComponent,
    LeftNavigationComponent,
    TermsConditionComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [BsDropdownModule],

})
export class MainModule { }
