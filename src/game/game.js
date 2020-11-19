let firstRoll = 1;
let secondRoll = 1;
const element = document.getElementById("0");
let playerTurn = 1;
let sum = 0;
let playerdiff = 10;
const turn = document.getElementById("turn");
const positionObject = {};
let numberOfPalyers = 2;
let previousSum = {};
let bankrupt = [];
let playerStatics = [];
let data = [
  {
    name: "GO",
    pricetext: "COLLECT $200 SALARY AS YOU PASS.",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Mediterranean Avenue",
    pricetext: "$60",
    color: "#8B4513",
    price: 60,
    groupNumber: 3,
    baserent: 2,
    rent1: 10,
    rent2: 30,
    rent3: 90,
    rent4: 160,
    rent5: 250,
  },
  {
    name: "Community Chest",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Baltic Avenue",
    pricetext: "$60",
    color: "#8B4513",
    price: 60,
    groupNumber: 3,
    baserent: 4,
    rent1: 20,
    rent2: 60,
    rent3: 180,
    rent4: 320,
    rent5: 450,
  },
  {
    name: "City Tax",
    pricetext: "Pay $200",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Reading Railroad",
    pricetext: "$200",
    color: "#FFFFFF",
    price: 200,
    groupNumber: 1,
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Oriental Avenue",
    pricetext: "$100",
    color: "#87CEEB",
    price: 100,
    groupNumber: 4,
    baserent: 6,
    rent1: 30,
    rent2: 90,
    rent3: 270,
    rent4: 400,
    rent5: 550,
  },
  {
    name: "Chance",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Vermont Avenue",
    pricetext: "$100",
    color: "#87CEEB",
    price: 100,
    groupNumber: 4,
    baserent: 6,
    rent1: 30,
    rent2: 90,
    rent3: 270,
    rent4: 400,
    rent5: 550,
  },
  {
    name: "Connecticut Avenue",
    pricetext: "$120",
    color: "#87CEEB",
    price: 120,
    groupNumber: 4,
    baserent: 8,
    rent1: 40,
    rent2: 100,
    rent3: 300,
    rent4: 450,
    rent5: 600,
  },
  {
    name: "Just Visiting",
    pricetext: "",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "St. Charles Place",
    pricetext: "$140",
    color: "#FF0080",
    price: 140,
    groupNumber: 5,
    baserent: 10,
    rent1: 50,
    rent2: 150,
    rent3: 450,
    rent4: 625,
    rent5: 750,
  },
  {
    name: "Electric Company",
    pricetext: "$150",
    color: "#FFFFFF",
    price: 150,
    groupNumber: 2,
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "States Avenue",
    pricetext: "$140",
    color: "#FF0080",
    price: 140,
    groupNumber: 5,
    baserent: 10,
    rent1: 50,
    rent2: 150,
    rent3: 450,
    rent4: 625,
    rent5: 750,
  },
  {
    name: "Virginia Avenue",
    pricetext: "$160",
    color: "#FF0080",
    price: 160,
    groupNumber: 5,
    baserent: 12,
    rent1: 60,
    rent2: 180,
    rent3: 500,
    rent4: 700,
    rent5: 900,
  },
  {
    name: "Pennsylvania Railroad",
    pricetext: "$200",
    color: "#FFFFFF",
    price: 200,
    groupNumber: 1,
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "St. James Place",
    pricetext: "$180",
    color: "#FFA500",
    price: 180,
    groupNumber: 6,
    baserent: 14,
    rent1: 70,
    rent2: 200,
    rent3: 550,
    rent4: 750,
    rent5: 950,
  },
  {
    name: "Community Chest",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Tennessee Avenue",
    pricetext: "$180",
    color: "#FFA500",
    price: 180,
    groupNumber: 6,
    baserent: 14,
    rent1: 70,
    rent2: 200,
    rent3: 550,
    rent4: 750,
    rent5: 950,
  },
  {
    name: "New York Avenue",
    pricetext: "$200",
    color: "#FFA500",
    price: 200,
    groupNumber: 6,
    baserent: 16,
    rent1: 80,
    rent2: 220,
    rent3: 600,
    rent4: 800,
    rent5: 1000,
  },
  {
    name: "Free Parking",
    pricetext: "",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Kentucky Avenue",
    pricetext: "$220",
    color: "#FF0000",
    price: 220,
    groupNumber: 7,
    baserent: 18,
    rent1: 90,
    rent2: 250,
    rent3: 700,
    rent4: 875,
    rent5: 1050,
  },
  {
    name: "Chance",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Indiana Avenue",
    pricetext: "$220",
    color: "#FF0000",
    price: 220,
    groupNumber: 7,
    baserent: 18,
    rent1: 90,
    rent2: 250,
    rent3: 700,
    rent4: 875,
    rent5: 1050,
  },
  {
    name: "Illinois Avenue",
    pricetext: "$240",
    color: "#FF0000",
    price: 240,
    groupNumber: 7,
    baserent: 20,
    rent1: 100,
    rent2: 300,
    rent3: 750,
    rent4: 925,
    rent5: 1100,
  },
  {
    name: "B&O Railroad",
    pricetext: "$200",
    color: "#FFFFFF",
    price: 200,
    groupNumber: 1,
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Atlantic Avenue",
    pricetext: "$260",
    color: "#FFFF00",
    price: 260,
    groupNumber: 8,
    baserent: 22,
    rent1: 110,
    rent2: 330,
    rent3: 800,
    rent4: 975,
    rent5: 1150,
  },
  {
    name: "Ventnor Avenue",
    pricetext: "$260",
    color: "#FFFF00",
    price: 260,
    groupNumber: 8,
    baserent: 22,
    rent1: 110,
    rent2: 330,
    rent3: 800,
    rent4: 975,
    rent5: 1150,
  },
  {
    name: "Water Works",
    pricetext: "$150",
    color: "#FFFFFF",
    price: 150,
    groupNumber: 2,
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Marvin Gardens",
    pricetext: "$280",
    color: "#FFFF00",
    price: 280,
    groupNumber: 8,
    baserent: 24,
    rent1: 120,
    rent2: 360,
    rent3: 850,
    rent4: 1025,
    rent5: 1200,
  },
  {
    name: "Go to Jail",
    pricetext: "Go directly to Jail. Do not pass GO. Do not collect $200.",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Pacific Avenue",
    pricetext: "$300",
    color: "#008000",
    price: 300,
    groupNumber: 9,
    baserent: 26,
    rent1: 130,
    rent2: 390,
    rent3: 900,
    rent4: 110,
    rent5: 1275,
  },
  {
    name: "North Carolina Avenue",
    pricetext: "$300",
    color: "#008000",
    price: 300,
    groupNumber: 9,
    baserent: 26,
    rent1: 130,
    rent2: 390,
    rent3: 900,
    rent4: 110,
    rent5: 1275,
  },
  {
    name: "Community Chest",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Pennsylvania Avenue",
    pricetext: "$320",
    color: "#008000",
    price: 320,
    groupNumber: 9,
    baserent: 28,
    rent1: 150,
    rent2: 450,
    rent3: 1000,
    rent4: 1200,
    rent5: 1400,
  },
  {
    name: "Short Line",
    pricetext: "$200",
    color: "#FFFFFF",
    price: 200,
    groupNumber: 1,
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Chance",
    pricetext: "FOLLOW INSTRUCTIONS ON TOP CARD",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Park Place",
    pricetext: "$350",
    color: "#0000FF",
    price: 350,
    groupNumber: 10,
    baserent: 35,
    rent1: 175,
    rent2: 500,
    rent3: 1100,
    rent4: 1300,
    rent5: 1500,
  },
  {
    name: "LUXURY TAX",
    pricetext: "Pay $100",
    color: "#FFFFFF",
    price: "",
    groupNumber: "",
    baserent: "",
    rent1: "",
    rent2: "",
    rent3: "",
    rent4: "",
    rent5: "",
  },
  {
    name: "Boardwalk",
    pricetext: "$400",
    color: "#0000FF",
    price: 400,
    groupNumber: 10,
    baserent: 50,
    rent1: 200,
    rent2: 600,
    rent3: 1400,
    rent4: 1700,
    rent5: 2000,
  },
];
// Initializing Players with 1500 Rs on domReady
document.onreadystatechange = function () {
  if (!localStorage.getItem("playerSelection")) {
    window.location.href = "index.html";
  } else{
    numberOfPalyers = +localStorage.getItem("playerSelection").split(" ")[0];
    initializePlayers();
  }
  for(let i=0; i< data.length; i+=1) {
    if(data[i].price !== "") {
      const currentTd = document.getElementById(i);
      currentTd.title = 'Price :$' + data[i].price;
    }
    if(data[i].pricetext !== "") {
      const currentTd = document.getElementById(i);
      currentTd.title =  data[i].pricetext;
    }
    
  }
};

function initializePlayers() {
  const boundingRect = element.getBoundingClientRect();
  let x = boundingRect.x;
  let y = boundingRect.y;
  const ul = document.getElementById("player-ul");
  ul.innerHTML = "";
  let li = "";
  playerStatics = [];
  for (let i = 0; i < numberOfPalyers; i += 1) {
    x += 17;
    let num = i + 1 + "";
    document.getElementsByClassName("player-" + num + "-dot")[0].style.left =
      x + "px";
    document.getElementsByClassName("player-" + num + "-dot")[0].style.top =
      y + "px";
    playerStatics.push("<p class='p" +num+ "'> Player" + num + ': credited $' + 1500 + '</p>');
    let position = { position: 0 };
    positionObject[num] = position;
    positionObject[num]["money"] = 1500;
    positionObject[num]["property"] = { buy: [], rent: [] };
    positionObject[num]['inJail'] = false;
    positionObject[num]['attempt'] = 0

    li +=
      '<li class="player-' +
      num +
      '">Player ' +
      num +
      "<span>( " +
      positionObject[num]["money"] +
      ")</span></li>";
  }
  document.getElementById('playerStatistics').innerHTML = '';
  playerStatics.forEach(statistics =>{
    document.getElementById('playerStatistics').innerHTML += statistics;
  })

  ul.insertAdjacentHTML("beforeend", li);
  
}
// Gets random numbers for the 2 dices and moves player as per the sum you got.
function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach((die, index) => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6, index);
  });
  document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" >Player' +playerTurn +'rolled dice '+ firstRoll +',' + secondRoll; 
 
  movePlayer();
  for(let i =0; i< numberOfPalyers; i++) {
    debugger;
    if(positionObject[i+1]["money"] <= 0){
      if(bankrupt.indexOf(i+1) === -1) {
        bankrupt.push(i+1);
      }
    }
  }
  if(bankrupt.length > 0) {
    if(bankrupt.length < (numberOfPalyers-1) ) {
      bankrupt.forEach(player => {
        while(player === playerTurn) {
          playerTurn += 1;
        }
      });
    }
  } else{
    if (playerTurn < numberOfPalyers) {
      playerTurn += 1;
    } else {
      playerTurn = 1;
    }
  }
  
  if(bankrupt.length === numberOfPalyers -1 ){
    document.getElementById('winner').innerText = 'Player '+ playerTurn + ' won !!!';
    openNav();
  }
  turn.innerHTML = "PLAYER " + playerTurn + "'s turn";
}

// Moves Player as per the dice rolled
function movePlayer() {
    let getOutOfJailCard = false;
    if(positionObject[playerTurn]["position"] === 30) {

      positionObject[playerTurn]['inJail'] = true;
        if(firstRoll === secondRoll) {
            getOutOfJailCard = true;
            document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" > Player' +playerTurn +'got out of Jail. Rolled doubles '; 

        } else {
          positionObject[playerTurn]['attempt'] += 1;
          document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" > Player' +playerTurn +'in Jail. Rolled doubles chance ('+positionObject[playerTurn]['attempt'] +')'; 
        }
        if(positionObject[playerTurn]['attempt']=== 4) {
          getOutOfJailCard = true;
          positionObject[playerTurn]["money"] -= 50;
          document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" > Player' +playerTurn +'got out of Jail. Fined $50'; 
        }
    }
    if(positionObject[playerTurn]["position"] !== 30 || getOutOfJailCard){
      const player = "player-" + playerTurn;
      previousSum[playerTurn] = positionObject[playerTurn]["position"];
      sum = firstRoll + secondRoll;
      let item = null;
      if (positionObject[playerTurn]["position"] + sum > 39) {
        positionObject[playerTurn]["money"] += 200;
        document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" > Player' +playerTurn +'crossed Go. Rewarded $200'; 

        if (sum === 40) {
          const boundingRect = element.getBoundingClientRect();
          let x = boundingRect.x;
          let y = boundingRect.y;
          document.getElementsByClassName(
            "player-" + playerTurn + "-dot"
          )[0].style.left = x + "px";
          document.getElementsByClassName(
            "player-" + playerTurn + "-dot"
          )[0].style.top = y + "px";
          positionObject[playerTurn]["position"] = 0;
        } else {
          const difference = 40 - positionObject[playerTurn]["position"];
          item = document.getElementById(sum - difference);
          positionObject[playerTurn]["position"] = sum - difference;
        }
      } else {
        positionObject[playerTurn]["position"] += sum;
      }
      // console.log(
      //   "positionObject[playerTurn]",
      //   positionObject[playerTurn]["position"]
      // );
      if (!item) {
        item = document.getElementById(positionObject[playerTurn]["position"]);
      }
      const boundingRect = item.getBoundingClientRect();
      let x = boundingRect.x + 30;
      let y = boundingRect.y;
      for (let i = 0; i < numberOfPalyers; i += 1) {
        if (
          positionObject[i + 1]["position"] ===
          positionObject[playerTurn]["position"]
        ) {
          y += playerdiff * (playerTurn - 1);
        }
      }
      if (
        positionObject[playerTurn]["position"] >= 10 &&
        positionObject[playerTurn]["position"] < 20
      ) {
        x = item.offsetWidth - 20;
        document.getElementById(player).style.left = x + "px";
        document.getElementById(player).style.top = y + "px";
      } else if (
        positionObject[playerTurn]["position"] >= 20 &&
        positionObject[playerTurn]["position"] < 30
      ) {
          
        y += 10;
        x += 3;
        if(playerTurn !== 1) {
            y -=8;  
        }
        document.getElementById(player).style.left = x + "px";
        document.getElementById(player).style.top = y + "px";
      } else {
        document.getElementById(player).style.left = x + "px";
        document.getElementById(player).style.top = y + "px";
      }

      buyOrRent();
      if(positionObject[playerTurn]["position"] === 30) {
        positionObject[playerTurn]['inJail'] = true;
      }
    }
  
} // Toggles class from odd to even roll for dices
function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}
// Gets random number for the dices
function getRandomNumber(min, max, index) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const roll = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(roll);
  if (index === 0) {
    firstRoll = roll;
  } else {
    secondRoll = roll;
  }
  console.log(firstRoll, secondRoll);
  return roll;
}
// On Click Rolls the dice
document.getElementById("roll-button").addEventListener("click", rollDice);

function buyOrRent() {
    const currentPlayer = positionObject[playerTurn];
  const onProperty = document
    .getElementById(currentPlayer["position"]).innerText.trim();
    document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" > Player' +playerTurn +'is at ' + onProperty; 
    
  for (let i = 0; i < data.length; i += 1) {
    let property = data[i];
    const reg = /^\d+$/;
    if (property.name === onProperty) {
      if (reg.test(property.price)) {
        if (!positionObject[property.name]) {
          positionObject[playerTurn]["property"]["buy"].push(property.name);
          positionObject[playerTurn]["money"] -= property.price;
          document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" > Player' +playerTurn +'bought ' + onProperty +' for $' + property.price;
          document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" > Player' +playerTurn +'balance :' +positionObject[playerTurn]["money"];

          positionObject[property.name] = { 'boughtBy': playerTurn, rent: 0 };
        } else {
          if (
            positionObject[property.name]["rent"] < 6 &&
            positionObject[property.name]["boughtBy"] !== playerTurn
          ) {
            positionObject[property.name]["rent"] += 1;
            debugger;
            const rent =
              property["rent" + positionObject[property.name]["rent"]];
              positionObject[playerTurn]["money"] -= rent;
            positionObject[positionObject[property.name]["boughtBy"]]["money"] += rent;
            document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" >  Player' +playerTurn +' paid rent for ' + onProperty +' for $' + rent;
            document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" >  Player' +playerTurn +' Balance ' + positionObject[playerTurn]["money"];
            document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" >  Player' +positionObject[property.name]["boughtBy"] +'received rent for '+ onProperty + ' of ' +rent;
            document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" >  Player' +positionObject[property.name]["boughtBy"] +'balance :' +positionObject[playerTurn]["money"];

            const li = document.getElementsByClassName("player-" + positionObject[property.name]["boughtBy"])[0];
            const spans = li.getElementsByTagName("span");
            spans[0].innerHTML = "( " + positionObject[positionObject[property.name]["boughtBy"]]["money"]  + " )";
          }
        }
      }
      console.log(property.pricetext,property.pricetext.includes('Pay') )
      if(property.pricetext.includes('Pay')) {
        document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" >  Player' +playerTurn +' paid tax for ' + onProperty +' of $' + property.pricetext.match(/\d+/g);;
        positionObject[playerTurn]["money"] -= +property.pricetext.match(/\d+/g);
        document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" >  Player' +playerTurn +' Balance ' + positionObject[playerTurn]["money"];
      }
      if(positionObject[playerTurn]["money"] <= 0) {
        document.getElementById('playerStatistics').innerHTML += '<p class="p'+playerTurn+ '" >  Player' +playerTurn +' lost all his money. LOSER';
        }
      const li = document.getElementsByClassName("player-" + playerTurn)[0];
      const spans = li.getElementsByTagName("span");
      spans[0].innerHTML = "( " + positionObject[playerTurn]["money"] + " )";
      break;
    }
  }
}
// openNav();


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openNav2() {
  document.getElementById("myNavButton").style.width = "40%";
}

function closeNav2() {
  document.getElementById("myNavButton").style.width = "0%";
}
function mortgage() {
  closeNav2();
  openNav();
}

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})