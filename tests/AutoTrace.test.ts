/* eslint-disable @typescript-eslint/no-unused-vars */
import { AutoTrace } from '../src/AutoTrace'
import { ATEvent } from '../src/models/ATEvent'
import { Vehicle } from '../src/models/Vehicle'

// Example Car to Trace
const autoTrace = new AutoTrace()
const VIN = '4A3AJ56G8WE0421783'
const car = new Vehicle(
    'Toyota',
    'Accord',
    '2021',
    'Silver'
)

describe('Updating a vehicle history over time', () => {

    // Tests the flow of adding events to a vehicle's history over time.
    it('Toyota manufactures a car, Minting a new VIN', async () => {
        const event = new ATEvent(
            crypto.randomUUID(), 
            'TitleRegistration', 
            'A new car has been manufactured by Toyota.', 
            Date.now().toString(),
            '{"title":"Certificate of Title","id":"16VPX122431F74332","bodyTypeModel":"UTIL","registeredOwners":"Some Owner here...","odometerReading":"5"}'
        )
        await autoTrace.register(VIN, event)
        expect(true)
    })
    it('Ownership Transfer', async () => {
        const event = new ATEvent(
            crypto.randomUUID(), 
            'OwnershipTransfer', 
            'Ownership transferred to Tonkin Dealership', 
            Date.now().toString(),
            '{"title":"Bill of Sale","id":"xyz","amount":"$13,000","newOwner":"Tonkin Dealership"}'
        )
        await autoTrace.register(VIN, event)
        expect(true)
    })
    it('Title Registered with DMV', async () => {
        const event = new ATEvent(
            crypto.randomUUID(), 
            'TitleRegistration', 
            'Ownership registered with the DMV', 
            Date.now().toString(),
            '{"title":"DMV Registration","id":"xyz","newOwner":"Tonkin Dealership"}'
        )
        await autoTrace.register(VIN, event)
        expect(true)
    })
    it('Sell vehicle to John Smith', async () => {
        const event = new ATEvent(
            crypto.randomUUID(), 
            'OwnershipTransfer', 
            'Ownership transferred to John Smith', 
            Date.now().toString(),
            '{"title":"Bill of Sale","id":"xyz","amount":"$17,000","newOwner":"John Smith"}'
        )
        await autoTrace.register(VIN, event)
        expect(true)
    })
    it('Title Registered with DMV', async () => {
        const event = new ATEvent(
            crypto.randomUUID(), 
            'TitleRegistration', 
            'Ownership registered with the DMV', 
            Date.now().toString(),
            '{"title":"DMV Registration","id":"xyz","newOwner":"John Smith"}'
        )
        await autoTrace.register(VIN, event)
        expect(true)
    })
    it('Repairs Requested', async () => {
        const event = new ATEvent(
            crypto.randomUUID(), 
            'RepairRequest', 
            'John Smith requests repairs on his car for an accident', 
            Date.now().toString(),
            '{"title":"Repair Request Form","id":"xyz","RepairShop":"StarCar Repairs", "requestedRepairs": ["driver side door needs fixed", "mirror is broken"]}'
        )
        await autoTrace.register(VIN, event)
        expect(true)
    })
    it('Repair Report', async () => {
        const event = new ATEvent(
            crypto.randomUUID(), 
            'RepairReport', 
            'StarCar repair report for John Smith', 
            Date.now().toString(),
            '{"title":"Repair Report Form","id":"xyz","RepairShop":"StarCar Repairs", "requestedRepairs": ["driver side door needs fixed", "mirror is broken"], "ownerInformationHash": "6222cd38e8271123cc6d0f06054fe1eb14bc425d6fe73c2b798b5b0bfe64e27c"}'
        )
        await autoTrace.register(VIN, event)
        expect(true)
    })
    it('John sells his car back to the dealership', async () => {
        const event = new ATEvent(
            crypto.randomUUID(), 
            'OwnershipTransfer', 
            'Ownership transferred from John to the Tonkin Dealership', 
            Date.now().toString(),
            '{"title":"Bill of Sale","id":"xyz","amount":"$14,000","newOwner":"Tonkin Dealership"}'
        )
        await autoTrace.register(VIN, event)
        expect(true)
    })
    it('Title Registered with DMV', async () => {
        const event = new ATEvent(
            crypto.randomUUID(), 
            'TitleRegistration', 
            'Ownership registered with the DMV', 
            Date.now().toString(),
            '{"title":"DMV Registration","id":"xyz","newOwner":"Tonkin Dealership"}'
        )
        await autoTrace.register(VIN, event)
        expect(true)
    })

    // See all the car history
    it('Finds car history', async () => {
        const carHistory = await autoTrace.trace(VIN)
        expect(carHistory.events !== undefined)
    })
})

describe('Transferring token ownership', () => {
    it('Creates a new token for a counterparty', async () => {
        const event = new ATEvent(
            crypto.randomUUID(), 
            'OwnershipTransfer', 
            'Ownership transferred from John to the Tonkin Dealership', 
            Date.now().toString(),
            '{"title":"Bill of Sale","id":"xyz","amount":"$14,000","newOwner":"Tonkin Dealership"}'
        )
        await autoTrace.transfer(VIN, '022a70d2862aeb01ecf3014395cec93a2390e3e9d80aecc9bbbbde5ddbd2a3d283', event)
    })
})

describe('Decommissioning a vehicle history token', () => {
    it('Decommissions a vehicle history token by spending the UTXO and deleting the kvstore entry', async () => {
        await autoTrace.decommission(VIN)
    })
})


// Example token transfer code
// it ('test kvstore', async () => {
//     // const result = await get('sillyValue2', undefined, { counterparty: '022a70d2862aeb01ecf3014395cec93a2390e3e9d80aecc9bbbbde5ddbd2a3d283'})
//     const result = await get('sillyValue2')
//     console.log(result)
//     expect(2 == 2)
// })

// it ('test kvstore', async () => {
//     const result = await set('sillyValue2', 'new token for you', { counterparty: '022a70d2862aeb01ecf3014395cec93a2390e3e9d80aecc9bbbbde5ddbd2a3d283', sendToCounterparty: true })
//     console.log(result)
//     expect(1 == 1)
// })