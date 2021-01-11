Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    light2 = 0
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    basic.clearScreen()
})
Mbit_IR.onPressEvent(RemoteButton.TRight, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, speed)
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, speed)
    basic.showArrow(ArrowNames.East)
    if (speed > 100) {
        speed = 100
    }
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    basic.showArrow(ArrowNames.North)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, speed)
    basic.clearScreen()
})
Mbit_IR.onPressEvent(RemoteButton.Minus, function () {
    speed += -10
    led.plotBarGraph(
    speed,
    100
    )
    if (speed < 0) {
        speed = 50
    }
})
Mbit_IR.onPressEvent(RemoteButton.Light, function () {
    if (light2 == 0) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
        light2 = 1
    } else {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
        light2 = 0
    }
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, speed)
    basic.showArrow(ArrowNames.West)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, speed)
    basic.showArrow(ArrowNames.South)
})
Mbit_IR.onPressEvent(RemoteButton.TLeft, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, speed)
})
Mbit_IR.onPressEvent(RemoteButton.NUM3, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
})
Mbit_IR.onPressEvent(RemoteButton.NUM5, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
})
Mbit_IR.onPressEvent(RemoteButton.NUM2, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
})
Mbit_IR.onPressEvent(RemoteButton.BEEP, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM1, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    basic.pause(100)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
    basic.pause(100)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
    basic.pause(100)
})
Mbit_IR.onPressEvent(RemoteButton.NUM6, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
})
Mbit_IR.onPressEvent(RemoteButton.Plus, function () {
    speed += 10
    led.plotBarGraph(
    speed,
    100
    )
    if (speed > 100) {
        speed = 100
    }
})
Mbit_IR.onPressEvent(RemoteButton.NUM4, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
})
let light2 = 0
let speed = 0
Mbit_IR.init(Pins.P8)
speed = 50
light2 = 0
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
