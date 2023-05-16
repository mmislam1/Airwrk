import express from "express"

const app = express()


app.use(express.json())

app.post('/', (req, res) => {
    const given = req.body
    var mapItem = new Map()
    var result = []

    given.map((item) => {


        if (!mapItem.has(item.id)) {
            mapItem.set(item.id, item)

            const newItem = {
                id: mapItem.size,
                name: item.name
            }

            result.push(newItem)
        }
    })

    res.send(result)
})