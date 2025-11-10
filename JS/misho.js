let canStart = false;
let mafiaPlayers = [];
const playersStartGameElement = document.querySelector('.players-section-start-game-btn')

function playersAdd() {
    const playersInputElement = document.querySelector("#players-input");
    // const players-section-start-game-btn

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

    let playersNewUsersDisplay = document.querySelector(
      ".players-section-users-display"
    );

    const playersNewUser = document.createElement("div");
    playersNewUser.innerHTML = `
     <div> ${playerUserName} </div>
     `;

    playersNewUsersDisplay.appendChild(playersNewUser);

    playersGameStart();
    // clearInput();
    // console.log(mafiaPlayers);
  }
}

function playersClearAll() {
  mafiaPlayers = [];
  canStart = false;
//   console.log("mafiaPlayers CLEAR: ", mafiaPlayers);
}

function playersGameStart() {
    let playersStartGameCl = playersStartGameElement.classList
    console.log("playersStartGameCl: ", playersStartGameCl)
  if (mafiaPlayers.length > 4 && mafiaPlayers.length < 13) {
    canStart = true;
    playersStartGameCl.add('players-start-button-enabled')
  } else {
    canStart = false;
    playersStartGameCl.remove('players-start-button-enabled')
  }
}


// function clearInput() {
//    //reset input value
//    // playersInputElement.value = '';
// }
