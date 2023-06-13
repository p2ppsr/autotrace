export class ATEvent {
    constructor(
      public eventID: string,
      public eventType: string,
      public description: string,
      public timestamp: string,
      public document: string
    ) {}
  }