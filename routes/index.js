const router = require("express").Router()
const userRoute = require("./users")
const todosRoute = require("./todos")
const postRoute = require("./post")
const commentsRoute = require("./comments")

router.use("/users", userRoute)
router.use("/todos", todosRoute)
router.use("/post", postRoute)
router.use("/comments", commentsRoute)




module.exports = router
