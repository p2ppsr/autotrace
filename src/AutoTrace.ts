/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { get, set, remove } from 'babbage-kvstore'
import { Vehicle } from "./models/Vehicle";
import { ATEvent } from './models/ATEvent';
import { Registration } from './models/Registration';

/**
 * A system for tracing vehicle history
 * @public
 */
export class AutoTrace {
  constructor () {
  }

  /**
   * Registers a new event
   * @param {string} VIN - VIN Number of vehicle to register
   * @param {Vehicle} vehicle - vehicle info to register
   * @param {ATEvent} event - event to register for this vehicle
   * @public
   */
  async register (VIN: string, event: ATEvent, vehicle?: Vehicle): Promise<void> {
    const registrationHistory = await this.trace(VIN)
    const eventHistory:ATEvent[] = registrationHistory ? registrationHistory.events : [] 
    // Add the new event to the history of events
    eventHistory.push(event)

    // Create a new registration for this event on this vehicle
    const registration = new Registration(eventHistory, vehicle)
    await set(VIN, JSON.stringify(registration))
  }

  /**
   * Traces the registration history of a vehicle
   * @param {string} VIN - VIN number of vehicle
   */
  async trace (VIN: string): Promise<Registration> {
    // Use kvstore get to retrieve the registration history of a vehicle
    const history = await get(VIN)
    return history ? JSON.parse(history) : undefined
  }

  /**
   * Transfers the ownership of a vehicle
   * @param {string} VIN - VIN number of vehicle
   * @param {string} recipient - the recipient to transfer the vehicle to
   * @public
   */
  async transfer (VIN: string, recipient: string, transferEvent: ATEvent): Promise<void> {
    const registrationHistory = await this.trace(VIN)
    registrationHistory.events.push(transferEvent)
    await set(VIN, JSON.stringify(registrationHistory), {
      counterparty: recipient,
      sendToCounterparty: true
    })
  }

  /**
   * Receives an incoming transfer request
   * @param {string} VIN - VIN number of vehicle
   * @param {string} sender - the sender of the vehicle to receive
   * @public
   */
  async receive (VIN: string, sender: string,): Promise<void> {
    const registrationHistory = await this.trace(VIN)
    await set(VIN, JSON.stringify(registrationHistory), {
      moveToSelf: true,
      counterparty: sender
    })
  }

  /**
   * Decommissions a vehicle no longer needs to be traced.
   * @param {string} VIN - VIN number of vehicle
   * @public
   */
  async decommission (VIN: string) {
    await remove(VIN)
  }
}