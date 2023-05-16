const given = [{ "id": 1, "name": "John" }, { "id": 2, "name": "Jane" }, { "id": 1, "name": "John" }, { "id": 4, "name": "Bob" }]

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


console.log(result)