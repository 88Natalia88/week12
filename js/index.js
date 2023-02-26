
function clickMe(){
    event.preventDefault();
    let nameClient = document.getElementById('name').value;
    let avatar = document.getElementById('avatar').value;
    let comment = document.getElementById('comment').value;
    
    document.querySelector('.chat-name').innerHTML = nameClient;
    document.querySelector('#img').src = avatar;
    document.querySelector('.chat-text').innerHTML = comment;


    console.log(nameClient);
    console.log(avatar);
    console.log(comment);
}



