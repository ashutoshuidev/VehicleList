import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ Input() vehicleDetails:any = {};

}