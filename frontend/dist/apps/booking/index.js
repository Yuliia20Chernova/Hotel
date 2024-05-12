let btn = document.getElementById('add_booking');
let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let email = document.getElementById('email');
let checkIn = document.getElementById('check_in');
let checkOut = document.getElementById('check_out');
let numberOfGuest = document.getElementById('people')
let room = document.getElementById('rooms');
let message = document.getElementById('message');
let phone = document.getElementById('phone');

btn.addEventListener('click', function(){

    let data ={
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        phone: phone.value,
        check_in: checkIn.value,
        check_out: checkOut.value,
        number_of_guests: numberOfGuest.value,
        room: room.value,
        message: message.value
        
    }

    enableDisableInputs( true )


    fetch('http://localhost:3000/booking/add',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify( data )
    })
    .then( function(res){
        return res.json();
    })
    .then( function(data){

        enableDisableInputs( false )


        // Empty all inouts
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        checkIn.value = '';
        checkOut.value = '';
        numberOfGuest.value = '';
        message.value = '';
        phone.value = ''

        // Focus the first input
        firstName.focus();

        // Alert the user
        alert('Order completed');


        // console.log(data);
    })
    .catch( function(err){

        enableDisableInputs( false )


        // Alert the user
        alert('An error happend, please try again later');

        console.log(err);
    })
    
});

function enableDisableInputs( value )
{
    firstName.disabled = value;
    lastName.disabled = value;
    email.disabled = value;
    numberOfGuest.disabled = value;
    checkIn.disabled = value;
    checkOut.disabled = value;
    room.disabled = value;
    message.disabled = value;
    phone.disabled = value
}

let arr = [1,2,3,4,5,6,7,8,9];