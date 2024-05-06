const router = require('express').Router();
const {app} = require('apico/server.js');
const mysql = require ('mysql2');

router.post('/rooms', function(req, res){
    let pool = mysql.createPool({
        host: 'localhost',
        user:"root",
        password:'102030Qaz',
        database:'hotel'
    });

    pool.query(" select * from rooms", function(error, results, fields){
        res.json({message: 'All rooms', data: results});
        pool.end();
    });
});

app.use ('/main', router);

// router.post('/', function(req, res){
//         let pool = mysql.createPool({
//             host: 'localhost',
//             user:"root",
//             password:'102030Qaz',
//             database:'hotel'
//         });
    
//         pool.query(" select * from rooms", function(error, results, fields){
//             res.json({message: 'All rooms', data: results});
//             pool.end();
//         });
//     });

