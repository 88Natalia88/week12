


function clickMe(){
    event.preventDefault();
//задание с именем пользователя
    let nameClient = document.getElementById('name').value;
    let nameClient1 = nameClient.trim(nameClient);
    let nameString = nameClient1.toLowerCase();
    let firstCharacter = nameString[0];
    let firstCharacterUpp = firstCharacter.toUpperCase();
    let allText = nameString.slice(1);
    let nameClientNew = firstCharacterUpp + allText;

//задание с чекбоксом
    const yesName = document.querySelector('#yesName');
    const noName = document.querySelector('#noName');

    if (yesName.checked){
        document.querySelector('.chat-name').innerHTML = nameClientNew;
    } 
    if (noName.checked){
        nameClientNew = nameClientNew.replace(nameClientNew, "***");
        document.querySelector('.chat-name').innerHTML = nameClientNew;
    } 


//задание с аватаром
    const avatar = document.getElementById('avatar').value;
    switch(Math.random() * 6|0){
        case 0: 
    }
//задание со спамом
    const comment = document.getElementById('comment').value;
    let commentNew = comment.replace(/viagra|XXX/gi, "***");
//задание с датой
    let now = new Date();


    document.querySelector('#img').src = avatar;
    document.querySelector('.chat-text').innerHTML = commentNew;
    document.querySelector('.time').innerHTML = now;
//черта после добавления комментария
    let chat = document.querySelector('.chatAll');
    chat.style.cssText = "border-bottom: 2px dashed lightblue";
  
    console.log(nameClientNew);
    console.log(avatar);
    console.log(commentNew);
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



