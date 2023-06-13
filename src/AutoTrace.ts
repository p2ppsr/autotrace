/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { get, set, remove } from 'babbage-kvstore'
import { Vehicle } from "./models/Vehicle";
import { ATEvent } from './models/ATEvent';
import { Registration } from './models/Registration';

/**
 * A system for tracing vehicle history
 */
export class AutoTrace {
  constructor () {
  }

  /**
   * Registers a new event
   */
  async register (vin: string, vehicle: Vehicle, event: ATEvent): Promise<void> {
    // TODO: Check for previous vehicle state using kvstore get()
    const mockEventHistory = [
      new ATEvent('xyz', 'Maintenance', 'Oil change at Oil Can Henrys', Date.now().toString(),'Document contents here...')
    ]

    // Add the new event to the history of events
    mockEventHistory.push(event)

    // Create a new registration for this event on this vehicle
    const registration = new Registration(vehicle, mockEventHistory)
    await set(vin, JSON.stringify(registration))
  }

  /**
   * Traces the history of a vehicle
   * @param {string} vin VIN number of vehicle
   */
  async trace (vin: string): Promise<string> {

    // Use kvstore get to retrieve the history of a vehicle
    const history = await get(vin)
    // TODO: Construct an object to return
    return history
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