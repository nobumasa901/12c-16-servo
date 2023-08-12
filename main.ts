function _10090do () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 90)
    basic.showNumber(1)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
    basic.showNumber(2)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 90)
    basic.showNumber(3)
    basic.pause(100)
}
function _0do () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 0)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 0)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 0)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 0)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 0)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, 0)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, 0)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo8, 0)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo9, 0)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo10, 0)
    basic.pause(500)
}
_0do()
basic.forever(function () {
    _10090do()
    basic.pause(500)
    _0do()
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
