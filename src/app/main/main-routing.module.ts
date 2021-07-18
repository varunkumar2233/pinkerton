import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CreditsComponent } from './credits/credits.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { ProfileAccountSettingComponent } from './profile-account-setting/profile-account-setting.component';
import { ReachUsComponent } from './reach-us/reach-us.component';
import { SampleReportsComponent } from './sample-reports/sample-reports.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
 path: '', component: WrapperComponent,
  children:[
    { path: '', component: MainpageComponent, pathMatch:'full'},
    { path: 'terms-condition', component: TermsConditionComponent },
    { path: 'cart', component: CartComponent },
    { path: 'sampleReports', component: SampleReportsComponent },
    { path: 'credits', component: CreditsComponent, },
    { path: 'profileAccountSetting', component: ProfileAccountSettingComponent },

    { path: 'getintouch', component: ReachUsComponent },

    

    
    
  ]
}
]


// const routes: Routes = [
//  // { path: '', component: WrapperComponent},
//   { path: '', component: WrapperComponent },
//   { path: 'terms-condition', component: TermsConditionComponent },

  

//   // otherwise redirect to home
//  // { path: '**', redirectTo: '' }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
