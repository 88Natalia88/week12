
function clickMe(){
    event.preventDefault();
    let nameClient = document.getElementById('name').value;
    let nameClient1 = nameClient.trim(nameClient);
    let nameString = nameClient1.toLowerCase();
    let firstCharacter = nameString[0];
    let firstCharacterUpp = firstCharacter.toUpperCase();
    let allText = nameString.slice(1);
    let nameClientNew = firstCharacterUpp + allText;

    let avatar = document.getElementById('avatar').value;
    let comment = document.getElementById('comment').value;
    let commentNew = comment.replace(/viagra|XXX/gi, "***");

    document.querySelector('.chat-name').innerHTML = nameClientNew;
    document.querySelector('#img').src = avatar;
    document.querySelector('.chat-text').innerHTML = commentNew;
    

    let chat = document.querySelector('.chat');
    chat.style.cssText = "border-bottom: 2px dashed lightblue";
  
    console.log(nameClientNew);
    console.log(avatar);
    console.log(commentNew);
}

