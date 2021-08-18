p1s = 0;
p2s = 0;

document.getElementById("p1score").innerHTML = p1s;
document.getElementById("p2score").innerHTML = p2s;

document.getElementById("pQ").innerHTML = localStorage.getItem("prefer1");
document.getElementById("aQ").innerHTML = localStorage.getItem("prefer2");

p1namee = document.getElementById("p1name").innerHTML = localStorage.getItem("prefer1") + " -";
p2namee = document.getElementById("p2name").innerHTML = localStorage.getItem("prefer2") + " -";

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);


    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button><br><br>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}



question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
   if(get_answer == actual_answer){
    if(answer_turn == "player1")
    {
        p1s = p1s + 1;
        document.getElementById("p1score").innerHTML = p1s;
    }
    else
    {
        p2s = p2s + 1;
        document.getElementById("p2score").innerHTML = p2s;
    }
}

	
if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("pQ").innerHTML = localStorage.getItem("prefer2") ;
}
else 
{
    question_turn = "player1"
    document.getElementById("pQ").innerHTML = localStorage.getItem("prefer1") ;
}

if(answer_turn == "player1")
{
    answer_turn = "player2"
    document.getElementById("aQ").innerHTML = localStorage.getItem("prefer2") ;
}
else 
{
    answer_turn = "player1"
    document.getElementById("aQ").innerHTML = localStorage.getItem("prefer1") ;
}
document.getElementById("output").innerHTML = "";
}
