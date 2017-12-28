import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import {ServiceRegisterVehicleService} from './service-register-vehicle.service';
import { CashParkingComponent } from './cash-parking/cash-parking.component';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from './message.service';
import {SearchVehiclesService} from './search-vehicles.service';
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
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    RegisterVehicleComponent,
    CashParkingComponent,
    ListVehiclesComponent
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
    MatTabsModule,
    MatListModule
  ],
  providers: [ServiceRegisterVehicleService, MessageService, CashParkingService, SearchVehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
