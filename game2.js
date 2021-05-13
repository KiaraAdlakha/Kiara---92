player_name1 = localStorage.getItem("player1 name");
player_name2 = localStorage.getItem("player2 name");

player1_score =0;
player2_score =0;

document.getElementById("player1_name").innerHTML= player_name1 + ":";
document.getElementById("player2_name").innerHTML= player_name2 + ":";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+ player_name1;
document.getElementById("player_answer").innerHTML="Answer Turn - "+ player_name2;

function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    charAt_1= word.charAt(1);
    console.log(charAt_1);

    length_divide_word= Math.floor(word.length/2);
    charAt_2= word.charAt(length_divide_word);
    console.log(charAt_2);

    length_minus_1= word.length-1;
    charAt_3= word.charAt(length_minus_1);
    console.log(charAt_3);

    replace_charAt1= word.replace(charAt_1,"_");
    replace_charAt2= replace_charAt1.replace(charAt_2,"_");
    replace_charAt3= replace_charAt2.replace(charAt_3,"_");
    console.log(replace_charAt3);

    question_word="<h4 id='question'> Q. "+replace_charAt3+"</h4>"
    input_box="<br>Answer:<input type='text' placeholder='Type answer here' id='answer'>"
    check_button="<br><br><button type='button' onclick='check()' class='btn btn-info'>Check</button>"
    row= question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn=player_name1;
answer_turn=player_name2;
function check()
{
    get_answer=document.getElementById("answer").value;
    answer=get_answer.toLowerCase();
    console.log(answer);
    if(answer == word)
    {
        if(answer_turn == player_name1)
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        if(answer_turn == player_name2)
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn == player_name1)
    {
        question_turn=player_name2;
        document.getElementById("player_question").innerHTML="Question Turn-"+question_turn;
    }
    else
    {
        question_turn=player_name1;
        document.getElementById("player_question").innerHTML="Question Turn-"+question_turn;
    }
    if(answer_turn == player_name1)
    {
       answer_turn=player_name2;
        document.getElementById("player_answer").innerHTML="Answer Turn-"+answer_turn;
    }
    else
    {
        answer_turn=player_name1;
        document.getElementById("player_answer").innerHTML="Answer Turn-"+answer_turn;
    }
    document.getElementById("output").innerHTML="";
}