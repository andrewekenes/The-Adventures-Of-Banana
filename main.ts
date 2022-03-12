namespace SpriteKind {
    export const potion = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.potion, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game_over == 1) {
        game.over(true, effects.starField)
    }
})
info.onCountdownEnd(function () {
    game_over = 1
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffff1fffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffffffffffffff1fffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffffffffffffff1fff1ffffffffffffff11f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222ffff11ff111ff1111f111ffff1111ff1ff1fff11f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222ff1111f1f11ff111ff1fff1ff1111f1ff1ff111f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222f1ffff1ff1ff1f1ff1fff1ff1ff1f11f11f11ff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222f1fffff111ff1f1ff1fff1ff1ff1ff1111f1ff1
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222fff1fffff11ff11f1ff1fff1ff1ff1ff11f1f1111
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555fffffffffffffffffffffffffffffff2222222222fffff111fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555fffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555fffffffffffffffffffffffffffffff222222222ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555fffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff222222fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555bbbffffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555bbbbb5555bbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555bb1115555111bbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555bbbb1115555111bbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555bb11fff5555fff11bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555bb1ff11f5555f11ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555bb1ff11f5555f11ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555bb1fffff5555fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555551fffff5555fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555551fffff5555fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555551fffff5555fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555551fffff5555ffffeeffffffffffffeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555111fff5555ffeeeeefffffffffeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555551111155551eebbbee55fffffeebbbeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555111115555eebbbbbee5ffffeebbbbbeefffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555eeebcccbbe5fffeeebcccbbefffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555eebccbccbe5fffeebccbccbefffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555eebbcbbbcbeeffeebbcbbbcbeeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555eebccbbbccbeffeebccbbbccbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555eebbcbbbbbcbefeebbcbbbbbcbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555eebbcbbbbbcbefeebbcbbbbbcbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555eebbcbbbbbcbe5eebbcbbbbbcbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555eebbcbbbbbcbe5eebbcbbbbbcbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555eebbcbbbbbcbe5eebbcbbbbbcbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555eebccbbbbbcbe5eebccbbbbbcbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555eebcbbbbbbcbe5eebcbbbbbbcbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555eebcbbbbbbcbe5eebcbbbbbbcbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555eebcbbbbbbcbe5eebcbbbbbbcbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555eebbbbbbbbbbe5eebbbbbbbbbbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555eebbbbbbbbbbe5eebbbbbbbbbbeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffff5555555eebcccccccbee5eebcccccccbeeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff111111111111111ffffffffffffffffffffffffffffffffffffffffffffff5555eeebbbbbbbbe55eeebbbbbbbbefffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff111111111111111111fffffffffffffffffffffffffffffffffffffffffffffff555eebbbbbbbbe555eebbbbbbbbefffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff11111111ffffff1111111fffffffffffffffffffffffffffffffffffffffffffff5555eebccccbee5555eebccccbeefffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff111111fffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffeebbbbbbefffffeebbbbbbeffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff11111ffffffffffffff11111fffffffffffff1111ffffffffffffffffffffffffffffffffeeeeeeeeffffffeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff11111fffffffffffffffff111ffffffffffff11111fffffffff1111fffffffffffffffffffeeeeeeefffffffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff1111fffffffffffffffffffffffffffffffff1111111fffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff1111fffffffffffffffffffffffffffffffff11111111fffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff1111ffffffffffffffffffffffffffffffff111111111fffffff1111111111ff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff111ffffffffffffffffffffffffffffffff11111f1111ffffffffffff111111111111111ff11111ffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff111fffffffffffffffffffffffffffffff11111ff1111fffffffffffff11111111111111f11111111fffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff111ffffffffff1111111ffffffffffffff1111fff1111fffffffffffff111111111f11111111111111ffffffff11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff111ffffffffff11111111111fffffffff1111ffff1111fffffffffffff1111111ffff1111111111111ffffffff111111f1111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff111ffffffffff11111111111fffffffff1111fff11111fffffffffffff11111ffffff1111111ff1111fffffff11111ff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff1111ffffffffffffff111111fffffffff111ffff11111ffffffffffff11111ffffffff1111fffff111ffffff11111ff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff1111fffffffffffffffff111fffffffff111fff1111111fffffffffff11111fffffff11111fffff111fffff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff11111ffffffffffffff1111fffffffff111fff1111111ffffffffff11111ffffffff1111ffffff111fffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff1111111fffffffffff11111fffffffff1111111111111ffffffffff11111fffffff11111ffffff111ffff11111111111ffffff1111ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff111111111111111111111ffffffffff11111111111111ffffffff11111ffffffff11111ffffff111ffff11111111ffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff1111111111111111111fffffffffff1111111ff11111fffffff1111fffffffff1111fffffff111ffff1111ffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff111111111111111ffffffffffffff11111ffff1111fffffff1111ffffffff11111fffffff1111fff111fffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff11111ffffffffffffffffffffffffffff111fffffff111fffffffff1111ffffffff1111fff1111fffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffff111fffffffff1111fff1111111f11111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff11111111fff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff1111fffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff1111ffffffffff111fffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1111fffffffffff1111fffffffffffffffffffffffffffffffffffff111111ff1111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1111fffffffffff1111ffffffffffffffffffffffffffffffffffff1111111f111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff111fffffffffffff111ffffffffffffffffffffffffffffffffffff11111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff111fffffffffffff111ffffffffffffffffffffffffffff11111fff111f1111111fffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff111fffffffffffff111ffffffffffffffff111fffffff1111111fff111ff111111ffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff111fffffffffffff111ffff1111fffffff1111ffff1111111111ffffffff11111fffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff111fffffffffffff111ffff1111fffffff1111fff11111111111ffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff111fffffffffffff111ffff1111ffffff1111ffff11111111111fffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff111ffffffffffff1111fffff1111ffff11111fff11111ff11111fffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff111ffffffffffff1111fffff1111ffff1111fff11111f111111ffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1111fffffffffff111fffffff1111ff1111ffff1111f111111fffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1111ffffffffff1111fffffff11111f1111ffff1111111111ffff111fffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff111fffffffff11111ffffffff11111111fffff11111111ffffff111fffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff1111ffffffff1111ffffffffff1111111fffff1111111ffffff1111ffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff11111ffffff1111fffffffffff111111fffffff1111ffff11111111ffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff11111ffff11111ffffffffffff11111fffffff111111111111111fffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1111111111111ffffffffffffff111ffffffff111111111111111fffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff11111111111fffffffffffffffffffffffffff111111111ffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff11111111fffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    mySprite.destroy()
    for (let value of sprites.allOfKind(SpriteKind.potion)) {
        value.destroy()
    }
})
let mySprite2: Sprite = null
let game_over = 0
let mySprite: Sprite = null
game.setDialogFrame(img`
    . . f f f f f f f f f f f . . 
    . f f b b b b b b b b b f f . 
    f f b f f f f f f f f f b f f 
    f b f f f f f f f f f f f b f 
    f b f f f f f f f f f f f b f 
    f b f f f f f f f f f f f b f 
    f b f f f f f f f f f f f b f 
    f b f f f f f f f f f f f b f 
    f b f f f f f f f f f f f b f 
    f b f f f f f f f f f f f b f 
    f b f f f f f f f f f f f b f 
    f b f f f f f f f f f f f b f 
    f f b f f f f f f f f f b f f 
    . f f b b b b b b b b b f f . 
    . . f f f f f f f f f f f . . 
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f b b b b b b f . . . . 
    . . . f b f f c f f f b f . . . 
    . . f b f f c f c f f f b f . . 
    . . f b f f c c c f f f b f . . 
    . . f b b f c f c f f b b f . . 
    . . f b b b b b b b b b b f . . 
    . . . f b b b b b b b b f . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.setDialogTextColor(1)
scene.setBackgroundImage(img`
    ......8888882........2222......................................................5555.......5555......2222222.....................................................
    ......82..5588888888888..22..2.........................2222222222222222222222222222222222222222222222......22.............8...22222.....5555..88888.............
    ....228..5........555558888888888822222222222222222...2....................5555555522225......5......2.......22..........22222.....228888888885....8............
    ...2.8...5.......5555555555...225588888822.........222...222.....2222222555588888888...5.....5.......2.........22.......2888888888888222222222252..8............
    .22..8..5.55555552.........55555555222.85.2222222222.222222222222......8888855555555888888885555......2...22222222888822888.....22.5..2.........522.85..........
    2...8.5555......2............22222.55.28252....2222222222......22222222222222...........5...88..555522222888888888.222222882.222.55....22.......5..28522........
    2...8.55........2....2222...2...2.2..558.25222222222222222222222228885.......2...........5.225855555555255552.......22...88222225........2......5..8255.2....2..
    2...8.5..222...2...22.222222222222222222222222222222222225555..888.5.222......2...2222288885555888.....525..55552222..2..88.255.22........222888.5285.5..2..2...
    2..8.5522..22222222222.....2.22..2222.282525..2222.2.55552222882255...55552.288288888855555..5....8.....2.555...552522228.825.....2...888828888.258.5.52.2..2...
    2.885.5...2..2.222........2....222.288882.5552....555..555888555555588888888825522555555552225.....8.....2.22552222.55558225....2282882222828222.585..52..2.2...
    28885.5..2..222...22.....2.....22288.2.8822225555522555.88.2..888888522225555555552....555555555....8222222....8288888885522...288.222288822222.28.52..5..2.2...
    2885825.2..22.......2....2...222282..228.825555...552.882225885..22..555522255255222.....55.5.2.55558..882888822522222228285582...22288.2...2..2285..2.5..2.2...
    288..852.222.....222222.2...22288..2222852822555555.2822..8855..2.55555225555..2255.255555.55222..888885.2...222252...2222222258888822.2.....2..85....25...22...
    8.8222282..2.....2....22...22882.222258.2.5555.5528222222222222222222..552.5.2....55222..5525...88....8.52222222222222.828828225588822888....2.825.....5...22...
    8.8..252822.....2.....222225822222555.8.25825225222855885.55588888885222885...2.55..522225.55588.2....822222222....8888822288822255.822..888.52555.....25..2.2..
    8.82225..822222222....2.2258222255...28252825.2288588.58852222225522288828888855.....5525555585555555528..2225...88885.228..2222.2255228.555882255......5..2.2..
    .88.225...8....2..2222222258.555222222252222222828822222225522252222522.5288558888888882552885.555555558222.288888.588228888222....222258...8825552.....5...22..
    .88.225..2.8...2.....222.5855222...2225222258822222555555522222288..222288228888888...55288525...55...2252288..88888.2.288.288222..2.522.8.8..22552.....25..22..
    2.82.25..2..8.2....2222.585.222288885222885822828555.555528228222228852222222.88888888.882.8885.22.522282825588885.2252.88222.8..2255.222288..52852.....25...2..
    2882.25..2...82..2222.2558.2.2282..52288852288882555.555582.222888822525525222.22888888885255.588.228882..2.88855522.8288888..28.25....2852.8.52582..22225...2..
    2858.25.2.....8.22..25528.2.288...5228.222828888888555885222888......55522228822888588882882.55582882552..28888882888828.82.82.8.5.2...22.52.8.5228.2...252..22.
    2858.25.2....2288..55.58.2..8..28852.8.2888588252225885552882222222555885828255222288.8888528885288888288822888822..55288888888.8...28852..525852.82...2.2522.2.
    2858.25.2...22.2.852.5.82.282..8852..225885882522..5855225222..228888555222255..2222.88888882822555.2228882885.2......28282.825888.8888828888288258....2.25..22.
    28528252...22.255.8.5.82.882.88852222855822885...5555582855.2228852..555.55225..28..2288888882885..55288828.5.2.....2228852285288888852.522.552222288..2.25...2.
    .8528252.22.255...25.82282.888..222285888..825..5555582..85..88.522225555252.52282888828888522825228288882885.22222222288.5588888.855888.225522252585888.2.5.22.
    .852.2522..552...2.588282.88...52228858882.85..8555882.2..588.552.22.5522522258882888222.82258285888228228888288888222588..8888..28.222582252..52228..5588.5.22.
    .8522852..52.2...25.88828882.22222285.828288..85558522..285..88.22255552522828888222222228228528588222882252285.22.882888.8885222582..5.52252.525222..2.5588.22.
    .8522852.5.22...25.2882888222222.58528.8.88888558852252882555228855.2555888825...22.2.2522825882588288825522.58822222258888..55.5.82..55.252.5258522..2..25.8222
    825228555.22....252888828882822.58858..8.85855582522288...25....5882558888.825...2.2..22528888825.2888225.2225.582...22888222.55..82.55.225285258.282.2.2..58222
    82522282..22....52.885.28228222585528..8.8885825522885....55..558888558...8..2...222..225228858252..888222222.5528..5222882.22255.8.55..2222.5.58.222.2.2..58555
    825.2582..2....52.8852.82882228855.8228288558.5.582..5...52258888882558.88...2..22..225.888228882288.82225.222.5..8582282.82..5.58255..22228222582252222255.8252
    8.5.2582..2...25.88522888222528885822.828558..5582...528888858882225.5288...52..2.222288888285852.888222..5..225558822852..8.5..28525222.28.2..58.5222.552..8552
    8.5.2258.22..25.885.288.225228.55888.8.8558.855822888825..8855.2..55.58..88.52.2222522585588285522288222..5555558822288582.8252285552222228522.58.52525.2.2.8552
    8.552258.22.258885.888..2.25225858.28885588.888828...28888.5.52..525252...2882255582.285..828282828882288888558822522885822.8...825.5.252225.2.58.52.52.2..28552
    .85522582.22.528888228.522.52.55.8.2.555888888222..828.55..525..5225852222..525.882882888888822552582222.8558888882522888225.8582.52.5228225222.8252252.2...8255
    .85.2.582.2.5.8882.28.522282.885888858588888552.888.2555...525.5.22525.2...552888288828888282.2552582...2888525228282885825.28.8.55..552825.2228.2522552....8255
    .85.2.5282.5..88888888282882885.8.2585828285882822225525..25.55.2285.5..255582882822225888885225222228.882822552828.2288825258.8.55..552.25...28.2522.52....8255
    .852225.82.5.88.2.2.58222852.558.25885.8.85882888.2.5..52225.5222825.5.55888528828852282.8858282522288852288255228.225858285..8.55555582222..52228552..52....855
    .8522252825.5882..2522828.525252252852.8888.52.8.8288.5.225255..8.2555888855.28222282585588228.2822.58522228.55828..285.828855855552585252...522.8552..52....855
    .582225.885.882..25.2..28.52525.5285.888.8.5.22.82..588888555..8.5855888.2.8822222.2285288528882.2888882..288582852.285525588858.5558.5222...58222522..5.2...855
    .582225.85.588.2225.2.282252.5.522588828.8.5222.2...525.2.5888888855582..88.82.22..528888882855522.252888..8885255.2285525..8888.558.522525..5822552.2.252222855
    .58222588558282..5.222822.25.552258.8..8585.2.2528..5.52255.5888588588888888288888882888882.852522225285.888.882555528252..588.88582.52252.55.88.222.2.25.2..855
    .5522.82585882..5.2.2282252..5585888...88.522252.8.25252.555885.22855.8822582..255852..888282522825522.85.28888252..28252.58.58.88..252252.55.88222.22.2.5.22855
    .552285258828.2522.228.2252.852588....8585.225.2..8.552.5588852288558822..822.25.8552..8.8285252.25255.85.288825522.285525285.888.8.5.25.2..58.8522..22.25.2.855
    .552885558882.52222.2..22528525885....8585.252.2.282555585.85..8225552...82.255.82552.8282882228.222..5855588528.2.2285.2285..888..85.252.25858.552.8222.52.2855
    .52282555888252222282..28525585825....828.22222.2228258825852.8225855...85222.28255.2.8282228255522....58888.5282..22528285..85588.585252.258.8.552.822..5..2855
    .5228255288252.2...82.28525.52585.....82852222222..88852.555882252.5.5.822552228.55.228222522285222..55.8.58.52.8.25252828.585.588255825222828552522828225..2255
    2582285.288.5222..82228252285582522222885525552555555555555555555..5.58222.22282.55.282.252.258822255..8588.522288.522582..8255..888822222858.2525.2.22825..2255
    .5822582.8852.2.2822882.5288.5825555555522..222.8858.52.5.852885555555252..2282.55.2282225.25285222...8.588552.2288582582.8.5.5.288282282858...555.8222.85...285
    .58225588885.22..8.22225522855555....28822.222885258552858.58252...585525.2228..552.22.25..258.5282..82.58855255.8588252.8.55528858.825.2858..5255282.2.85...285
    .58255528882.22.8..22.2552555525....258822.2282525.825885228.25.2..555.2555522.55..822.25.285855222882225885522.558882828255258.5.8.82..288..2522558.22.58...285
    .52.555288822.28..222555528855.52222258.2..82.5225.8.882588525..2.852525...225555.222.28.225855222288...588525..55888282.55.5855.58.82.8288..2525558.22.58...225
    .525525885882.28.8255.5522858.5....25582288225.25.5885258.52522228552525..282.2522822228.2858252.222.8..888525225558522855228.5.2588828225.825552558.22.58...225
    .5255.585.828885552.252528.5..5....5.5828222...25.588525..5.5...8..5222522822222..52282828582.52.822..85882822.55.5882285.28.5.5.588822825.855..5.85.22528...225
    .52522585.8225588.2.55.52858.55...5.58822.52222258882885..55..558252.22..282225..8225285285.2.2.822...2885.8225.5588822852855..55.825228255582..558.5225.8...225
    .52522882825582.8.2.55252858.55..25.8.822522222585888255.552.5282252.25..82225528.2.82522552..2822....5288225525.88882288855....5.88528.252258..5.8.222..8...285
    .52522852522.82.8.255.252858.5.525.858222522.2885888225..552528.225.225.222225..82252.82552...2.22...5.582828558888.8228885....5588852.2222.58..5.822552.8...285
    .525228.5822822.8.25525225585..5588558225222285588.82255255528.2225.222282.255.822582282552..82222.252588.52828.58825252558....58.85282522.5..855.2.2252.8...285
    .522588522.28.28..2.585225.85.258..558282.2285558282..5555228.22.2.52252822.5.8552.82225525.822.22252.58825288.58.85288285.8..885.852852...5..5822..2552.8...258
    2522285552.8..28..25825225.85.585.2582282.285.88228...5.522822.2.2222558.22.585222522.225..5522222.5.55882528888..8528228.58.85.528528222.25..5258..52.2.8...258
    2522285225.8..28.525825228.8528.52558.28.82258822.8...555282222.22252285.22585222582.825228.25.222525.8582825888.858285.2..28.5258852525.25..52588..52.2.82..258
    252228552855..285.28.52.28.858.2.555852882258.8..28..555.582.22222252285.22852.2252.8285.82.2522.22.558588.288.58882.5852.88.82.8.852225.25.22.528.5.2.2.82..258
    2522885258825.285.22.52852.8822...558.22828858..2.8.5252258222.222.258..5222.222582.825882225.5252.5258885.28.5558825285822228585855228..2525..52852.2.2582..258
    22828852.8.2.5552.2..52522858.....58522282558..2.8252552.2222222225258..525..2222828528..2222225525.588285528.558825.28.82.258.8585522582.25..5.258..2.28.2.2258
    22828822.852...5552..52588228....525822282258.2.285.55222.582..222522525825..222.825258.2225..2522..88.8.5528588.82825888.2.5882585522582252..5.588..2.28.2.2258
    228882228825...5.825558585228....58852888228.2.255..5222..582...25228558522222228828228222.5.25.52.885585582885582..88.88.2.588.88522522.55.2.5528.8.2.28.2.5258
    22888225882.55.5852.55558522582..88222.5528222255822222....82..22522855.52..2222882.228..252252252885558585285.5828882.88.2.8285885.22585555555528.8..22852.5258
    228882288.2...5585225852555528.8858.8255.28.2522225522....282..252258855225225288252228.225252.5258.55258582855828.5.8288.222.858522258.55...52.585.8.2285.55258
    528582288.2...5858.2585528252582258852522882225.8.552.....228222522882552252.288.28222822255.2882855555888.28582...5.8228282228822222585.5..552228.58.2285552258
    52858288252...52.852285528.5225555855225222825..8552..2222..8525.52825252.5282.8222..282255228.282.5558882228825..5.2.8288252222852.2.8.5..5522228..8.228555228.
    528522882522.85..585255.2285828255552222255552285522222222..8255582825.22228522822222.22.5.8822282.5588588828.25.5.222.88..22258852.258.5.5.522.28..85228555225.
    528822882.5.285.25.5825555885528522225582.5.82.522222222.2228.588228525258852228822..28.5585..28222588588852528..5222.88822.225882252.8.55..522228...8225.52825.
    2288228.2.258252.58582222288222228822.8525228252222.....22.228825225.22852225228522222855852282..55858852852285252.2.8.22.5.282.82252.8.5..5.2.228...822.552825.
    2288288.2.2585..28.55.222222225288.82.8.22555582.2.22222222288222525.8222582522522.222888528822255885555.88228552..2822.8.5.5882525.2.855..5.2.2.8...8225.58225.
    228228...22285..8525522222258225258.282522.5585555......228858222288852..522255822222585588222588885555.25228.5522222...8.525882255.255.5.5.2..2.8...852..85225.
    222288.22228522222222282..252885822822852555.88.2.555288885.582.228552228252.5852222888582..2888285225..58228.55.22.222.85..58.822..2.8.5.5.2..2.8...582.8.5225.
    25822222222225585.585282225.225885.225582..58228..888552.525.288822552.82252.58222282288.88828888552252252.225.228.....285.5282252.2.8..55.2...2.8..5.828..5225.
    558282....28255.555858282.5.2558588228.5285.8288882...2555528888.825258222.55282228.885885528285555252552.82222582...22.85552882522228..5522...2.8.555828..5225.
    .58285....822.855558522.8252.582552282852588882282...2552855.2528822285252.5522.288888885222285555255.528222.8885...2...8552882555.2822.522....2.8.55.82..5.225.
    .58288....82.8.5525852...8225.8255822228288288.282222588852.5552885222.2525825822888.555882585555525..222852.88.2522....855582255..22..52.2....2.855.282..5.225.
    .582858...8228255.5252...282528.55822252228.2.8..82888..252.25.5558222252222285225..55.28828555.555522825.528282.25.....825282552222.2.5..2...2..8552882..5.225.
    .852855822822825558252222.5828552852.552222888888885222252..522.8552.2222588888255.55.88.2552.55.222582.8552.2.82.252228888852858882882882....2.58.58822..5.225.
    .8528258..82825.85525....2558255.82252528222.888888...552225..22882.2558588.5852555528.5828..522252.82285852222282888882855525.528.2.2522888..55.828.828.25.225.
    .88282.58.82852285855....255.82285.225228288222225.88882..5222.2828828855..558.2525882582522225252882285825528888885552555828..528.2.5.5222288.5288..828225.225.
    .88255..588825285582.55.22558.85255228888.2.2222222252888888888882828858855558522885222222.8..552852..88888825555558855558288..58..25..522252288885..828.25.225.
    8.82525.55888.8.5582..55552.82585282858.222.22..522522225..8888822222522.558522222225552..888882525588882.5.2..555555888528888852222..255522.528885.8228.25.225.
    ..82855.528528885285..5..55555558.2.2585555222.5..5.28882222222222222222222228825888852888...2258888852..52.255...2.52.52888225.25525555...5228228.28228.25.225.
    ..8.2255.58582..5888888588.855855552255222..225.5888882.2228.52.82.58.55525..8.285555.2.5.5228885.288.2555552...22.52..82282555555.22..5..5.2228858.82282252225.
    ..8.22.5558.8.2.528225.55555558525282222.2..288882255.822.8..2.22..55555..5888825..55255822855855888555..522.222..52.88228822255...2..25.522882..58.82282252225.
    ..8.22..2558.5525.8..25552852825.52828228888.252225222.8.8..22228.552522.88.8852255.288225.555288.8..5..25.22222252.8.2.2882..52..22.25.52888.22.588.2282252225.
    ..8.8222.5855..5558.555.25822855288.288822255.2.2522222.8222222285255.288.8885.25.82222.55555288888..5.2252222.552282222888255.222.2.25888.2.22.2.88.22825..225.
    ..8.822258.885555555..552582888888882.22855222222.22.2282222255552552882885.85528222.52255.55552588...5225..225...8.2528.855.5.2...28888...2.2.25228.2225...225.
    ..8.822258..8888858888888858888252.5252558.5.522222..2222525.2.585588.88552555822.2252555.58.5555..8.225.5...2...8.2.5255528.52888828852...2.2..5.822.252...225.
    ..88.225.8...5885.5.555528588225.5252552..8855..22222555.2282.5288828852.522222222.5555..885...58555588888888288822885588.288582..82..52...2.2.5.28.2222....225.
    ..88222582...2.5885.5.888885555555552.555552888555582222222255588882222222228222252525..8...58888888555555555255255558..8888.5.28822...5..2..2.5.28.22222...225.
    ..8822228.2.2..25.8588258285.2..5.5552555222...88888..2522552222222.885525.58.2.25225.8888888585...2.25588888.222..85..88828588822.2..25..2..25..882252..222225.
    ..8822528..22..225285555858552..55555225255.....28..228855.88282558855...55.8.2222.52888...52282552..2.5558882288.8.8888888858228828..25..2..25.28825.2.....2.5.
    ..8285.822.22222.5585258.82.5555...552225525555.8.22.5.52.8822588855.....5285522.888.22.225..8.22.552.588.52255258888888.2555.222.2.8825.2...5..28852.2.....2.5.
    ..8285.82222...2..5855582822.55.....552.2.522.8822..255.88555588855.8...55585282888.222255..8.222...558..22.55.288.55558552252.22.2...88.2...5.28582.28.....2.5.
    ..828228222.22..2.5585528.22..5....25552...558222.55558885258855588..885558822228222...52...82...2.588.22.5888522..25..822258..22.2...2588..522.8.8222......2.5.
    .28.82.82222222225.585558.2...55..22.5552...225222558885258855552228855888222.882.....5..2.82....288222.888.88.52225..28..25.8.22.2...2.5.8855522222222....22.5.
    .285.8.8.2..2.22222.588555.2...5522.25222222..255588585588555..555588888822888.22...55...222222222222888..885.2222552228..25.8.2.22....255522228.2.882.2...22.5.
    .285.82.82..2...52225882522222222222222..28555558855858555288888888..2.828885.252555....2.888885.8882...885..5555255555822.528.2.22.5552222528882..882.2..222.5.
    .28..82..82..2..5.2.22222255522.525..52.8222.5585228555555558888......52.8888888828...28888.55888..2.288..52222.2225.5555555585555222222525...88..2882.2..22..5.
    .28..8....88..25.2.255.8..25555225555555552558555555...22.......8888882885288...22.88888888888.....288.22.252.22.225.28.555..282222....255....828.282...222...5.
    .58.228....288.252225.52822..225555555555525555888....22..........252285.88888888828888.55..88888888....222522222.522.8.....2222..22...2252..822.8282...222...5.
    .58.22.8....228888..522528222222555588885.5228888....22..........522852..228.....2822888888822222222222222..5.2...522.8.2222...82..2.22.55.228.2.2828...222...5.
    5282.2..8.....22258888888.855555888855..55288222...222.........52288...222..8..22.28822.............2222....5.2..25.2222.......8.2222.25.5.2822.28228...22....5.
    .58..22..8...2.22252252258888888.88...5558858..22.2.2.......552288......2.22282.5582...22.........22.........5222222228.........822222.5..5.8.2228.28...22....5.
    ..8552.2..882..22252225522.288888.22558885585555522.2...2.552288.......2..22258888..2....22......2......222222222.5...22....222228.22252225282..822.88.222....5.
    .28225..2..28.22..25...255555885888888225282555555522222222288.........222.55....222222....2222222222222..222.5..5...8222222....28.225..2..8...82.22..2.2.....5.
    22822255222228222222522.222.82225552..5528..222255555555888.........222.555........222222....22......22222....5...2228222.......2.825222..85..8.22..2.2.2.....5.
    ..8..2225522228..2..5..2228855552222552282222222222228885555222222255555..............222222222222222.222222222522...8..22.......282522...8528..22..22.2.2....5.
    ..8...2.225.22282222252.88552.....55.2.8...22....288822222225555555.22222222222882222222222222..222222.......2.5.....8..22.......222...2.8..222222222..2......5.
    ..8....222255..288....88.....22.55.....8.22....88822....2222222............8888.......222222222222222222......2.5....8...22...22222222222222522222..2..2......5.
    .888...22..2.55...88882......555222222282.88888.22..2..........22222222888822222222222...........22222222222222..55..8.2222222225..2..88822..522..22..2.....55..
    ....88882.2.2888888..28888885......8888888.....2.....2...........888888....................................2222222255888.....55....2...8...22255.2....2....5....
    .......28888822.55.22...555.8888888......8............2.888888888..............................................2.....55588888......2..8........25522222...5.....
    .......222.2...22255..55..................8.....88888888.......................................................2.............8888882228222222222225555..55......
    .......2222.........55.....................88888........2.......................................................2222222222222222...822222.............55........
    `)
game.showLongText("Caleb & Andrew Ekenes presents...", DialogLayout.Top)
game.showLongText("The Adventures Of Banana!", DialogLayout.Top)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . 5 5 5 . . . . . . . . . 
    . . . 5 5 5 5 . . . . . . . . . 
    . . 5 5 5 5 5 . . . . . . . . . 
    . 5 5 5 5 5 5 . . . . . . . . . 
    . 5 5 5 5 1 1 5 1 1 . . . . . . 
    . 5 5 5 5 1 f 5 f 1 . . . . . . 
    . 5 5 5 5 1 f 5 f 1 . . . . . . 
    . 5 5 5 5 1 f 5 f 1 . . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 a a 5 5 5 5 5 5 5 . . . 
    . . . 5 a a 5 5 5 5 5 5 5 5 . . 
    . . . e e e e 5 5 5 5 5 5 5 . . 
    . . e e e e e e e 5 5 5 5 5 e . 
    . . e e e e e e e . e e e e e . 
    . . . e e e e e e . . e e e e . 
    `, SpriteKind.Player)
info.setScore(info.highScore())
tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
info.startCountdown(35)
game_over = 0
for (let index = 0; index < randint(1, 10); index++) {
    mySprite2 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........bb.........
        ........cccc........
        ........cccc........
        .........ff.........
        .........cf.........
        .........cc.........
        ........cccc........
        .......cbbccc.......
        .......cbcccc.......
        .......cccccc.......
        .......cccccf.......
        ........cfff........
        ....................
        ....................
        `, SpriteKind.potion)
    if (Math.percentChance(25)) {
        mySprite2.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .........bb.........
            ........cccc........
            ........cccc........
            .........ff.........
            .........cf.........
            .........cc.........
            ........cccc........
            .......cbbccc.......
            .......cbcccc.......
            .......cccccc.......
            .......cccccf.......
            ........cfff........
            ....................
            ....................
            `)
    } else if (Math.percentChance(25)) {
        mySprite2.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........4eee........
            .......eeeeee.......
            .........cc.........
            .........ec.........
            ........eeee........
            .......ee4eee.......
            ......ee4eeeee......
            .....ee4eeeeeee.....
            .....eeeeeeeeee.....
            .....eeeeeeeecc.....
            ......eeeeeecc......
            .......eccccc.......
            ....................
            ....................
            `)
    } else if (Math.percentChance(25)) {
        mySprite2.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........dd55........
            ........5555........
            .........44.........
            ........5555........
            ........5d55........
            .......5d5555.......
            .......d55555.......
            .......555555.......
            .......555555.......
            .......555555.......
            .......555555.......
            ........5555........
            ........4444........
            ....................
            `)
    } else if (Math.percentChance(25)) {
        mySprite2.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .........888........
            .........888........
            ......888888888.....
            ........fffff.......
            .......8888888......
            .......8998888......
            .......8988888......
            .......8888888......
            .......8888888......
            .......8888888......
            ......888888888.....
            ......fffffffff.....
            ....................
            ....................
            `)
    }
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
}
