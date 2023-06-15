# autotrace

Are you a business looking to incorporate a powerful and transparent vehicle history tracking feature into your software? Look no further than AutoTrace. This groundbreaking package harnesses the power of the BSV blockchain to provide a comprehensive solution for tracking a vehicle's complete history.

AutoTrace covers all the crucial aspects of a vehicle's story, including accident reports, maintenance records, ownership history, and mileage verification. By leveraging the secure and immutable nature of blockchain technology, AutoTrace ensures the integrity and reliability of information, instilling confidence and trust in the vehicle's history.

By integrating AutoTrace into your software, you can revolutionize the way your users explore and evaluate vehicle histories. Empower them with transparent and trustworthy information, enabling them to make well-informed decisions. Experience AutoTrace today and unlock the power of discovering the complete vehicle story on the blockchain. Transform the way your business understands and evaluates vehicles, and provide your users with a cutting-edge solution they can rely on.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

*   [AutoTrace](#autotrace)
    *   [register](#register)
        *   [Parameters](#parameters)
    *   [transfer](#transfer)
        *   [Parameters](#parameters-1)
    *   [receive](#receive)
        *   [Parameters](#parameters-2)
    *   [decommission](#decommission)
        *   [Parameters](#parameters-3)

### AutoTrace

A system for tracing vehicle history

#### register

Registers a new event

##### Parameters

*   `VIN` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** VIN Number of vehicle to register
*   `vehicle` **Vehicle** vehicle info to register
*   `event` **ATEvent** event to register for this vehicle

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>**&#x20;

#### transfer

Transfers the ownership of a vehicle

##### Parameters

*   `VIN` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** VIN number of vehicle
*   `recipient` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the recipient to transfer the vehicle to

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

## Confidentiality

This is proprietary software developed and owned by Peer-to-peer Privacy Systems Research, LLC. Except as provided for in your CWI Partner Agreement with us, you may not use this software and must keep it confidential.
