const bithDayToYou = (date, fsname, lsname) => {
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
  // -------- Ibrahim Bagalwa ---------
}
bithDayToYou('4/18', 'David', 'Maene')
