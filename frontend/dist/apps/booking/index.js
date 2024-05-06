let btn = document.getElementById('add_booking');
let room = document.getElementById('room_name');
let price = document.getElementById('price');
let desc = document.getElementById('description');

btn.addEventListener('click', function(){

    let data ={
        room: room.value,
        price: price.value,
        description: desc.value
    }

    enableDisableInputs( true )


    fetch('/booking',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },

        body: JSON.stringify( data )
    })
    .then( function(res){
        return res.json();
    })
    .then( function(data){

        enableDisableInputs( false )


        // Empty all inouts
        room.value = '';
        price.value = '';
        desc.value = '';

        // Focus the first input
        title.focus();

        // Alert the user
        alert('Order completed');


        console.log(data);
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
    btn.disabled = value;
    room.disabled = value;
    price.disabled = value;
    desc.disabled = value;
}


let arr = [1,2,3,4];