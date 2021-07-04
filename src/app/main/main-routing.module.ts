import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { WrapperComponent } from './wrapper/wrapper.component';


const routes: Routes = [
 // { path: '', component: WrapperComponent},
  { path: '', component: WrapperComponent },
  { path: 'terms-condition', component: TermsConditionComponent },

  

  // otherwise redirect to home
 // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
