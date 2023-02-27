
function clickMe(){
    event.preventDefault();
    let nameClient = document.getElementById('name').value;
    let avatar = document.getElementById('avatar').value;
    let comment = document.getElementById('comment').value;

    let spams = ["viagra", "XXX"];
    for( let i = 0; i < spams.length; i++ ) {
      while (comment.indexOf(spams[i]) != -1){
      comment = comment.replace(spams[i], '***');
      }
    }

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

