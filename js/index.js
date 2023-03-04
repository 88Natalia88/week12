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

    //каждое слово с заглавной буквы через пробел
    let nameClientNew = nameClient1.replace(/(^|\s)\S/g, function(a) {
        return a.toUpperCase()});
    
    //первая буква заглавная, остальные маленькие
    /*let nameString = nameClient1.toLowerCase();
    let firstCharacter = nameString[0];
    let firstCharacterUpp = firstCharacter.toUpperCase();
    let allText = nameString.slice(1);
    let nameClientNew = firstCharacterUpp + allText;*/

  //пустое поле = username
  if (yesName.checked && document.getElementById('name').value == ""){
    document.querySelector('.chat-name').textContent = "username";
} else                    //задание с чекбоксом
    if (yesName.checked){
        document.querySelector('.chat-name').innerHTML = nameClientNew;
    } 
    else {
        nameClientNew = nameClientNew.replace(nameClientNew, "***");
        document.querySelector('.chat-name').innerHTML = nameClientNew;
    } 
    
console.log(nameClientNew);

//задание с аватаром
    let avatarPhoto = avatar.value;
    if(document.getElementById('avatar').value == ""){
let imgs = ['img/flower.jpg', 
'img/horizon.jpeg',
'img/man.jpeg',
'img/stone.jpg',
'img/woman.jpg',
'img/silhouette.jpg'];
document.querySelector('#img').src = imgs[Math.floor(Math.random()*imgs.length)];
} else {
    document.querySelector('#img').src = avatarPhoto;
}

//задание со спамом
    let comment1= comment.value;
    let commentNew = comment1.replace(/viagra|XXX/gi, "***");
    
    document.querySelector('.chat-text').innerHTML = commentNew;
    document.querySelector('.time').innerHTML = now.toUTCString();
//черта после добавления комментария
    chat.style.cssText = "border-bottom: 2px dashed lightblue";
}

//задание под звездочкой week 13
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда',
 'Четверг', 'Пятница', 'Суббота'];

function formatDate(date = new Date) {
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    let D = date.getDate();
    let d = days[date.getDay()];
    let h = date.getHours();
    let m = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // форматирование
    Y = Y.toString().slice(-2);
    M = M < 10 ? '0' + M : M;
    D = D < 10 ? '0' + D : D;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
  
    if (diffSec < 1) {
      return 'прямо сейчас';
    } else if (diffMin < 1) {
      return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
      return `${diffMin} мин. назад`
    } else {
      return `${D}.${M}.${Y} ${h}:${m} (${d})`
    }
  }
 console.log(formatDate());

//задание под звездочкой week 12
let str = 'Hello!<br>Welcome to the study JavaScript!<hr><p>Some more content here</p><img src="">';
function deleteTags(str) {
    let regex = /( |<([^>]+)>)/ig,
    result = str.replace(regex, " ");
    return result;
}
//console.log(deleteTags(str));
