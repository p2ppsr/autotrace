/* eslint-disable @typescript-eslint/no-unused-vars */
import { AutoTrace } from '../src/AutoTrace'

describe('All the tests!', ()=> {
    it('Does something', () => {
        const tracer = new AutoTrace()
        tracer.receive()
        expect(1 === 1)
    })
    it('Does something else', () => {
        expect(2 === 2)
    })
})