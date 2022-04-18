const person = {
  fsname: 'David',
  lsname: 'Maene',
  birthDay: '18-04',
}
const bithDayToYou = (date) => {
  const { birthDay, lsname, fsname } = person
  const now = new Date().toLocaleDateString()
  let sub = now.substring(4, 0)
  if (date === sub) {
    console.log(`
        🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂
                  HAPPY BIRTH DAY
                ${fsname}-${lsname}
        🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂
        `)
  } else {
    console.log(`😃😃😃😃😃😃 Wait for your day 😃😃😃😃😃😃`)
  }
}
bithDayToYou('4/18')
