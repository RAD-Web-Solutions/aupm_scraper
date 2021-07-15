const jsdom = require('jsdom')
const { JSDOM } = jsdom
const fetch = require('node-fetch')
const db = require("../database/dbConfig")

module.exports = {
    scraper,
    find,
}

// Async function that gets the DOM and pulls data based on selections
async function scraper() {
        const response = await fetch('https://www.kitco.com/market/')
        const text = await response.text()
        const dom = await new JSDOM(text)
        const AUdate = (dom.window.document.getElementById('AU-date').textContent)
        const AUtime = (dom.window.document.getElementById('AU-time').textContent)
        const AUbid = (dom.window.document.getElementById('AU-bid').textContent)
        const AUask = (dom.window.document.getElementById('AU-ask').textContent)
        const AGdate = (dom.window.document.getElementById('AG-date').textContent)
        const AGtime = (dom.window.document.getElementById('AG-time').textContent)
        const AGbid = (dom.window.document.getElementById('AG-bid').textContent)
        const AGask = (dom.window.document.getElementById('AG-ask').textContent)
        const PTdate = (dom.window.document.getElementById('PT-date').textContent)
        const PTtime = (dom.window.document.getElementById('PT-time').textContent)
        const PTbid = (dom.window.document.getElementById('PT-bid').textContent)
        const PTask = (dom.window.document.getElementById('PT-ask').textContent)
        const PDdate = (dom.window.document.getElementById('PD-date').textContent)
        const PDtime = (dom.window.document.getElementById('PD-time').textContent)
        const PDbid = (dom.window.document.getElementById('PD-bid').textContent)
        const PDask = (dom.window.document.getElementById('PD-ask').textContent)
        const RHdate = (dom.window.document.getElementById('RH-date').textContent)
        const RHtime = (dom.window.document.getElementById('RH-time').textContent)
        const RHbid = (dom.window.document.getElementById('RH-bid').textContent)
        const RHask = (dom.window.document.getElementById('RH-ask').textContent)
        const result = {
            'AUdate':AUdate,
            'AUtime':AUtime,
            'AUbid':AUbid,
            'AUask':AUask,
            'AGdate':AGdate,
            'AGtime':AGtime,
            'AGbid':AGbid,
            'AGask':AGask,
            'PTdate':PTdate,
            'PTtime':PTtime,
            'PTbid':PTbid,
            'PTask':PTask,
            'PDdate':PDdate,
            'PDtime':PDtime,
            'PDbid':PDbid,
            'PDask':PDask,
            'RHdate':RHdate,
            'RHtime':RHtime,
            'RHbid':RHbid,
            'RHask':RHask
        }
        return (result)

        console.log(result)
 }

 function find() {
     let value = db("metals").where('id', 1).select('AUdate', 'AUtime', 'AUbid', 'AUask', 'AGdate', 'AGtime', 'AGbid', 'AGask', 'PTdate', 'PTtime', 'PTbid', 'PTask', 'PDdate', 'PDtime', 'PDbid', 'PDask', 'RHdate', 'RHtime', 'RHbid', 'RHask')
     return value.first()

 }

