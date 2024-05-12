const router = require('express').Router();
const {app} = require('apico/server.js');
const mysql = require ('mysql2');

// router.get('/booking', function(req, res){
//     let pool = mysql.createPool({
//         host: 'localhost',
//         user:"root",
//         password:'102030Qaz',
//         database:'hotel_2'
//     });

//     pool.query(" select * from booking", function(error, results, fields){
//         res.json({message: 'All booking', data: results});
//         pool.end();
//     });
// });


// router.post('/rooms', function(req, res){
//     let pool = mysql.createPool({
//         host: 'localhost',
//         user:"root",
//         password:'102030Qaz',
//         database:'hotel_2'
//     });

//     pool.query(" select * from rooms", function(error, results, fields){
//         res.json({message: 'All rooms', data: results});
//         pool.end();
//     });
// });


router.post('/contact', function(req, res){

    let {user_name, email, subject, message} = req.body;

    let pool = mysql.createPool({
        host: 'localhost',
        user:"root",
        password:'102030Qaz',
        database:'hotel_2'
    });

   
        pool.query('insert into message (user_name, email, subject, message) values (?,?,?,?)', [user_name, email, subject, message], function( results){
        pool.end();
        res.json({message:"Ok", data: results});
        
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

