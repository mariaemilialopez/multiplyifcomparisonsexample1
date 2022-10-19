controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x < scene.screenWidth() / 2) {
        info.changeScoreBy(1)
    }
    if (mySprite.y < scene.screenHeight() / 2) {
        info.changeLifeBy(-1)
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f b b f f f . . . . 
    . . . f f f b b b b f f f . . . 
    . . f f f c c c c c c f f f . . 
    . . f f c b b b b b b c c f . . 
    . . f c b f f f f f f b c f . . 
    . . f f f f c c c c f f f f . . 
    . f f c f b f 4 4 f b f c f f . 
    . f c c 4 1 f d d f 1 4 c c f . 
    . . f c c d d d d d d c c f . . 
    . . . f c c 4 4 4 4 c c f . . . 
    . . c 4 f b b b b b b f 4 c . . 
    . . 4 d f b b b b b b f d 4 . . 
    . . 4 4 f 4 4 6 6 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
info.setLife(5)
