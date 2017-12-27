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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule, MatFormField, MatSelect} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './/app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    RegisterVehicleComponent,
    CashParkingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [ServiceRegisterVehicleService, MessageService, CashParkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
