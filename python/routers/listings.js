const express = require('express')
const router = express.Router()
const listingModel = require('../models/listings')


router.get('/', async (req, res, next) => {
    try {
        res.json(await listingModel.findAll())
    }
    catch (err) {
        next(err)
    }
})


router.post('/', async (req, res, next) => {
    try {
        const payload = req.body
        res.json(await listingModel.addListing(payload))
    }
    catch (err) {
        next(err)
    }
})

module.exports = router