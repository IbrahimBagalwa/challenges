const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
const dayjs = require('dayjs')
dayjs.extend(utc)
dayjs.extend(timezone)
const zone = dayjs.tz.guess()

const date = new Date()
const americ = dayjs.tz('2024-02-08T21:04:06.369Z', 'America/Toronto')
console.log(
  americ.format('DD/MM/YYYY hh:mm:ss'),
  '++++++++++++++++toronto++++++++++++++++++'
)

const rwanda = dayjs(date).tz(zone)

console.log(rwanda.format('2024-02-08T21:04:06.369Z'), '+++++rwanda++++++')

const berlin = dayjs.tz('2024-02-08T21:04:06.369Z').tz('Europe/Berlin')
console.log(berlin.format('DD/MM/YYYY hh:mm:ss'), '+++++berlin++++++')
