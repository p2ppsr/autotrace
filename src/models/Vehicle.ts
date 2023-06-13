/**
 * Represents an AutoTrace vehicle
 */
export class Vehicle {
  make: string
  model: string
  color: string

  /**
   * Creates a new instance of the Vehicle class.
   * @constructor
   * @param {string} make - The make of the vehicle.
   * @param {string} model - The model of the vehicle.
   * @param {string} color - The color of the vehicle.
   */
  constructor(make: string, model: string, color: string) {
    this.make = make
    this.model = model
    this.color = color
  }
}