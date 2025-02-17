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
    //% power.min=0
    //% power.max=100
    //% subcategory=Motor
    export function moveForward(power: number): void {
        let realPower =  (1023 / 100 * power);
        leftForward.digitalWrite(false);
        leftBackward.digitalWrite(true);
        rightForward.digitalWrite(false);
        rightBackward.digitalWrite(true);
        leftPowerPin.analogWrite(realPower);
        rightPowerPin.analogWrite(realPower);

    }

    //% block="Move Backward at speed $power "
    //% power.defl= 512
    //% power.min=0
    //% power.max=100
    //% subcategory=Motor
    export function moveBackward(power: number): void {
        let realPower = (1023 / 100 * power);
        leftForward.digitalWrite(true);
        leftBackward.digitalWrite(false);
        rightForward.digitalWrite(true);
        rightBackward.digitalWrite(false);
        leftPowerPin.analogWrite(realPower);
        rightPowerPin.analogWrite(realPower);

    }

    //% block="Quick Turn at speed $power"
    //% power.defl= 50
    //% power.min=-100
    //% power.max=100
    //% subcategory=Motor
    export function quickTurn(power: number): void {
        if (power < 0) {
            rightForward.digitalWrite(true);
            rightBackward.digitalWrite(false);
            leftForward.digitalWrite(false);
            leftBackward.digitalWrite(true);
        }
        else {
            rightForward.digitalWrite(false);
            rightBackward.digitalWrite(true);
            leftForward.digitalWrite(true);
            leftBackward.digitalWrite(false);
        }
        let realPower = (1023 / 100) * Math.abs(power);

        rightPowerPin.analogWrite(realPower);
        leftPowerPin.analogWrite(realPower);
    }

    //% block="Move Left Motor at Speed $power"
    //% power.defl= 50
    //% power.min=-100
    //% power.max=100
    //% subcategory=Motor
    export function moveLeft(power: number): void {
        if (power < 0) {
            rightForward.digitalWrite(true);
            rightBackward.digitalWrite(false);
        }
        else {
            rightForward.digitalWrite(false);
            rightBackward.digitalWrite(true);
        }
        let realPower = (1023 / 100) * Math.abs(power);
        leftForward.digitalWrite(false);
        leftBackward.digitalWrite(false);

        rightPowerPin.analogWrite(realPower);
    }

    //% block="Move Right Motor at Speed $power"
    //% power.defl= 50
    //% power.min=-100
    //% power.max=100
    //% subcategory=Motor
    export function moveRight(power: number): void {
        
        if (power <0){
            leftForward.digitalWrite(true);
            leftBackward.digitalWrite(false);
            
        }
        else{
            leftForward.digitalWrite(false);
            leftBackward.digitalWrite(true);
        }
        
        let realPower = (1023 / 100 * Math.abs(power));
        rightForward.digitalWrite(false);
        rightBackward.digitalWrite(false);
        leftPowerPin.analogWrite(realPower);
    }

    //% block="Stop "
    //% subcategory=Motor
    export function Stop(): void {
        leftForward.digitalWrite(false);
        leftBackward.digitalWrite(false);
        rightForward.digitalWrite(false);
        rightBackward.digitalWrite(false);
        rightPowerPin.analogWrite(0);
        leftPowerPin.analogWrite(0);
    }

}