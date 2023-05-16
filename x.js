import express from "express"

const app = express()


app.use(express.json())

app.post('/', (req, res) => {
    const given = req.body
    var mapItem = new Map()
    var result = []

    given.map((item) => {
        if (!mapItem.has(item.name)) {
            mapItem.set(item.name, item)
            result.push(item)
        }
    })

    res.send(result)
})