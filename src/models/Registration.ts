import { ATEvent } from "./ATEvent";
import { Vehicle } from "./Vehicle";

export class Registration {
    /**
     * Represents a vehicle registration.
     * @param {Vehicle} vehicle - The vehicle being registered.
     * @param {ATEvent[]} events - The list of events associated with the registration. Default is an empty array.
     */
    constructor(public vehicle: Vehicle, public events: ATEvent[] = []) {}
}