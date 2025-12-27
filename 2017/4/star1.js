const fs = require('fs')
const path = require('path')
const array = fs.readFileSync(path.join(__dirname, './input.txt')).toString().split('\n')

let numberOfValidPassphrases = 0
for(i in array) {
  const line = array[i].split(' ')
  
  if(new Set(line).size === line.length) {
    numberOfValidPassphrases++
  }
}

// Subtract 1 cause we have a bogus empty line at the bottom of the input
console.log(`There are ${numberOfValidPassphrases - 1} valid passphrases`)
