import { Component, OnInit } from '@angular/core';
import {CashParkingService} from '../cash-parking.service';
import { Vehicle } from '../models/Vehicle.model';
import { Response } from '../models/Response.model';

@Component({
  selector: 'app-cash-parking',
  templateUrl: './cash-parking.component.html',
  styleUrls: ['./cash-parking.component.css']
})
export class CashParkingComponent implements OnInit {

  constructor(private parkingService: CashParkingService) { }

  ngOnInit() {
  }

  cashParking(licensePlate: Vehicle['licensePlate']) {
    this.parkingService.cashParking(licensePlate)
    .subscribe(response => {console.log(response); }
    );
  }
}
