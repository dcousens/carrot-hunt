let loadLevel = require('./game')
let repl = require('repl').start('bunny> ')
let level = loadLevel('level2.txt')
let bunny = level.bunny

function goDown () { bunny.move(0, 1); level.print() }
function goLeft () { bunny.move(-1, 0); level.print() }
function goRight () { bunny.move(1, 0); level.print() }
function goUp () { bunny.move(0, -1); level.print() }
function canGoDown () { return !level.isWall(bunny.x, bunny.y + 1) }
function canGoLeft () { return !level.isWall(bunny.x - 1, bunny.y) }
function canGoRight () { return !level.isWall(bunny.x + 1, bunny.y) }
function canGoUp () { return !level.isWall(bunny.x, bunny.y - 1) }
function isCarrotLeft () {
  for (var i = 1; i < 10; i = i + 1) {
    if (level.isCarrot(bunny.x - i, bunny.y)) return true
  }

  return false
}
function isCarrotDown () {
  for (var i = 1; i < 10; i = i + 1) {
    if (level.isCarrot(bunny.x, bunny.y + i)) return true
  }

  return false
}
function isCarrotRight () {
  for (var i = 1; i < 10; i = i + 1) {
    if (level.isCarrot(bunny.x + i, bunny.y)) return true
  }

  return false
}
function isCarrotUp () {
  for (var i = 1; i < 10; i = i + 1) {
    if (level.isCarrot(bunny.x, bunny.y - i)) return true
  }

  return false
}

function goBunny () {
  if (isCarrotLeft() && canGoLeft()) goLeft()
  else if (isCarrotRight() && canGoRight()) goRight()
  else if (isCarrotUp() && canGoUp()) goUp()
  else if (isCarrotDown() && canGoDown()) goDown()
  else if (canGoLeft()) goLeft()
  else if (canGoRight()) goRight()
  else if (canGoUp()) goUp()
  else if (canGoDown()) goDown()
}

repl.context = Object.assign(repl.context, level, {
  goDown,
  goLeft,
  goRight,
  goUp,
  canGoDown,
  canGoLeft,
  canGoRight,
  canGoUp,
  isCarrotDown,
  isCarrotLeft,
  isCarrotRight,
  isCarrotUp,

  goBunny
})
