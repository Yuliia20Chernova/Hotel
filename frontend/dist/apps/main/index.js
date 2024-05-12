let btn = document.getElementById('send_message');
let user = document.getElementById('user_name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

btn.addEventListener('click', function(){

    let data ={
        user_name: user.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    // enableDisableInputs( true )


    fetch('http://localhost:3000/main/contact',{
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
        alert('Message sended successfully');

        enableDisableInputs( false )

        user.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';

        user.focus();

        console.log(data);
    })
    .catch( function(err){

              // Alert the user
        alert('An error happend, please try again later');

        enableDisableInputs( false )

        console.log(err);
    })
    
});

function enableDisableInputs( value )
{
    user.disabled = value;
    email.disabled = value;
    subject.disabled = value;
    message.disabled = value;
    
}

let arr = [1,2,3,4];

