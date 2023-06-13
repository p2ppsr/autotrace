/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { get, set, remove } from 'babbage-kvstore'
import { Vehicle } from "./models/Vehicle";
import { ATDocument } from './models/ATDocument';

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
    const repairsDoc = new ATDocument(
      'Repairs',
      'auto_work_agreement',
      'Repairs needed on my car...',
      '...'
    )
    set(vehicle.vin, JSON.stringify(repairsDoc))
  }

  /**
   * Traces the history of a vehicle
   * @param {string} vin VIN number of vehicle
   */
  trace (vin: string): Vehicle {

    // TODO: Use kvstore get
    const matchingVehicle = new Vehicle('Nissan', 'Versa','gray', 'someVINNumber')
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