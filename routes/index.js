var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


var url = 'mongodb://192.168.0.7:27017/test';
function a () {
    MongoClient.connect('mongodb://192.168.0.7:27017/test', function(err, db) {
        if (err) {
            throw err;
        }
        db.collection('stats2017').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    });
}
function getTeams(callback) {
    MongoClient.connect('mongodb://192.168.0.7:27017/test', function(err, db) {
        if (err) {
            throw err;
        }
        db.collection('teams2017').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            callback(teams);
            console.log(result);
        });
    });
}
function getCircuits(callback) {
    MongoClient.connect('mongodb://192.168.0.7:27017/test', function(err, db) {
        if (err) {
            throw err;
        }
        db.collection('circuits2017').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            callback(teams);
            console.log(result);
        });
    });
}

function getDrivers (callback) {

// Connection URL

// Use connect method to connect to the server
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected succesfully to server");
        var drivers = db.collection("drivers2017");

        drivers.find({}).toArray((err2, drivers)=>{
            if (err2) throw  err2;
            callback(drivers);
        })
    });
}


router.get('/teams2017', function(req, res){
    getTeams((teams) =>{
        res.json(teams);
    });
});

router.get('/drivers2017', function(req, res){
    getDrivers((drivers) =>{
        res.json(drivers);
    });
});
router.get('/circuits2017', function(req, res){
    getDrivers((drivers) =>{
        res.json(drivers);
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  a();
  res.render('index', { title: 'Express' });
});

module.exports = router;
