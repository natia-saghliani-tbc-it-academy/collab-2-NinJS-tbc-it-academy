const players = [
  {
    id: 1,
    name: "გიორგი",
    alive: true,
    role: "",
    votes: 0,
    isChosenbyBafia: false,
    isChosenByDoctor: false,
  },
  {
    id: 2,
    name: "ნინო",
    alive: true,
    role: "",
    votes: 0,
    isChosenbyBafia: false,
    isChosenByDoctor: false,
  },
  {
    id: 3,
    name: "მარიამი",
    alive: true,
    role: "",
    votes: 0,
    isChosenbyBafia: false,
    isChosenByDoctor: false,
  },
  {
    id: 4,
    name: "ლუკა",
    alive: true,
    role: "",
    votes: 0,
    isChosenbyBafia: false,
    isChosenByDoctor: false,
  },
  {
    id: 5,
    name: "ანა",
    alive: true,
    role: "",
    votes: 0,
    isChosenbyBafia: false,
    isChosenByDoctor: false,
  },
];
const roles = ["Mafia", "Doctor", "Vilinger", "Vilinger", "Vilinger"];
const shuffled = roles.sort(() => Math.random() - 0.5);

for (let i = 0; i < players.length; i++) {
  players[i].role = shuffled[i];
}

let index = 0;

const nameEl = document.getElementById("name");
const roleEl = document.getElementById("role");
const hideBtn = document.getElementById("hideBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showPlayer(i) {
  nameEl.textContent = players[i].name;
  roleEl.textContent = players[i].role;
  nextBtn.disabled = true;
  prevBtn.disabled = true;
}

hideBtn.addEventListener("click", () => {
  if (roleEl.textContent === "დამალულია") {
    roleEl.textContent = players[index].role;
    nextBtn.disabled = true;
    prevBtn.disabled = true;   
  } else {
    roleEl.textContent = "დამალულია";
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    showPlayer(index)
  }
});

nextBtn.addEventListener("click", () => {
  if (index < players.length - 1) {
    index++;
    showPlayer(index)
  }
});


showPlayer(index);
console.log(players)