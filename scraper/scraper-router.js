const router = require('express').Router()

const Scraper = require('./scraper-model')

// GET precious metals data
router.get('/', (req, res) => {
    Scraper.find()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
    // Scraper.scraper()
    //   .then((data) => {
    //       console.log(data)
    //       res.status(200).json(data)
    //   })
    //   .catch((err) => {
    //       res.status(500).json({ message: err.message })
    //   })
})

module.exports = router