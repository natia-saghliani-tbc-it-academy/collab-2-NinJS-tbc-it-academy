// const palyersAddElement = document.querySelector('.players-section-add') {

// }

let canStart = false;
let mafiaPlayers = [];

function playersAdd() {
  const playersInputElement = document.querySelector("#players-input");
  let playerUserName = playersInputElement.value;

  if (playerUserName) {
    console.log("playerUserName: ", playerUserName);
    mafiaPlayers.push({
      id: mafiaPlayers.length + 1,
      name: playerUserName,
      alive: true,
      role: "",
      votes: 0,
      isChosenbyBafia: false,
      isChosenByDoctor: false,
    });

    let playersNewUser = document.createElement('div')

    // let playersNewUserHtml =  playersNewUser.innerHTML = `<div> ${playerUserName} </div>`
    let playersNewUsersDisplay = document.querySelector('.players-section-users-display');

    // console.log("playersNewUser: ", playersNewUser)
    playersNewUsersDisplay.appendChild(playersNewUser);

    playersGameStart() 
    // clearInput()
    console.log(mafiaPlayers)
  }
}

function playersClearAll()  {
    mafiaPlayers = [];
    canStart = false;
    console.log("mafiaPlayers CLEAR: ", mafiaPlayers)
}

function playersGameStart() {
    if(mafiaPlayers.length > 4 && mafiaPlayers.length < 13) {
        canStart = true;
        console.log("canStart: ", canStart)
    } else {
        canStart = false;
        console.log("canStart: ", canStart)
    }
}

// players-section-start-game-btn

// function clearInput() {
//     playersInputElement = ""
// }

// getElementById("myText").value = "Johnny Bravo";

/*  

const textareaElement = document.querySelector('#user-textarea');
const charCountElement = document.querySelector('.char-count');
const submitBtnElement = document.querySelector('.submit-btn');

textareaElement.addEventListener('input', () => {
    let textLength = textareaElement.value.length

    charCountElement.textContent = `${textLength}/100`

    if(textLength > 100) {
        textareaElement.classList.add('exceeded');
        charCountElement.classList.add('exceeded');
        submitBtnElement.disabled = true;
    } else {
        textareaElement.classList.remove('exceeded');
        charCountElement.classList.remove('exceeded');
        submitBtnElement.disabled = false;
    }
});


function submitText() {
    textareaElement.value = '';
    charCountElement.textContent = '0/100';
    textareaElement.classList.remove('exceeded');
    charCountElement.classList.remove('exceeded');
}

*/
