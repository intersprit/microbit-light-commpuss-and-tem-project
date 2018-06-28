let arrow: Image = null
let heading = 0
arrow = images.arrowImage(ArrowNames.North)
input.calibrateCompass()
basic.forever(() => {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(heading)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(input.compassHeading())
    } else {
        heading = (23 - input.compassHeading() / 45) % 8
        arrow = images.arrowImage(heading)
    }
    arrow.showImage(0)
})
