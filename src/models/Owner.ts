import { Vehicle } from "./Vehicle"

/**
 * Represents an owner of one or more vehicles
 */
export class Owner {
    name: string
    vehicles: Vehicle[]
  
    constructor(name: string) {
      this.name = name
      this.vehicles = []
    }
    
    addVehicle(vehicle: Vehicle) {
      this.vehicles.push(vehicle)
    }
  
    removeVehicle(vehicle: Vehicle) {
      const index = this.vehicles.indexOf(vehicle)
      if (index !== -1) {
        this.vehicles.splice(index, 1)
      }
    }
  }