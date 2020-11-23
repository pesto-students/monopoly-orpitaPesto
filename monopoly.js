const numberOfPlayers = localStorage.getItem("numberOfPlayers");
const playerConfigurations = { players: {} };
const data = [
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
const reg = /^\d+$/;
const startElement = document.getElementById(0);
let boundRectangle = startElement.getBoundingClientRect();
let x = boundRectangle.x;
let y = boundRectangle.y;
let height = boundRectangle.height;
let width = boundRectangle.width;
let toastDiv = '<div id="snackbar">TEST</div>';
let rolledDices = {};
let dicesTurn = "";
let playerTurn = 1;
const corners = [0, 10, 20, 30];
snackBars = [0]; // height: 3%;
let marginApply = 10;
const presentPosition = { 1: 0, 2: 0, 3: 0, 4: 0 };
const property = {
  1: { bought: [], money: 1500 },
  2: { bought: [], money: 1500 },
  3: { bought: [], money: 1500 },
  4: { bought: [], money: 1500 },
};
const rentedProperty = {};
let message = "";
const jail = {};
const bank = { 1: [], 2: [], 3: [], 4: [] };
const playerLost = [];
const playerInGame = { 1: false, 2: false, 3: false, 4: false };
let playersList = [];
let playerMoney = 0;
document.addEventListener("DOMContentLoaded", function (event) {
  getPlayerConfigurations();
  positionPlayersOnBoard();
  styleGrid();
  document.getElementsByTagName("p")[0].innerText =
    localStorage.getItem(playerTurn) + "'s Turn";
  let snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
    snackBars = arrayRemove(snackBars, 0);
  }, 1500);
  Roll("onReady");
});

function getPlayerConfigurations() {
  for (let i = 1; i <= +numberOfPlayers; i += 1) {
    playerConfigurations["players"][i] = localStorage.getItem(i);
    playerInGame[i] = true;
    playersList.push(i);
  }
}

function positionPlayersOnBoard() {
  for (let i = 1; i <= +numberOfPlayers; i += 1) {
    const element = document.getElementsByClassName("b" + i)[0];
    element.style.display = "block";
    playerMovement(
      element,
      x-5  + width - marginApply * (i - 1),
      y- 5 + height - 20,
      "OnReady"
    );
  }
}

function playerMovement(element, x, y, OnReady) {
  element.style.marginLeft = x + "px";
  element.style.marginTop = y + "px";
  const star = document.getElementById("star" + presentPosition[playerTurn]);
  if (star && star.classList.length === 0) {
    const onProperty = presentPosition[playerTurn];
    const dataProprerty = data[onProperty];
    if (property[playerTurn].money - dataProprerty.price <= 0) {
      auctionMyProperty();
    } else {
      debugger;
      const modale = document.getElementsByClassName("modale")[0];
      const header = modale
        .getElementsByClassName("modal-header")[0]
        .getElementsByTagName("h2")[0];
      header.innerHTML = dataProprerty.name;
      modale.classList.add("opened");
    }
  } else {
    const currentProperty = data[presentPosition[playerTurn]];
    if (currentProperty.pricetext.indexOf("Pay") !== -1) {
      deductTax(currentProperty);
    } else if (star && star.classList.length > 0) {
      if (star.className.indexOf("player-" + playerTurn) === -1) {
        rentProperty(+star.className.match(/\d+/));
      } else {
        message =
          "<div>" +
          localStorage.getItem(playerTurn) +
          " landed on his own property" +
          currentProperty.name +
          "</div>";
        fetchLogs();
      }
    } else {
      if (!OnReady) {
        message =
          "<div>" +
          localStorage.getItem(playerTurn) +
          " landed on " +
          currentProperty.name +
          "</div>";
        fetchLogs();
        
        playerMoney = property[playerTurn].money;
        if(playerMoney <= 0) {
            playerMoney = 0;
        }
        document.getElementsByTagName("span")[playerTurn - 1].innerText =
          localStorage.getItem(playerTurn) + " : " + playerMoney;
      }
    }
    // message -> landed on Property
    getNextPlayerTurn();
  }
}

function styleGrid() {
  data.forEach((element, i) => {
    let htmlelement = document.getElementById(i);
    const elementWidth = htmlelement.getBoundingClientRect().width;
    let html = "";
    if (reg.test(element.price)) {
      html = `
                            <svg width="${elementWidth}px" height="10px">
                                <rect width="${elementWidth}" height="10" style="fill:${element.color};stroke-width:1;stroke:rgb(0,0,0)" />
                            </svg><br/>
                        `;
      htmlelement.innerHTML =
        html + htmlelement.innerText + `<div id="star${i}">☆</div>`;
    }
  });
  let i = 1;
  const spans = document.getElementsByTagName("span");
  while (i <= numberOfPlayers) {
    spans[i - 1].innerText =
      localStorage.getItem(i) + " : " + property[i].money;
    i += 1;
  }
}

function Roll(state) {
  let numberOfDices = 1;
  dicesTurn = "";
  while (numberOfDices < 3) {
    let num = Math.floor(Math.random() * 6) + 1;
    rolledDices[numberOfDices] = num;
    if (numberOfDices === 2) {
      dicesTurn += ",";
    }
    dicesTurn += num;
    let cls = "odd-";
    if (num % 2 === 0) {
      cls = "even-";
    }
    document.getElementById("die" + numberOfDices).innerHTML = "";
    for (let i = 1; i <= num; i++) {
      document.getElementById("die" + numberOfDices).innerHTML +=
        '<div class="dot ' + cls + i + '"></div>';
    }
    numberOfDices += 1;
  }
  if (!state) {
    message =
      "<div>" +
      localStorage.getItem(playerTurn) +
      " rolled dices " +
      dicesTurn +
      "</div>";
    fetchLogs();
    movePlayers();
  }
}

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

function fetchLogs() {
  let logs = document.getElementsByClassName("logs")[0];
  logs.innerHTML += message;
  logs.scrollTop = logs.scrollHeight;
}

function movePlayers() {
  const sum = rolledDices[1] + rolledDices[2];
  let currentPosition = presentPosition[playerTurn];
  let newPosition = currentPosition + sum;
  const InJail = jail[playerTurn];
  let inJailCard = false;
  if (newPosition === 30 || InJail) {
    inJailCard = GoToJail();
    // if (inJailCard) { getNextPlayerTurn(); }
  }
  if (!inJailCard) {
    if (newPosition <= 39) {
      presentPosition[playerTurn] = newPosition;
      const element = document.getElementsByClassName("b" + playerTurn)[0];
      const finalElement = document
        .getElementById(newPosition)
        .getBoundingClientRect();
      playerMovement(
        element,
        finalElement.x -5 + finalElement.width / 3,
        finalElement.y- 5 +
          finalElement.height / 2 +
          (marginApply - 4) * (playerTurn - 1)
      );
    } else {
      const element = document.getElementsByClassName("b" + playerTurn)[0];
      let finalElement = null;
      if (newPosition === 40) {
        finalElement = document.getElementById(0).getBoundingClientRect();
        presentPosition[playerTurn] = 0;
      } else {
        const difference = newPosition - 40;
        finalElement = document
          .getElementById(difference)
          .getBoundingClientRect();
        presentPosition[playerTurn] = difference;
      }
      property[playerTurn].money += 200;
      message =
        "<div>" +
        localStorage.getItem(playerTurn) +
        " received gift from Bank " +
        " of $200 on passing from GO!" +
        "</div>";
      fetchLogs();
      playerMoney = property[playerTurn].money;
        if(playerMoney <= 0) {
            playerMoney = 0;
        }
      document.getElementsByTagName("span")[playerTurn - 1].innerText =
        localStorage.getItem(playerTurn) + " : " + playerMoney;
      let snackbar = document.getElementById("snackbar");
      snackbar.className = "show";
      snackbar.innerText =
        localStorage.getItem(playerTurn) +
        " received gift from Bank " +
        " of $200 on passing from GO!";
      setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
        snackBars = arrayRemove(snackBars, 0);
      }, 1500);
      playerMovement(
        element,
        finalElement.x -5 + finalElement.width / 3,
        finalElement.y- 5 +
          finalElement.height / 3 +
          (marginApply - 4) * (playerTurn - 1)
      );
    }
  }
}

function buy() {
  const star = document.getElementById("star" + presentPosition[playerTurn]);
  if (star && star.classList.length === 0) {
    star.classList.add("player-" + playerTurn);
    star.classList.add("bought");
  }
  hideModal();
  buyProperty();
  getNextPlayerTurn();
}

function exit() {
  hideModal();
  getNextPlayerTurn();
}

function hideModal() {
  document.getElementsByClassName("modale")[0].classList.remove("opened");
}

function getNextPlayerTurn() {
  console.log('NEXRT', playerTurn, playersList[playersList.length - 1])
  
  if (playerTurn === playersList[playersList.length - 1]) {
    playerTurn = playersList[0];
  } else {
    let index = playersList.indexOf(playerTurn);
    playerTurn = playersList[index + 1];
  }
  checkLooser();
  styleButton();
  document.getElementsByTagName("p")[0].innerText =
    localStorage.getItem(playerTurn) + "'s Turn";
  console.log("playerTurn", playerTurn);
}

function buyProperty() {
  const onProperty = presentPosition[playerTurn];
  const innertext = document.getElementById(onProperty).innerText.trim();
  const propertyName = innertext.substring(0, innertext.length - 2);
  const dataProprerty = data[onProperty];
  console.log(
    propertyName,
    dataProprerty,
    propertyName === dataProprerty["name"]
  );
  // const property = { 1: { bought: {}, rent: {} }, 2: { bought: {}, rent: {} } };
  property[playerTurn]["bought"].push(propertyName);
  property[playerTurn].money -= dataProprerty.price;
  message =
    "<div>" +
    localStorage.getItem(playerTurn) +
    " bought " +
    propertyName +
    " for $" +
    dataProprerty.price +
    "</div>";
    playerMoney = property[playerTurn].money;
        if(playerMoney <= 0) {
            playerMoney = 0;
        }
  document.getElementsByTagName("span")[playerTurn - 1].innerText =
    localStorage.getItem(playerTurn) + " : " + playerMoney;
  fetchLogs();
}

function deductTax(currentProperty) {
  const tax = +currentProperty.pricetext.match(/\d+/);
  property[playerTurn].money -= tax;
  message =
    "<div>" +
    localStorage.getItem(playerTurn) +
    " paid Tax  " +
    currentProperty.name +
    " of $" +
    currentProperty.price +
    "</div>";
  fetchLogs();
  document.getElementsByTagName("span")[playerTurn - 1].innerText =
    localStorage.getItem(playerTurn) + " : " + property[playerTurn].money;
  let snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  snackbar.innerText =
    localStorage.getItem(playerTurn) +
    " paid Tax  " +
    currentProperty.name +
    " of $" +
    currentProperty.price;
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
    snackBars = arrayRemove(snackBars, 0);
  }, 1500);
  // property[playerTurn]
}

function rentProperty(propertyOwner) {
  const onProperty = presentPosition[playerTurn];
  const innertext = document.getElementById(onProperty).innerText.trim();
  const propertyName = innertext.substring(0, innertext.length - 2);
  const dataProprerty = data[onProperty];
  if (rentedProperty[propertyName]) {
    while (rentedProperty[propertyName] < 4) {
      rentedProperty[propertyName] += 1;
    }
  } else {
    rentedProperty[propertyName] = 1;
  }
  const rent = dataProprerty["rent" + rentedProperty[propertyName]];
  if (rent && rent !== "") {
    property[playerTurn].money -= rent;
  }
  message =
    "<div>" +
    localStorage.getItem(playerTurn) +
    " paid rent  " +
    propertyName +
    " of $" +
    rent +
    " to " +
    localStorage.getItem(propertyOwner) +
    "</div>";
  fetchLogs();
  playerMoney = property[playerTurn].money;
        if(playerMoney <= 0) {
            playerMoney = 0;
        }
  document.getElementsByTagName("span")[playerTurn - 1].innerText =
    localStorage.getItem(playerTurn) + " : " + playerMoney;
  let snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  snackbar.innerText =
    localStorage.getItem(playerTurn) +
    " paid rent  " +
    propertyName +
    " of $" +
    rent +
    " to " +
    localStorage.getItem(propertyOwner);
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
    snackBars = arrayRemove(snackBars, 0);
  }, 1500);
}

function GoToJail() {
  debugger;
  let getOutOfJailCard = false;

  if (jail[playerTurn]) {
    jail[playerTurn] += 1;
    if (jail[playerTurn] === 4) {
      delete jail[playerTurn];
      getOutOfJailCard = true;
      property[playerTurn].money -= 50;
      message =
        '<div style="color: red;">' +
        localStorage.getItem(playerTurn) +
        " got out of Jail. Paid fine of $50 to the Bank." +
        "</div>";
      fetchLogs();
      playerMoney = property[playerTurn].money;
      if(playerMoney <= 0) {
          playerMoney = 0;
      }
      document.getElementsByTagName("span")[playerTurn - 1].innerText =
        localStorage.getItem(playerTurn) + " : " + playerMoney;
    } else if (rolledDices[1] === rolledDices[2]) {
      getOutOfJailCard = true;
      delete jail[playerTurn];
      message =
        '<div style="color: red;">' +
        localStorage.getItem(playerTurn) +
        " got out of Jail.Rolled double dice" +
        "</div>";
      fetchLogs();
    } else {
      getNextPlayerTurn();
    }
  } else {
    jail[playerTurn] = 1;
    const element = document.getElementsByClassName("b" + playerTurn)[0];
    const finalElement = document.getElementById(30).getBoundingClientRect();

    // message = '<div style="color: red;">' + localStorage.getItem(playerTurn) + ' landed in Jail. ' + '</div>';
    // fetchLogs();
    presentPosition[playerTurn] = 30;
    let snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    snackbar.innerText = localStorage.getItem(playerTurn) + " landed in Jail.";
    setTimeout(function () {
      snackbar.className = snackbar.className.replace("show", "");
      snackBars = arrayRemove(snackBars, 0);
    }, 1500);
    playerMovement(
      element,
      finalElement.x -5 + finalElement.width / 3,
      finalElement.y - 5  +
        finalElement.height / 3 +
        (marginApply - 4) * (playerTurn - 1)
    );
  }
  if (getOutOfJailCard) {
    return false;
  } else {
    return true;
  }
}

function auctionMyProperty() {
  const modale2 = document.getElementsByClassName("modale2")[0];
  const ul = modale2.getElementsByTagName("ul")[0];
  ul.innerHTML = "";
  property[playerTurn]["bought"].forEach((propertyOwned) => {
    const li = document.createElement("li");
    const article = document.createElement("article");
    article.innerText = propertyOwned;
    li.appendChild(article);
    const btn = document.createElement("BUTTON");
    btn.innerHTML = "MORTGAGE";
    btn.className = "btn";
    if (bank[playerTurn].indexOf(propertyOwned) !== -1) {
      btn.disabled = true;
    }
    btn.id = propertyOwned;
    li.appendChild(btn);
    ul.appendChild(li);
    document.getElementById(propertyOwned).onclick = function () {
      MortgageProperty(propertyOwned);
    };
    // document.getElementById(propertyOwned).addEventListener("click", MortgageProperty(propertyOwned));
  });
  document.getElementsByClassName("modale2")[0].classList.add("opened");
}

function MortgageProperty(propertyOwned) {
  debugger;
  bank[playerTurn].push(propertyOwned);
  const dataProprerty = data.find((x) => x.name === propertyOwned);
  const mortgageMoney = Math.round(50 * dataProprerty.price) / 100;
  property[playerTurn].money += mortgageMoney;
  document.getElementsByClassName("modale2")[0].classList.remove("opened");
  message =
    '<div style="color: orange;">' +
    localStorage.getItem(playerTurn) +
    " mortageged his property :" +
    propertyOwned +
    "</div>";
  message +=
    '<div style="color: green;">' +
    localStorage.getItem(playerTurn) +
    " Received $" +
    mortgageMoney +
    " from Bank for " +
    propertyOwned +
    "</div>";
  fetchLogs();
  let snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  snackbar.innerText =
    localStorage.getItem(playerTurn) +
    " mortageged his property :" +
    propertyOwned;
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
    snackBars = arrayRemove(snackBars, 0);
  }, 1500);
  playerMoney = property[playerTurn].money;
      if(playerMoney <= 0) {
          playerMoney = 0;
      }
  document.getElementsByTagName("span")[playerTurn - 1].innerText =
    localStorage.getItem(playerTurn) + " : " + playerMoney;
  const onProprerty = data[presentPosition[playerTurn]];
  if (onProprerty.price && property[playerTurn].money >= onProprerty.price) {
    const modale = document.getElementsByClassName("modale")[0];
    modale.classList.add("opened");
    const header = modale
      .getElementsByClassName("modal-header")[0]
      .getElementsByTagName("h2")[0];
    header.innerHTML = onProprerty.name;
    modale.classList.add("opened");
  } else {
    getNextPlayerTurn();
  }
}

function styleButton() {
  if (bank[playerTurn].length > 0) {
    document.getElementById("btn_mortage").disabled = false;
  } else {
    document.getElementById("btn_mortage").disabled = true;
  }
}

function liftMortgage() {
  const modale3 = document.getElementsByClassName("modale3")[0];
  modale3.classList.add("opened");
  const ul = modale3
      .getElementsByClassName("modal-dialog")[0]
      .getElementsByTagName("ul")[0];
      ul.innerHTML = "";
  bank[playerTurn].forEach((propertyInBank) => {
    
    const dataProprerty = data.find((x) => x.name === propertyInBank);
    const li = document.createElement("li");
    const article = document.createElement("article");
    article.innerText = propertyInBank;
    li.appendChild(article);
    const btn = document.createElement("BUTTON");
    btn.innerHTML = "GET";
    const value = Math.round(
      (dataProprerty.price * 50) / 100 + 0.1 * (dataProprerty.price * 50)
    );
    btn.className = "btn";
    console.log(value, property[playerTurn]["money"]);

    btn.id = propertyInBank;
    li.appendChild(btn);
    if (value > property[playerTurn]["money"]) {
      btn.disabled = true;
      const exitButton = document.createElement("BUTTON");
      exitButton.innerHTML = "EXIT";
      exitButton.onclick = function () {
        closeLiftMortgage();
      };
      li.appendChild(exitButton);
    }
    ul.appendChild(li);
    document.getElementById(propertyInBank).onclick = function () {
      getProperty(propertyInBank, value);
    };
  });
}

function getProperty(mortgagedProperty, value) {
  property[playerTurn].money -= value;
  bank[playerTurn] = arrayRemove(bank[playerTurn], mortgagedProperty);
  message =
    '<div style="color: green;">' +
    localStorage.getItem(playerTurn) +
    ": Received his property " +
    mortgagedProperty +
    "back from Bank for $" +
    value +
    "</div>";
  fetchLogs();
  let snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  snackbar.innerText =
    localStorage.getItem(playerTurn) +
    ": Received his property :" +
    mortgagedProperty;
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
    snackBars = arrayRemove(snackBars, 0);
  }, 1500);
  const modale3 = document.getElementsByClassName("modale3")[0];
  modale3.classList.remove("opened");

  // if (property[playerTurn].money >= )
  //Check for rent on mortgage property
}

function closeLiftMortgage() {
  const modale3 = document.getElementsByClassName("modale3")[0];
  modale3.classList.remove("opened");
}

function checkLooser() {
  if (property[playerTurn]["money"] <= 0) {
    playerLost.push(playerTurn);
    playerInGame[playerTurn] = false;
    playersList = arrayRemove(playersList, playerTurn)
  }
}
