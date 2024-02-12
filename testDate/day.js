const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
const dayjs = require('dayjs')
dayjs.extend(utc)
dayjs.extend(timezone)
const zone = dayjs.tz.guess() //

const formatDate = 'DD/MM/YYYY hh:mm:ss'
const date = new Date()

const americ = dayjs.tz(date, 'America/Toronto')
console.log(americ.format(formatDate))

const rwanda = dayjs(date).tz(zone)
console.log(rwanda.format(formatDate), '+++++rwanda++++++')

const berlin = dayjs.tz(date).tz('Europe/Berlin')
console.log(berlin.format(formatDate), '+++++berlin++++++')

const planDate = new Date()
console.log(planDate, '++++++++++++++++++')

// console.log(
//   dayjs('2024-02-07T22:00:00.000Z').format('DD/MM/YYYY hh:mm:ss'),
//   '==================='
// )
// const { find } = require('geo-tz')
// const timeZone = find(12.826174, 45.036933)
// console.log(timeZone)
