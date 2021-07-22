import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsetConfig, TabsModule } from 'ngx-bootstrap/tabs';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MapHomeComponent } from './map-home/map-home.component';
import { SampleReportsComponent } from './sample-reports/sample-reports.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CreditsComponent } from './credits/credits.component';
import { ProfileAccountSettingComponent } from './profile-account-setting/profile-account-setting.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ReachUsComponent } from './reach-us/reach-us.component';
import { CrossComponent } from './cross/cross.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CartComponent } from './cart/cart.component';
import { PaymentTabComponent } from './cart/payment-tab/payment-tab.component';

@NgModule({
  declarations: [
     HeaderComponent,
     WrapperComponent,
    LeftNavigationComponent,
    TermsConditionComponent,
    MainpageComponent,
    MapHomeComponent,
    SampleReportsComponent,
    CreditsComponent,
    CartComponent,
    ProfileAccountSettingComponent,
    ReachUsComponent,
    CrossComponent,
    PaymentTabComponent,
  ],
  exports: [PaymentTabComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    NgxSliderModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
    AccordionModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [BsDropdownModule, TabsetConfig],

})
export class MainModule { }
