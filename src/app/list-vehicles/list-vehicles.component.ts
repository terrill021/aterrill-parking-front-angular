import { Component, OnInit } from '@angular/core';
import {SearchVehiclesService} from '../search-vehicles.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  vehicles: Array<string> = new Array();

  constructor(private searchVehicle: SearchVehiclesService) { }

  ngOnInit() {
    this.searchVehicle.getVehicles('21')
    .subscribe((res) => {
      if (res.payload) {
        this.vehicles = res.payload;
      }
    }
  );
  }

}
