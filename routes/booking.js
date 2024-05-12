const router = require('express').Router();
const {app} = require('apico/server.js');
const mysql = require ('mysql2');



router.post('/add', function(req, res){
    let {first_name, last_name, email, phone, check_in, check_out, number_of_guests, room, message} =  req.body;
   
// let firstName = req.body.firstName;
// let lastName = req.body.lastName;
// let email = req.body.email;
// let phone = req.body.phone;
// let numberOfGuest = req.body.numberOfGuest;
// let checkIn = req.body.checkIn;
// let checkOut = req.body.checkOut;
// let room = req.body.room;
// let message = req.body.message;


    let pool = mysql.createPool({
        host:'localhost',
        user: 'root',
        password: '102030Qaz',
        database: 'hotel_2'
    });


    pool.query(`insert into booking( first_name, last_name, email, phone, check_in, check_out, number_of_guests, room, message)  values( ?, ?, ?, ?, ?, ?, ?, ?, ?) `,[first_name, last_name, email, phone, check_in, check_out, number_of_guests, room, message], function( result ){
        pool.end();

        res.json({mesage: "Done",  the_result: result });

    });
});


app.use ('/booking', router);



