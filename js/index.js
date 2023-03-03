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

//задание с чекбоксом
    if (yesName.checked){
        document.querySelector('.chat-name').innerHTML = nameClientNew;
    } 
    if (noName.checked){
        nameClientNew = nameClientNew.replace(nameClientNew, "***");
        document.querySelector('.chat-name').innerHTML = nameClientNew;
    } 


//задание с аватаром
    let avatarPhoto = avatar.value;
    switch(Math.random() * 6|0){
        case 0: 
    }
//задание со спамом
    let comment1= comment.value;
    let commentNew = comment1.replace(/viagra|XXX/gi, "***");
    

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
console.log(deleteTags(str));



