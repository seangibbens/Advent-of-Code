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

function calculateCoordinateValue(pos) {
  // Find values for 8 surrounding points
  const rightOne = megaMap[`${pos.x+1},${pos.y}`] || 0
  const rightOneUpOne = megaMap[`${pos.x+1},${pos.y+1}`] || 0
  const upOne = megaMap[`${pos.x},${pos.y+1}`] || 0
  const leftOneUpOne = megaMap[`${pos.x-1},${pos.y+1}`] || 0
  const leftOne = megaMap[`${pos.x-1},${pos.y}`] || 0
  const leftOneDownOne = megaMap[`${pos.x-1},${pos.y-1}`] || 0
  const downOne = megaMap[`${pos.x},${pos.y-1}`] || 0
  const rightOneDownOne = megaMap[`${pos.x+1},${pos.y-1}`] || 0

  const sum = rightOne + rightOneUpOne + upOne + leftOneUpOne + leftOne
    + leftOneDownOne + downOne + rightOneDownOne

  const megaMapKey = `${pos.x},${pos.y}`
  megaMap[megaMapKey] = sum

  if(sum > input && bingo === 0) {
    bingo = sum
  }
}

const iterations = 75, input = 325489

let bingo = 0, pos = { x: 0, y: 0 }, direction = 1, distance = 1, number = 1, megaMap = { '0,0': 1 }

while(number < iterations) {
  for(let j=0; j<distance; j++) {
    pos = calculatePos(direction, pos)
    calculateCoordinateValue(pos)
    number++
  }
  direction++
  for(let k=0; k<distance; k++) {
    pos = calculatePos(direction, pos)
    calculateCoordinateValue(pos)
    number++
  }
  direction++
  distance++
}

console.log('Our first value greater than the input is', bingo)
