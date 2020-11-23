function multiPlayer(params) {
    if (params === '2Player') {
        localStorage.setItem('numberOfPlayers', 2);
        document.getElementById('player3').style.display = "none";
        document.getElementById('player4').style.display = "none";
    } else if (params === '3Player') {
        localStorage.setItem('numberOfPlayers', 3);
        document.getElementById('player3').style.display = "";
        document.getElementById('player4').style.display = "none";
    } else {
        localStorage.setItem('numberOfPlayers', 4);
        document.getElementById('player3').style.display = "";
        document.getElementById('player4').style.display = "";
    }
}
document.onreadystatechange = function () {
    localStorage.clear();
    localStorage.setItem('numberOfPlayers', 2);
    document.getElementById('player3').style.display = "none";
    document.getElementById('player4').style.display = "none";
}

function playerName(element, playerNumber) {
    localStorage.setItem(playerNumber, element.value);
}

function submit() {
    let numberOfPlayers = localStorage.getItem('numberOfPlayers');
    for (let i = 1; i <= numberOfPlayers; i += 1) {
        if (!localStorage.getItem(i)) {
            localStorage.setItem(i, 'Player_' + i);
        }
    }
    window.location.href = "./monopoly.html";
}
