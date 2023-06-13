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
  async register (VIN: string, vehicle: Vehicle, event: ATEvent): Promise<void> {
    // Check for previous vehicle state using kvstore get() for now
    // TODO: Get previous UTXOs to verify state.
    const autoTrace = new AutoTrace()
    let eventHistory:ATEvent[] = []
    const carHistory = await autoTrace.trace(VIN)
    
    // Check if there is existing car history
    if (carHistory) {
      eventHistory = carHistory.events
    }

    // Add the new event to the history of events
    eventHistory.push(event)

    // Create a new registration for this event on this vehicle
    const registration = new Registration(vehicle, eventHistory)
    await set(VIN, JSON.stringify(registration))
  }

  /**
   * Traces the history of a vehicle
   * @param {string} vin VIN number of vehicle
   */
  async trace (vin: string): Promise<Registration> {

    // Use kvstore get to retrieve the history of a vehicle
    const history = await get(vin)
    return JSON.parse(history)
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