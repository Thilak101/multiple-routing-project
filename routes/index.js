const router = require("express").Router()
const userRoute = require("./users")
const todosRoute = require("./todos")
const postRoute = require("./post")
const commentsRoute = require("./comments")
const albumsRoute = require("./albums")
const photosRoute = require("./photos")

router.use("/users", userRoute)
router.use("/todos", todosRoute)
router.use("/post", postRoute)
router.use("/comments", commentsRoute)
router.use("/albums", albumsRoute)
router.use("/photos", photosRoute)




module.exports = router
