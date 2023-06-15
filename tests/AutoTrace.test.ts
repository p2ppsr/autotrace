/* eslint-disable @typescript-eslint/no-unused-vars */
import { AutoTrace } from '../src/AutoTrace'
import { ATEvent } from '../src/models/ATEvent'
import { Vehicle } from '../src/models/Vehicle'

describe('AutoTrace general use tests', ()=> {
    
    const autoTrace = new AutoTrace()
    const VIN = '4A3AJ56G8WE0421781'
    const car = new Vehicle(
        'Toyota',
        'Accord',
        '2021',
        'Silver'
    )

    it('Register a new event', async () => {
        const event = new ATEvent(crypto.randomUUID(), 'TitleRegistration', 'Car delivered to dealership', Date.now().toString(),'Document contents here...')
        await autoTrace.register(VIN, car, event)
        expect(true)
    })
    it('Finds car history', async () => {
        const carHistory = await autoTrace.trace(VIN)
        expect(carHistory.events !== undefined)
    })

    it('Register a maintenance event', async () => {
        const event = new ATEvent(crypto.randomUUID(), 'Maintenance', 'Car repairs done', Date.now().toString(),'Document contents here...')
        await autoTrace.register(VIN, car, event)
        expect(true)
    })

    it('Transfers ownership of a vehicle', async () => {
        const recipient = '0238ff27623e15caeae025a7a73e8dc29474e5fb14127e0996ce1658981a2f877e'
        const transferEvent = new ATEvent(crypto.randomUUID(), 'Transfer', 'Title Transfer', Date.now().toString(),'Document contents here...')
        await autoTrace.transfer(VIN, recipient, transferEvent)
        expect(true)
    })
})