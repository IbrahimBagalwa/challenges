const formatter = Intl.DateTimeFormat('en-AU', {
  timeZone: 'Europe/Berlin',
  timeStyle: 'long',
  dateStyle: 'short',
})

const date = new Date()
console.log(formatter.format(date), '========berlin==========')

console.log(date, '+++++++++++++')
const { timeZone } = Intl.DateTimeFormat().resolvedOptions()
const formatter2 = Intl.DateTimeFormat('en-AU', {
  timeZone: timeZone,
  timeStyle: 'long',
  dateStyle: 'short',
})

console.log(formatter2.format(date), '========rwanda==========')

const formatter4 = Intl.DateTimeFormat('en-AU', {
  timeZone: 'America/Toronto',
  timeStyle: 'long',
  dateStyle: 'short',
})

console.log(formatter4.format(date), '========toronto============')
