item = 0
calibrationVal = pins.analog_read_pin(AnalogPin.P0)

def on_forever():
    global item
    item = pins.analog_read_pin(AnalogPin.P0)
    if item < calibrationVal - 50:
        pins.digital_write_pin(DigitalPin.P16, 1)
    else:
        pins.digital_write_pin(DigitalPin.P16, 0)
basic.forever(on_forever)
