import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterVehicleComponent} from './register-vehicle/register-vehicle.component';
import {CashParkingComponent} from './cash-parking/cash-parking.component';

const routes: Routes = [
  { path: 'register', component: RegisterVehicleComponent },
  { path: 'cash', component: CashParkingComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

 }
