# autotrace

AutoTrace is a comprehensive package that enables powerful and transparent vehicle history tracking by leveraging the BSV blockchain. It provides a cutting-edge solution for recording and accessing a vehicle's complete history, ensuring integrity and reliability of information.

## Installation

You can install AutoTrace package if you have been given access using npm:

```bash
npm i @cwi/autotrace
```

## Example Usage

```javascript
import { AutoTrace, ATEvent } from '@cwi/autotrace'

// Create a new AutoTrace instance
const autoTrace = new AutoTrace()

const VIN = 'KNAGM4A73E5467099'

// Your registration document
const registrationDoc = {
    make,
    model,
    year,
    color
}

// Create a new event
const event = new ATEvent(
    crypto.randomUUID(),
    'TitleRegistration',
    'Register a new vehicle',
    Date.now().toString(),
    JSON.stringify(registrationDoc)
)

// Register a new event for the vehicle
await autoTrace.register(VIN, event)

// Access vehicle history data
const vehicleHistory = await autotrace.trace(VIN);
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

*   [AutoTrace](#autotrace)
    *   [register](#register)
        *   [Parameters](#parameters)
    *   [trace](#trace)
        *   [Parameters](#parameters-1)
    *   [transfer](#transfer)
        *   [Parameters](#parameters-2)
    *   [receive](#receive)
        *   [Parameters](#parameters-3)
    *   [decommission](#decommission)
        *   [Parameters](#parameters-4)

### AutoTrace

A system for tracing vehicle history

#### register

Registers a new event

##### Parameters

*   `VIN` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** VIN Number of vehicle to register
*   `event` **ATEvent** event to register for this vehicle
*   `vehicle` **Vehicle?** vehicle info to register

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>**&#x20;

#### trace

Traces the registration history of a vehicle

##### Parameters

*   `VIN` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** VIN number of vehicle
*   `sender` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** identity associated with the vehicle

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Registration>** the event history info associated with the given VIN

#### transfer

Transfers the ownership of a vehicle

##### Parameters

*   `VIN` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** VIN number of vehicle
*   `recipient` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the recipient to transfer the vehicle to
*   `transferEvent` **ATEvent** the event info associated with the transfer

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>**&#x20;

#### receive

Receives an incoming transfer request

##### Parameters

*   `VIN` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** VIN number of vehicle
*   `sender` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the sender of the vehicle to receive

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>**&#x20;

#### decommission

Decommissions a vehicle no longer needs to be traced.

##### Parameters

*   `VIN` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** VIN number of vehicle

## License

The license for the code in this repository is the Open BSV License.