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
    const registrationHistory = await this.trace(VIN)
    const eventHistory:ATEvent[] = registrationHistory ? registrationHistory.events : [] 
    // Add the new event to the history of events
    eventHistory.push(event)

    // Create a new registration for this event on this vehicle
    const registration = new Registration(vehicle, eventHistory)
    await set(VIN, JSON.stringify(registration))
  }

  /**
   * Traces the registration history of a vehicle
   * @param {string} VIN VIN number of vehicle
   */
  async trace (VIN: string): Promise<Registration> {
    // Use kvstore get to retrieve the registration history of a vehicle
    const history = await get(VIN)
    return history ? JSON.parse(history) : undefined
  }

  /**
   * Transfers the ownership of a vehicle
   */
  async transfer (VIN: string, recipient: string): Promise<void> {
    const registrationHistory = await this.trace(VIN)
    await set(VIN, registrationHistory, {
      moveFromSelf: true,
      counterparty: recipient
    })
  }

  /**
   * Receives an incoming transfer request
   */
  async receive (VIN: string, sender: string,): Promise<void> {
    const registrationHistory = await this.trace(VIN)
    await set(VIN, registrationHistory, {
      moveToSelf: true,
      counterparty: sender
    })
  }

  /**
   * Decommissions a vehicle no longer needs to be traced.
   */
  async decommission (VIN: string) {
    await remove(VIN)
  }
}