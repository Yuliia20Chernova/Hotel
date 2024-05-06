let btn = document.getElementById('order');
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

               // Alert the user
        alert('Task added successfully');


        console.log(data);
    })
    .catch( function(err){

              // Alert the user
        alert('An error happend, please try again later');

        console.log(err);
    })
    
});

