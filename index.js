const server = require('./api/server')
const cron = require('node-cron')
const scraperTwo = require('./scraper/scraper-app')

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})

cron.schedule('0,15,30,45 9-17 * * Mon,Tue,Wed,Thursday,Fri', function(){
    scraperTwo.scraperTwo()
}, {
        scheduled: true,
        timezone: "America/New_York"
    })