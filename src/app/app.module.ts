import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import {ServiceRegisterVehicleService} from './service-register-vehicle.service';
import { CashParkingComponent } from './cash-parking/cash-parking.component';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from './message.service';
import { FormsModule } from '@angular/forms';
import {CashParkingService} from './cash-parking.service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterVehicleComponent,
    CashParkingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceRegisterVehicleService, MessageService, CashParkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
