let fs = require('fs')

function load (fileName) {
  let level = fs.readFileSync(fileName).toString('utf8')
  let rows = level.split('\n').map(x => x.split(''))

  let bunny
  let carrots = {}
  let walls = {}

  rows.forEach((row, y) => {
    row.forEach((c, x) => {
      if (c === 'B') bunny = { x, y }
      if (c === 'C') carrots[`${x}:${y}`] = true
      if (c === '|') walls[`${x}:${y}`] = true
    })
  })

  if (!bunny) throw new TypeError('Bad bunny')

  function isCarrot (x, y) { return carrots[`${x}:${y}`] }
  function isBunny (x, y) { return bunny.x === x && bunny.y === y }
  function isWall (x, y) { return walls[`${x}:${y}`] }

  function move (x, y) {
    if (isWall(bunny.x + x, bunny.y + y)) return
    bunny.x += x
    bunny.y += y
    if (isCarrot(bunny.x, bunny.y)) {
      delete carrots[`${bunny.x}:${bunny.y}`]
    }
  }

  function print () {
    rows.forEach((row, y) => {
      let s = ''
      row.forEach((_, x) => {
        if (isBunny(x, y)) s += 'B'
        else if (isCarrot(x, y)) s += ''
        else if (isWall(x, y)) s += '|'
        else s += ' '
      })
      console.log(s)
    })
  }

  return {
    isCarrot,
    isWall,
    bunny: { move },
    print
  }
}

module.exports = load
