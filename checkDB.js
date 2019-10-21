function checkConnectDB() {
    return 'Database connection established...';
}

function checkSave(inputs, outputs) {
    let db = [{ inputs, outputs }]
    return db
}

function checkDisplay() {
    let db = [{ Date: '10/16/19 2:30p', inputs: [2, 4, 3, 5], outputs: 1.33 }, { Date: '10/3/19 1:13a', inputs: [32, 42, 12, 54], outputs: 31.37 }]
    let dates = []
    let inputs = []
    let outputs = []
    db.forEach(listing => {
        dates.push(listing.Date)
        inputs.push(listing.inputs.toString())
        outputs.push(listing.outputs.toString())
    })
    return [dates, inputs, outputs]
}

function checkDBFunction(datas) {
    let db = [{ Date: '10/16/19 2:30p', inputs: [2, 4, 3, 5], outputs: 1.33 }, { Date: '10/3/19 1:13a', inputs: [32, 42, 12, 54], outputs: 31.37 }]
    datas.forEach(data => {
        db.push(data)
    })
    return db.length
}

module.exports.checkConnectDB = checkConnectDB
module.exports.checkSave = checkSave
module.exports.checkDisplay = checkDisplay
module.exports.checkDBFunction = checkDBFunction