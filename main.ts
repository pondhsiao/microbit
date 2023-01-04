bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    Received = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    if (Received == "1") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Speed)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    } else if (Received == "2") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 31)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 31)
    } else if (Received == "3") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Speed)
    } else if (Received == "4") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 24)
    } else if (Received == "5") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else if (Received == "6") {
        Speed += 2
    } else if (Received == "7") {
        Speed += -2
    } else {
    	
    }
})
let Received = ""
let Speed = 0
bluetooth.startUartService()
bluetooth.startAccelerometerService()
basic.showIcon(IconNames.Giraffe)
Speed = 35
basic.forever(function () {
	
})
loops.everyInterval(5, function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
