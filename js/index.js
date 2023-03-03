const client = document.getElementById('name');
const avatar = document.getElementById('avatar');
const comment = document.getElementById('comment');
let now = new Date();
const chat = document.querySelector('.chatAll');
const yesName = document.querySelector('#yesName');
const noName = document.querySelector('#noName');

function clickMe(){
    event.preventDefault();
//задание с именем пользователя
    let nameClient = client.value;
    let nameClient1 = nameClient.trim(nameClient);
    let nameString = nameClient1.toLowerCase();
    let firstCharacter = nameString[0];
    let firstCharacterUpp = firstCharacter.toUpperCase();
    let allText = nameString.slice(1);
    let nameClientNew = firstCharacterUpp + allText;
  
    if (client.value === " "){
        nameClientNew.textContent = "username";
        document.querySelector('.chat-name').innerHTML = nameClientNew;
    }
//задание с чекбоксом
    if (yesName.checked){
        document.querySelector('.chat-name').innerHTML = nameClientNew;
    } 
    if (noName.checked){
        nameClientNew = nameClientNew.replace(nameClientNew, "***");
        document.querySelector('.chat-name').innerHTML = nameClientNew;
    } 
    
console.log(nameClientNew);

//задание с аватаром
    let avatarPhoto = avatar.value;



//задание со спамом
    let comment1= comment.value;
    let commentNew = comment1.replace(/viagra|XXX/gi, "***");
    
    rand_photo();
    document.querySelector('#img').src = avatarPhoto;
    document.querySelector('.chat-text').innerHTML = commentNew;
    document.querySelector('.time').innerHTML = now;
//черта после добавления комментария
    chat.style.cssText = "border-bottom: 2px dashed lightblue";
}

//задание под звездочкой week 13


//задание под звездочкой week 12
let str = 'Hello!<br>Welcome to the study JavaScript!<hr><p>Some more content here</p><img src="">';
function deleteTags(str) {
    let regex = /( |<([^>]+)>)/ig,
    result = str.replace(regex, "");
    return result;
}
//console.log(deleteTags(str));
function rand_photo(){
  document.getElementById('avatar').value = "";
switch(Math.random() * 6|0){
    case 0: document.querySelector('#img').src = "img/flower.jpg"; break;
    case 1: document.querySelector('#img').src = "img/horizon.jpeg"; break;
    case 2: document.querySelector('#img').src = "img/man.jpeg"; break;
    case 3: document.querySelector('#img').src = "img/stone.jpg"; break;
    case 4: document.querySelector('#img').src = "img/woman.jpg"; break;
    case 5: document.querySelector('#img').src = "img/silhouette.jpg"; break;
}
}