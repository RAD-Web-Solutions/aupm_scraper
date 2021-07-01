const jsdom = require('jsdom')
const { JSDOM } = jsdom
const fetch = require('node-fetch')

module.exports = {
    scraper,
}

// Async function that gets the DOM and pulls data based on selections
async function scraper() {
        const response = await fetch('https://www.kitco.com/market/')
        const text = await response.text()
        const dom = await new JSDOM(text)
        const AUdate = (dom.window.document.getElementById('AU-date').textContent)
        const AUtime = (dom.window.document.getElementById('AU-time').textContent)
        const AUbid = (dom.window.document.getElementById('AU-bid').textContent)
        const AGdate = (dom.window.document.getElementById('AG-date').textContent)
        const AGtime = (dom.window.document.getElementById('AG-time').textContent)
        const AGbid = (dom.window.document.getElementById('AG-bid').textContent)
        const PTdate = (dom.window.document.getElementById('PT-date').textContent)
        const PTtime = (dom.window.document.getElementById('PT-time').textContent)
        const PTbid = (dom.window.document.getElementById('PT-bid').textContent)
        const PDdate = (dom.window.document.getElementById('PD-date').textContent)
        const PDtime = (dom.window.document.getElementById('PD-time').textContent)
        const PDbid = (dom.window.document.getElementById('PD-bid').textContent)
        const RHdate = (dom.window.document.getElementById('RH-date').textContent)
        const RHtime = (dom.window.document.getElementById('RH-time').textContent)
        const RHbid = (dom.window.document.getElementById('RH-bid').textContent)
        const result = {
            'AUdate':AUdate,
            'AUtime':AUtime,
            'AUbid':AUbid,
            'AGdate':AGdate,
            'AGtime':AGtime,
            'AGbid':AGbid,
            'PTdate':PTdate,
            'PTtime':PTtime,
            'PTbid':PTbid,
            'PTdate':PDdate,
            'PDtime':PDtime,
            'PDbid':PDbid,
            'RHdate':RHdate,
            'RHtime':RHtime,
            'RHbid':RHbid
        }
        return (result)

        console.log(result)
    

}
