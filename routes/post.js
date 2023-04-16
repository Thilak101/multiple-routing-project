const router = require("express").Router()
const post = require("../data/post")

router.get("/", (req, res) => {
    res.json(post)
})

module.exports = router