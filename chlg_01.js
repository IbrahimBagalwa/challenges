function intialLetter(str) {
  let names = str.split(' ')
  return names[0].substring(0, 1) + names[1].substring(1, 0)
  // return names[0][0] + ''+ names[1][0] meme resultat avec le premier
}
console.log(intialLetter('Ibrahim Bagalwa'))

// meme solution
function decouper(str) {
  let name = str.split(' ')
  return name[0].charAt(0).toUpperCase() + '' + name[1].charAt(0).toUpperCase()
}
console.log(decouper('peter swedi'))

const median = (arr) => {
  let mid = Math.floor(arr.length / 2)
  console.log(arr.slice(0, mid))
  console.log(arr.slice(arr.length - mid, arr.length))
}

console.log(median([1, 2, 3, 4]))

function drawSpider(legSize, bodySize, mouth, eye) {
  const spiders = {
    leg: {
      1: '^ ^',
      2: '/\\ /\\',
      3: '/╲ ╱\\',
      4: '╱╲ ╱╲',
    },
    body: {
      1: '( )',
      2: '(( ))',
      3: '((( )))',
    },
  }
  const leg = spiders.leg[legSize].split(' ')
  const bod = spiders.body[bodySize].split(' ')
  const ey = Math.pow(eye.length * 2, bodySize)
  let eyA = []

  for (let i = 1; i <= ey; i++) {
    eyA.push(eye)
  }
  const mid = Math.floor(eyA.length / 2)
  const firstEye = eyA.slice(0, mid)
  const lastEye = eyA.slice(eyA.length - mid, eyA.length)

  return `${leg[0]}${bod[0]}${firstEye.join('')}${mouth}${lastEye.join('')}${
    bod[1]
  }${leg[1]}`
}
