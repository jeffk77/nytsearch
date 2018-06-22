$(".startbutton").on("click", function () {
    $(".startbutton").hide();
    var container = $("#question-container");
    var timer = $("#timer-container");
    startTimer(timer);
    for (var i = 0; i < questions.length; i++) {
        var oneQuestion = questions[i];
        var qValue = oneQuestion.Q;
        var ansValue = oneQuestion.ans;
        var questionDivId = "questionNum" + i;
        var questiondiv = $('<div id="' + questionDivId + '">' + qValue + "</div>");
        var answerdiv = $("<div id=" + ansValue + "</div>");
        container.append(questiondiv);
        var ansForm = $("<form></form>");
        questiondiv.append(ansForm);
        for (var a = 0; a < ansValue.length; a++) {
            var radioId = questionDivId + "radio" + a;
            var ansSelection = $('<div class ="radio"> <label class="radio-inline"><input type="radio" id="' + radioId + '" name="optradio">' + ansValue[a] + '</label></div>');
            ansForm.append(ansSelection);
        }
    }
    setTimeout(endGame, 30000);


});

function startTimer(display) {
    var timer = 30;
    setInterval(function () {
        timer--;
        display.html("<h1>" + timer + "</h1>" + "<br> TIME REMAINING");;
    }, 1000);
}

function endGame() {

    var correctAns = 0;
    var incorrect = 0;
    var noAns = 0;
    for (var r = 0; r < questions.length; r++) {
        var checkedRadioNum = 99;
        var questionDivId = "questionNum" + r;
        for (var a = 0; a < 4; a++) {
            var radioId = questionDivId + "radio" + a;
            var isChecked = $("#" + radioId).prop("checked");
            if (isChecked) {
                checkedRadioNum = a;
                break;
            }
        }
        if (checkedRadioNum === questions[r].correct) {
            correctAns++;
        } else {
            incorrect++;
        }

    }
    var scores = $("#scores");
    $("#question-container").hide();
    $("#timer-container").hide();
    scores.append("Correct: " + correctAns);
    scores.append("<br></br>");
    scores.append("Incorrect: " + incorrect);

}














var questions = [{
        Q: "What is the capital of New Zealand?",
        ans: ["Auckland", "Wellington", "Syndey", "Canberra"],
        correct: 1
    },
    {
        Q: "What is the capital of Norway?",
        ans: ["Helsinki", "Oslo", "Stockholm", "Copenhagen"],
        correct: 1
    },
    {
        Q: "What is the capital of China?",
        ans: ["Shanghai", "Pyongyang", "Taipei", "Beijing"],
        correct: 3
    },
    {
        Q: "What is the capital of Indonesia?",
        ans: ["Jakarta", "Mumbai", "Singapore", "Manila"],
        correct: 0
    },
    {
        Q: "What is the capital of Jamaica?",
        ans: ["Havana", "Buenos Aires", "Kingston", "Port-au-Prince"],
        correct: 2
    }
]





// $(document).ready(function () {
//     resetGame();
// });