// Mafia — “Night in JSville”
// Goal & Loop
// •	Lobby (5–12 players) → Reveal roles (pass-and-play) → Night actions (Mafia target → Doctor protect → Detective inspect) → Day summary → Vote → repeat.
// •	Win: Town if Mafia = 0; Mafia if Mafia ≥ Town (parity).
// Roles
// type Role = 'Mafia'|'Detective'|'Doctor'|'Villager';
// Acceptance
// •	Reveal: Next only after role is hidden.
// •	Night: resolve in order → apply protection → log result.
// •	Vote: every alive player must cast (or skip) to continue; ties → no elimination.
// •	Win check after Night and after Vote.
// ________________________________________
// დიზაინზე არ ხართ შეზღუდულები, როგორც გაგიხარდებათ მაგრამ უნდა იყოს ყველაფერი გასტიტული და ან მიახლოებული ან მსგავსი 
// სხვა სტილი შემოგვთავაზეთ.
// მარჯვენა ნაწილი ეკრანის სადაც მიდის თამაში, მარცხენა მხარეს წერია როლთა გადანაწილება, ვამატებთ მოთამაშეებს და ვლოგავთ 
// ნაბიჯებს, რამდენი მოთამაშეც შედის ყველას ურიგდება როლი და მაგ როლის შესაბამისად მიდის თამაში. როლებს იხილავთ მაღლა, ასევე ვინ რა ქეისში იგებს. შეგყავღ მინიმუმ 5 მოთამაშე, 1 ექიმი, 1 დეტექტივი , 1 მაფია და ორი მოქალაქე, ცხადდება მაფიის ღამე, მაფია ირჩევს მსხვერპლს, შემდგომ ექიმი ირჩევს ვის იცავს, თუ დაემთხვა არავინ კვდება მაფიის ღამეს თუ არადა მაფიის მიერ არჩეული მოთამაშე ეთიშება თამაშს. დეტექტივს შეუძლია გადაამოწმოს ვინ არის მაფია. თუ გავარდა მაფია იგებენ მოქალაქეები,
//  თუ აღარ დარჩნენ მოქალაქეები იგებს მაფია. დეტალური ინსტრუქციისთვის იხილეთ ვიდეო. 





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



document.getElementById("finishVote").addEventListener("click", () => {

  players.forEach(p => p.votes = 0);

  document.querySelectorAll(".vote").forEach(select => {
    const votedId = Number(select.value);

    if (!isNaN(votedId)) {
      const votedPlayer = players.find(p => p.id === votedId);
      votedPlayer.votes++;
    }
  });
  const maxVotes = Math.max(...players.map(p => p.votes));
  const votedPlayers = players.filter(p => p.votes === maxVotes);

  if (maxVotes === 0) {
    console.log("Nobody voted.");
    return;
  }

  if (votedPlayers.length > 1) {
    console.log("Tie, no elimination.");
    return;
  }

  votedPlayers[0].alive = false;
  console.log("Eliminated:", votedPlayers[0].name);
});