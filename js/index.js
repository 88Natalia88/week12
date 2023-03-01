
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

    let now = new Date();


    document.querySelector('.chat-name').innerHTML = nameClientNew;
    document.querySelector('#img').src = avatar;
    document.querySelector('.chat-text').innerHTML = commentNew;
    document.querySelector('.time').innerHTML = now;

    let chat = document.querySelector('.chatAll');
    chat.style.cssText = "border-bottom: 2px dashed lightblue";
  
    console.log(nameClientNew);
    console.log(avatar);
    console.log(commentNew);
}


//задание под звездочкой
let str = 'Hello!<br>Welcome to the study JavaScript!<hr><p>Some more content here</p><img src="">';
function deleteTags(str) {
    let regex = /( |<([^>]+)>)/ig,
    result = str.replace(regex, "");
    return result;
}
console.log(deleteTags(str));