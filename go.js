let loadLevel = require('./game')
let level = loadLevel('level1.txt')
let bunny = level.bunny

function goDown () { bunny.move(0, 1) }
function goLeft () { bunny.move(-1, 0) }
function goRight () { bunny.move(1, 0) }
function goUp () { bunny.move(0, -1) }

level.print()
