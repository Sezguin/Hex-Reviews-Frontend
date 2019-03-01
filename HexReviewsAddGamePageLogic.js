function addGame() {
    console.log("Add game button has been clicked.");

    var gameTitle = $('#game_title').val();

    $.post( "http://localhost:4500/games/", {game_title: gameTitle} );
}