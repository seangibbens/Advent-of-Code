function calculatePos(direction, coordinate) {
  if(direction%4 === 1) {
    return right(coordinate, 1)
  }
  if(direction%4 === 2) {
    return up(coordinate, 1)
  }
  if(direction%4 === 3) {
    return left(coordinate, 1)
  }
  if(direction%4 === 0) {
    return down(coordinate, 1)
  }
}

function right(coordinate, distance) {
  return { 
    x: coordinate.x + distance,
    y: coordinate.y
  }
}

function up(coordinate, distance) {
  return { 
    x: coordinate.x,
    y: coordinate.y + distance
  }
}

function left(coordinate, distance) {
  return { 
    x: coordinate.x - distance,
    y: coordinate.y
  }
}

function down(coordinate, distance) {
  return { 
    x: coordinate.x,
    y: coordinate.y - distance
  }
}

const input = 325489

let bingo, pos = { x: 0, y: 0 }, direction = 1, distance = 1, number = 1

while(number < input) {
  for(let j=0; j<distance; j++) {
    pos = calculatePos(direction, pos)
    number++
    if(number === input) {
      bingo = pos
    }
  }
  direction++
  for(let k=0; k<distance; k++) {
    pos = calculatePos(direction, pos)
    number++
    if(number === input) {
      bingo = pos
    }
  }
  direction++
  distance++
}

console.log('Manhattan distance')
console.log(Math.abs(bingo.x) + Math.abs(bingo.y))
