// Add your code here

namespace coco {
    let severoPin: AnalogInOutPin = pins.D3;

    //% block="Set severo $severoPin at $degree "
    //% severoPin.defl=pins.D3
    //% degree.min=0
    //% degree.max=270
    //% degree.defl=90
    //% subcategory=Servo

    export function setPos(severoPin: AnalogInOutPin, degree: number): void {
        //severoPin.analogWrite(pos);
        let pulseWidth = 1000 + (degree * 1000) / 180 // Scale 0-180 degrees to 1000-2000 µs

        // Generate PWM signal manually
        for (let i = 0; i < 5; i++) { // Repeat to create a 50 Hz signal (20 ms period)
            severoPin.digitalWrite(true); // Set signal high
            control.waitMicros(pulseWidth) // Wait for calculated pulse width
            severoPin.digitalWrite(false); // Set signal low
            control.waitMicros(20000 - pulseWidth) // Wait for the rest of the 20 ms period
        }
    }
}
