/**
 * Represents an AutoTrace Event
 */
export class ATEvent {

    /**
     * Creates a new instance of the ATEvent class.
     * @param {string} eventID - unique identifier for this event
     * @param {string} eventType - event type label
     * @param {string} description - description of the event 
     * @param {string} timestamp - timestamp of when the event happened
     * @param {string} document - any document data associated with this event
     */
    constructor(
      public eventID: string,
      public eventType: string,
      public description: string,
      public timestamp: string,
      public document: string
    ) {}
  }