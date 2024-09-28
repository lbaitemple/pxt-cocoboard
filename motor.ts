// Add your code here

namespace coco {

    /**
     * Use this file to define custom functions and blocks.
     * Read more at https://makecode.microbit.org/blocks/custom
     */


    enum MovementType {
        //% block="forward"
        MoveForward = 0,
        //% block="backward"
        MoveBackward = 1,
        //% block="left"
        TurnLeft = 2,
        //% block="right"
        TurnRight = 3,
        //% block="stop"
        Stop = 4
    }

    let leftForward: DigitalInOutPin = pins.D8;
    let leftBackward: DigitalInOutPin = pins.D7;
    let rightForward: DigitalInOutPin = pins.D4;
    let rightBackward: DigitalInOutPin = pins.D2;
    let leftPowerPin: AnalogInOutPin = pins.D9;
    let rightPowerPin: AnalogInOutPin = pins.D5;

    //% block="Move Forward at speed $power "
    //% power.defl= 512
    //% subcategory=Motor
    export function moveForward(power: number): void {
        let realPower = 1023 - (1023 / 100 * power);
        leftBackward.digitalWrite(true);
        leftBackward.digitalWrite(false);
        rightForward.digitalWrite(true);
        rightBackward.digitalWrite(false);
        leftPowerPin.analogWrite(realPower);
        rightPowerPin.analogWrite(realPower);

    }

    //% block="Move Backward at speed $power "
    //% power.defl= 512
    //% subcategory=Motor
    export function moveBackward(power: number): void {
        let realPower = 1023 - (1023 / 100 * power);
        leftBackward.digitalWrite(false);
        leftBackward.digitalWrite(true);
        rightForward.digitalWrite(false);
        rightBackward.digitalWrite(true);
        leftPowerPin.analogWrite(realPower);
        rightPowerPin.analogWrite(realPower);

    }

    //% block="Move Left at speed $power "
    //% power.defl= 512
    //% subcategory=Motor
    export function moveLeft(power: number): void {
        let realPower = 1023 - (1023 / 100 * power);
        leftBackward.digitalWrite(true);
        leftBackward.digitalWrite(false);
        rightForward.digitalWrite(false);
        rightBackward.digitalWrite(false);
        leftPowerPin.analogWrite(realPower);
    }

    //% block="Move Right at speed $power "
    //% power.defl= 512
    //% subcategory=Motor
    export function moveRight(power: number): void {
        let realPower = 1023 - (1023 / 100 * power);
        leftBackward.digitalWrite(false);
        leftBackward.digitalWrite(false);
        rightForward.digitalWrite(false);
        rightBackward.digitalWrite(true);
        rightPowerPin.analogWrite(realPower);
    }

    //% block="Stop "
    //% subcategory=Motor
    export function Stop(): void {
        leftBackward.digitalWrite(false);
        leftBackward.digitalWrite(false);
        rightForward.digitalWrite(false);
        rightBackward.digitalWrite(false);
    }

}