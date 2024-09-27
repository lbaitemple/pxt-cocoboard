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

    /**
     * Custom blocks
     */
    //% weight=100 color=#AAAAAA icon=""
    namespace Valley_L298N {
        /**
         * @param direction Forward, Backward, Left and Right.
         * @param power how much power to use on drive motors, from 0 to 100
         * @param duration (ms) of this action.  5000 = indefinate
         */
        //% power.shadow="speedPicker"
        //% duration.shadow="timePicker"
        //% block
        export function Move(
            requestedMovement: MovementType = MovementType.MoveForward,
            power: number,
            duration: number): void {
            //power is inverted
            let realPower = 1023 - (1023 / 100 * power);
            let noPower = 1023;

            let leftForward = pins.D8;
            let leftBackward = pins.D7;
            let rightForward = pins.D4;
            let rightBackward = pins.D2;
            let leftPowerPin = pins.D9;
            let rightPowerPin = pins.D5;

            // Add code here
            switch (requestedMovement) {
                case MovementType.MoveForward:
                    {
                        leftBackward.digitalWrite(true);
                        leftBackward.digitalWrite(false);
                        rightForward.digitalWrite(true);
                        rightBackward.digitalWrite(false);
                        leftPowerPin.analogWrite(realPower);
                        rightPowerPin.analogWrite(realPower);
                        break;
                    }
                case MovementType.MoveBackward:
                    {
                        leftBackward.digitalWrite(false);
                        leftBackward.digitalWrite(true);
                        rightForward.digitalWrite(false);
                        rightBackward.digitalWrite(true);
                        leftPowerPin.analogWrite(realPower);
                        rightPowerPin.analogWrite(realPower);
                        break;
                    }
                case MovementType.TurnLeft:
                    {
                        leftBackward.digitalWrite(true);
                        leftBackward.digitalWrite(false);
                        rightForward.digitalWrite(false);
                        rightBackward.digitalWrite(false);
                        leftPowerPin.analogWrite(realPower);

                        break;
                    }
                case MovementType.TurnRight:
                    {
                        leftBackward.digitalWrite(false);
                        leftBackward.digitalWrite(false);
                        rightForward.digitalWrite(false);
                        rightBackward.digitalWrite(true);
                        rightPowerPin.analogWrite(realPower);
                        break;
                    }
                case MovementType.Stop:
                    {
                        leftBackward.digitalWrite(false);
                        leftBackward.digitalWrite(false);
                        rightForward.digitalWrite(false);
                        rightBackward.digitalWrite(false);
                        leftPowerPin.analogWrite(noPower);
                        rightPowerPin.analogWrite(noPower);

                        break;
                    }
            }

            if (duration != 5000) {
                pause(duration);
                leftBackward.digitalWrite(false);
                leftBackward.digitalWrite(false);
                rightForward.digitalWrite(false);
                rightBackward.digitalWrite(false);
                leftPowerPin.analogWrite(noPower);
                rightPowerPin.analogWrite(noPower);

            }
        }
    }



}