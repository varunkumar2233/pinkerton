import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';

import { LeftNavigationComponent } from './left-navigation/left-navigation.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsetConfig, TabsModule } from 'ngx-bootstrap/tabs';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MapHomeComponent } from './map-home/map-home.component';
@NgModule({
  declarations: [
     HeaderComponent,
     WrapperComponent,
    LeftNavigationComponent,
    TermsConditionComponent,
    MainpageComponent,
    MapHomeComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [BsDropdownModule, TabsetConfig],

})
export class MainModule { }
