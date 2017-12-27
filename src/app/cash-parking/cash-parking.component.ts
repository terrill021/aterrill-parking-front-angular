import { Component, OnInit, Inject } from '@angular/core';
import {CashParkingService} from '../cash-parking.service';
import { Vehicle } from '../models/Vehicle.model';
import { Response } from '../models/Response.model';
import swal from 'sweetalert2';

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
    .subscribe(response => {
        swal({
          title: (response.error) ? 'Error' : 'Message',
          text: `The total to pay is: ${(!response.error) ? response.payload.value : response.message}`,
          type: (response.error) ? 'error' : 'success',
          confirmButtonText: 'ok'
        });
     }
    );
  }
}



