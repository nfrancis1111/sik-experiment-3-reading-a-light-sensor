let item = 0
let calibrationVal = pins.analogReadPin(AnalogPin.P0)
basic.forever(function on_forever() {
    
    item = pins.analogReadPin(AnalogPin.P0)
    if (item < calibrationVal - 50) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    
})
