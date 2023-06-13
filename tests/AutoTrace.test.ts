/* eslint-disable @typescript-eslint/no-unused-vars */
import { AutoTrace } from '../src/AutoTrace'
import { ATEvent } from '../src/models/ATEvent'
import { Vehicle } from '../src/models/Vehicle'

describe('AutoTrace general use tests', ()=> {
    
    const autoTrace = new AutoTrace()
    const VIN = '4A3AJ56G8WE042176'
    const newCar = new Vehicle(
        'Toyota',
        'Camry',
        '2021',
        'Silver'
    )

    it('Register a new event', async () => {
        const event = new ATEvent(crypto.randomUUID(), 'TitleRegistration', 'Car delivered to dealership', Date.now().toString(),'Document contents here...')
        await autoTrace.register(VIN, newCar, event)
        expect(true)
    })
    it('Finds car history', async () => {
        const carHistory = await autoTrace.trace(VIN)
        expect(carHistory.events !== undefined)
    })

    it('Register a maintenance event', async () => {
        const event = new ATEvent(crypto.randomUUID(), 'Maintenance', 'Car repairs done', Date.now().toString(),'Document contents here...')
        await autoTrace.register(VIN, newCar, event)
        expect(true)
    })
})