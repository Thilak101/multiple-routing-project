const router = require("express").Router()
const albums = require("../data/albums")

router.get("/", (req, res) => {
    res.json(albums)
})

module.exports = router