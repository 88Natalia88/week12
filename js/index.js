/*function capitalize(input) {
    input.value = input.value.replace(/( |^)[а-яёa-z]/g, function(u){ return u.toUpperCase(); }  );
  }
  
  document.getElementById('name').addEventListener('input', function(){
    capitalize(this);
  });*/
  
function clickMe(){
    event.preventDefault();
    let nameClient = document.getElementById('name').value;
    let avatar = document.getElementById('avatar').value;
    let comment = document.getElementById('comment').value;


    document.querySelector('.chat-name').innerHTML = nameClient;
    document.querySelector('#img').src = avatar;
    document.querySelector('.chat-text').innerHTML = comment;
    

    let chat = document.querySelector('.chat');
    let line = document.createElement('hr');
    line.innerHTML = `<hr>`;
    chat.append(line);
    


    console.log(nameClient);
    console.log(avatar);
    console.log(comment);
}