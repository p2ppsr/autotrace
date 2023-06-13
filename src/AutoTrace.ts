/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Owner } from "./models/Owner"

/**
 * A system for tracing vehicle history
 */
export class AutoTrace {
  owner: Owner

  constructor (owner: Owner) {
    this.owner = owner
  }

  /**
   * Registers a new vehicle
   */
  register (): void {

  }

  /**
   * Traces the history of a vehicle
   */
  trace (): void {
    
  }

  /**
   * Transfers the ownership of a vehicle
   */
  transfer (): void {}

  /**
   * Receives an incoming transfer request
   */
  receive (): void {
    
  }
}



// interface Cup {
//   color: string
//   pour(a: number): string
// }
// class CoolCup implements Cup {
//   color: string

//   constructor (color) {
//     this.color = color
//   }

//   pour (a: number): string {
//     return `The drink was poured from a ${this.color} cup!`
//   }
// }
