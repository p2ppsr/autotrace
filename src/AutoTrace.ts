/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { getWithHistory, set, remove } from 'babbage-kvstore'
import { ATEvent } from './models/ATEvent';

/**
 * A system for tracing vehicle history
 * @public
 */
export class AutoTrace {
  constructor() {
  }

  /**
   * Registers a new event
   * @param {string} VIN - VIN Number of vehicle to register
   * @param {ATEvent} event - event to register for this vehicle
   * @public
   */
  async register(VIN: string, event: ATEvent): Promise<void> {
    await set(VIN, JSON.stringify(event))
  }

  /**
   * Traces the registration history of a vehicle
   * @param {string} VIN - VIN number of vehicle
   * @param {string} [sender] - identity associated with the vehicle
   * @returns {Promise<any>} - the event history info associated with the given VIN
   * @public
   */
  async trace(VIN: string, sender?: string): Promise<any> {
    // Use kvstore get to retrieve the registration history of a vehicle
    const history = await getWithHistory(VIN, undefined, { counterparty: sender })
    let events: any[] = []
    for (let i = 0; i < history.valueHistory.length; i++) {
      let element = JSON.parse(history.valueHistory[i])
      events.push(element)
    }
    return events
  }

  /**
   * Transfers the ownership of a vehicle
   * @param {string} VIN - VIN number of vehicle
   * @param {string} recipient - the recipient to transfer the vehicle to
   * @param {ATEvent} transferEvent - the event info associated with the transfer
   * @public
   */
  async transfer(VIN: string, recipient: string, transferEvent: ATEvent): Promise<void> {
    await set(VIN, JSON.stringify(transferEvent), {
      counterparty: recipient,
      sendToCounterparty: true
    })
  }

  /**
   * Receives an incoming transfer request
   * @param {string} VIN - VIN number of vehicle
   * @param {ATEvent} receiveEvent - the event info associated with the reception  
   * @param {string} sender - the sender of the vehicle to receive
   * @public
   */
  async receive(VIN: string, event: ATEvent, sender: string): Promise<void> {
    await set(VIN, JSON.stringify(event), {
      counterparty: sender,
      receiveFromCounterparty: true
    })
  }

  /**
   * Decommissions a vehicle no longer needs to be traced.
   * @param {string} VIN - VIN number of vehicle
   * @public
   */
  async decommission(VIN: string) {
    await remove(VIN)
  }
}