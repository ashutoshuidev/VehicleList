import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../Vehicle-list-service';
import {Vehicle} from '../vehicle';

@Component({
  selector: 'app-vehcile-list',
  templateUrl: './vehcile-list.component.html',
  styleUrls: ['./vehcile-list.component.css']
})
export class VehcileListComponent implements OnInit {

  constructor(private vehicleService : VehicleService) { }

  ngOnInit() {
    this.getVehicleList();
  }

  getVehicleList() :void{
    this.vehicleService.getvehicles().then(vehicles => this.vehicles = vehicles);
    console.log(this.vehicles);
  }

  vehicleHeader = ["Make","Model","Year","Price"];
  vehicles  : Vehicle[];
  vehicleFlag : boolean;
  rowData:any;

  showVehicleDetails(rowData:any){
   this.vehicleFlag=true;
   this.rowData=rowData;
  }

}
