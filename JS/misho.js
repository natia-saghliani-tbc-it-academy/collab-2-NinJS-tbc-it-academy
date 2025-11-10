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
    console.log(mafiaPlayers);
  }
}

function playersClearAll() {
  mafiaPlayers = [];
  canStart = false;
  console.log("mafiaPlayers CLEAR: ", mafiaPlayers);
}

function playersGameStart() {
  if (mafiaPlayers.length > 4 && mafiaPlayers.length < 13) {
    canStart = true;
    console.log("canStart: ", canStart);
  } else {
    canStart = false;
    console.log("canStart: ", canStart);
  }
}


// function clearInput() {
//    //reset input value
//    // playersInputElement.value = '';
// }
