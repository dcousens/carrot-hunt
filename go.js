let loadLevel = require('./game')
let repl = require('repl').start('bunny> ')
let level = loadLevel('level2.txt')
let bunny = level.bunny

let went
function goDown () { bunny.move(0, 1); level.print(); went = 'down' }
function goLeft () { bunny.move(-1, 0); level.print(); went = 'left' }
function goRight () { bunny.move(1, 0); level.print(); went = 'right' }
function goUp () { bunny.move(0, -1); level.print(); went = 'up' }
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
  if (isCarrotLeft() && canGoLeft() && went !== 'right') goLeft()
  else if (isCarrotRight() && canGoRight() && went !== 'left') goRight()
  else if (isCarrotUp() && canGoUp() && went !== 'down') goUp()
  else if (isCarrotDown() && canGoDown() && went !== 'up') goDown()
  else if (canGoLeft() && went !== 'right') goLeft()
  else if (canGoRight() && went !== 'left') goRight()
  else if (canGoUp() && went !== 'down') goUp()
  else if (canGoDown() && went !== 'up') goDown()
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
