//% weight=100 color=#048258 icon="\uf0ad" block="Button2"
namespace button2 {
    export enum pushType2 {
        //% block="pressed"
        down = PulseValue.Low,
        //% block="released"
        up = PulseValue.High
    }

    //% blockId=onBtn2Changed block="when button |%btnPin| is| %dir"
    //% weight=90
    export function onBtn2Changed(btnPin: DigitalPin, dir: pushType2, handler: Action): void {
        //設定腳位上拉電阻
        pins.setPull(btnPin, PinPullMode.PullUp);
        //設定腳位接收到脈衝是High或是Low的時候，要執行什麼程式
        pins.onPulsed(btnPin, <number>dir, handler);
    }
}
