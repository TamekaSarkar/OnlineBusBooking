import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectBusComponent } from './user/select-bus/select-bus.component';
import { BusSearchResultComponent } from './user/bus-search-result/bus-search-result.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { PrintComponent } from './user/print/print.component';


const routes: Routes = [
  {path:'',component:SelectBusComponent},
{path:'search',component:BusSearchResultComponent},
{path:'user-form',component:UserFormComponent},
{path:'print',component:PrintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
