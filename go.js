let loadLevel = require('./game')
let repl = require('repl').start('bunny> ')
let level = loadLevel('level2.txt')
let bunny = level.bunny

function goDown () { bunny.move(0, 1); level.print() }
function goLeft () { bunny.move(-1, 0); level.print() }
function goRight () { bunny.move(1, 0); level.print() }
function goUp () { bunny.move(0, -1); level.print() }

repl.context = Object.assign(repl.context, level, {
  goDown, goLeft, goRight, goUp
})
