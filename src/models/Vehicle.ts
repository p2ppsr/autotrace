/**
 * Represents an AutoTrace vehicle
 */
export class Vehicle {
  /**
   * Creates a new instance of the Vehicle class.
   * @constructor
   * @param {string} VIN - The VIN number of the vehicle. 
   * @param {string} make - The make of the vehicle.
   * @param {string} model - The model of the vehicle.
   * @param {string} year - The model of the vehicle.
   * @param {string} color - The color of the vehicle.
   */
  constructor(private VIN: string, public make: string, public model: string, public year: string, public color: string) {}
}