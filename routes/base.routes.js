const express = require("express")

const router = express.Router()

router.get('/', (request, response) => {
    console.log(request.session)
    console.log(request.session.id)
    request.session.visited = true;
    response.json("Hello world")
})

module.exports = router;