import { ATEvent } from "./ATEvent";
import { Vehicle } from "./Vehicle";

export class Registration {
    /**
     * Represents a vehicle registration.
     * @param {ATEvent[]} events - The list of events associated with the registration. Default is an empty array.
     * @param {Vehicle} vehicle - The vehicle being registered.
     */
    constructor(public events: ATEvent[] = [], public vehicle: Vehicle | undefined) {}
}