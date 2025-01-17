input.onButtonPressed(Button.A, function () {
    variable = 11
})
let variable = 0
variable = 11
basic.forever(function () {
    variable += -1
    basic.showNumber(variable)
    if (variable < 1) {
        variable = 11
    }
    basic.pause(100)
})
