import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';


const routes: Routes = [
 // { path: '', component: WrapperComponent},
  { path: '', component: WrapperComponent },

  

  // otherwise redirect to home
 // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
