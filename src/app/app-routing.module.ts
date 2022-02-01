import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';

const routes: Routes = [
  {path:'add' , component:FormComponent},
  {path:'show' , component:ShowdetailsComponent},
  {path:'' , component:FormComponent},
  {path:'**' , redirectTo:'add'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
