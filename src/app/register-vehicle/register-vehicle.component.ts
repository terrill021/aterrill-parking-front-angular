import { Component, OnInit, Input} from '@angular/core';
import { ServiceRegisterVehicleService } from '../service-register-vehicle.service';
import {Vehicle} from '../models/Vehicle.model';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {

  @Input() vehicle: Vehicle = new Vehicle();

  constructor(private serviceRegister: ServiceRegisterVehicleService) {
  }

  ngOnInit() {
    this.vehicle.licensePlate = 'abc-123';
    this.vehicle.displacement = 333;
    this.vehicle.type = 'CAR';

  }

  registerVehicle (vehicle: Vehicle): void {
    this.serviceRegister.addVehicle(vehicle)
      .subscribe(hervehicle => {
        console.log('Respuesta: ' + JSON.stringify(hervehicle.message));
      });
  }

}
