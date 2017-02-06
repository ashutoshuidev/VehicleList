import {Injectable}  from  '@angular/core';
import { Vehicle } from './vehicle';
import { Vehicles } from './vehicle-data';

@Injectable()
export class VehicleService{
    getvehicles() : Promise<Vehicle[]>{
        return Promise.resolve(Vehicles)
    }


}
    