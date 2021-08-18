function addUser() {
    player1n = document.getElementById("player1_name_input").value;
    player2n = document.getElementById("player2_name_input").value;
    localStorage.setItem("prefer1", player1n);
    localStorage.setItem("prefer2", player2n);
    window.location = "Game_page.html";
}