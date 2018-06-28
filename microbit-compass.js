let heading = 0
let arrow: Image = null
arrow = images.arrowImage(ArrowNames.North)
basic.forever(() => {
    if (input.buttonIsPressed(Button.AB)) {
        input.calibrateCompass()
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.compassHeading())
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(Math.abs((23 - input.compassHeading()) / 45 % 8))
    } else {
        heading = Math.abs((23 - input.compassHeading()) / 45 % 8)
        arrow = images.arrowImage(heading)
    }
    arrow.plotImage(0)
})
