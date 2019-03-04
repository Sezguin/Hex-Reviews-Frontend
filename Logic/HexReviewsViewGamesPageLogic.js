var gameList = null

$(document).ready(function() {
    getGameList();    
});

function getGameList() {

    $.get("http://localhost:4500/games/", function(data) {
        Object.keys(data).forEach(function(k) {
            console.log(JSON.stringify(data[k]));

            buildGameCard(data[k]);
        });
    });    
}

function buildGameCard(data) {
    console.log("Game card is being created...");

    var gameData = data;

    var gameTitle = gameData.game_title;
    var gameDesc    = gameData.game_description;

    console.log("******************" + gameTitle);

    console.log("-----------------------------------------------");
    console.log(JSON.stringify(data));
    console.log("-----------------------------------------------");

}
