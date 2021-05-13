function add_user()
{
    localStorage.setItem("player1 name",document.getElementById("player_name_1").value);
    localStorage.setItem("player2 name",document.getElementById("player_name_2").value);
    window.location="game_page.html";
}
