let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let port = process.eventNames.PORT || 3000

app.use(bodyParser.json())

var materials = [
    {
        name: "Dachowki",
        cost: "50",
        id:1
    },
    {
        name: "Panele",
        cost: "70",
        id:2
    },
    {
        name: "Styropian",
        cost: "40",
        id:3
    }
];

let materialRoutes = require('./routes/materialRoutes.js')
materialRoutes(app, materials)



var server = app.listen(port, function(){

    var host = server.address().address;
    var port2 = server.address().port;

    console.log('Running on host: ' +host + 'port: ' + port2)
});

