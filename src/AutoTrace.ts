/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Vehicle } from "./models/Vehicle";

/**
 * A system for tracing vehicle history
 */
export class AutoTrace {
  constructor () {
  }

  /**
   * Registers a new vehicle
   */
  register (vehicle: Vehicle): void {
    // Use kvstore set
  }

  /**
   * Traces the history of a vehicle
   * @param {string} vin VIN number of vehicle
   */
  trace (vin: string): Vehicle {

    // TODO: Use kvstore get
    let matchingVehicle = new Vehicle('Nissan', 'Titan','gray', 'someVINNumber')
    return matchingVehicle
  }

  /**
   * Transfers the ownership of a vehicle
   */
  transfer (vehicle: Vehicle, recipient: string): void {
    // TODO: use kvstore set
  }

  /**
   * Receives an incoming transfer request
   */
  receive (sender: '', vehicle: Vehicle): void {
    // TODO: use kvstore set?
  }
}