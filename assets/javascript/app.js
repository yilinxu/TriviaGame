var maincontent = [
    {
        question : "Vermillion is a shade of which colour?",
        multiple_choice : ["Green", "Blue", "Red", "Yellow"],
        answer: "Red"
    },

    {
        question : "In anatomy, 'plantar' relates to which part of the human body?",
        multiple_choice: ["Foot", "Stomach", "Head", "Hand"],
        answer : "Foot"
    },

    {
        question : "Something annular is in the shape of a what?",
        multiple_choice : ["Leaf", "Ring", "Brick", "Pyramid"],
        answer: "Ring"
    },

    {
        question : "Where is the dactylion?",
        multiple_choice : ["Thumb", "Forefinger", "Middle-finger", "Ring-finger"],
        answer : "Middle-finger"
    },

    {
        question : "A person who's a fysigunkus lacks what?",
        multiple_choice : ["Humor", "Wisdom", "Curiosity", "Temper"],
        answer : "Curiosity"
    },

    {
        question : "What does psithurism describe the sound of?",
        multiple_choice : ["Flowing-water", "Rustling-leaves", "Keyboard-typing", "Hammer-nailing"],
        answer : "Rustling-leaves"
    },

    {
        question : "What's limerance the initial thrill of?",
        multiple_choice : ["Getting-a-job", "Falling-in-love", "Learning-to-write", "Buying-a-house"],
        answer : "Falling-in-love"
    },

    {
        question : "What does napiform mean?",
        multiple_choice : ["Turnip-shaped", "Car-shaped", "Hinge-shaped", "Arch-shaped"],
        answer : "Turnip-shaped"
    }
    ];

var index = 0;
var interval;
var time = 29;
var correct_answer = 0;
var total_answer = 0;
$(document).ready(function(){
    var reset = function(){
    if (total_answer !== maincontent.length){
        $("div.main").empty();

        $("div.main").append("<div class = 'time-remain text-center'>" + "Time Remaining: 30 Seconds" + "</div>");

        $("div.main").append("<br>");

        $("div.main").append("<div class = 'question text-center'>" + maincontent[index].question + "</div>");

        $("div.main").append("<br>");

        $("div.main").append("<div class = 'select-answer'>");

        for (prop in maincontent[index].multiple_choice){
            $("div.select-answer").append("<p class = 'glyphicon glyphicon-unchecked choice'>" 
                + " " + maincontent[index].multiple_choice[prop] + "</p>" + "<br>");
        };

        interval = setInterval (function(){
        $(".time-remain").text("Time Remaining: " + time + " Seconds");
        time --;
        if (time === 0){
            clearInterval(interval);
            $("div.main").empty();
            $("div.main").append("<p class = 'timeup text-center'>" + "time's up" + "</p>" + 
                "<p class = ' timeup text-center'>" + 
                "Correct Answer is : " + maincontent[index].answer + "</p>");
            index++;
            total_answer++;
            time = 29;
            setTimeout(reset, 3000);
        }
        }, 1000); 
    }

    else if(total_answer === maincontent.length){   
        $("div.main").empty();
        $("div.main").append("<p class = 'summary text-center'>" + "Number of correct answers: " + correct_answer + "</p>");
        var incorrect_answer = total_answer - correct_answer;
        $("div.main").append("<p class = 'summary text-center'>" + "Number of incorrect answers: " + incorrect_answer + "</p>");
        $("div.main").append("<br>");
        $("div.main").append("<button class = 'restart btn'>" + "Restart" + "</button>");
        index = 0;
        correct_answer = 0;
        total_answer = 0;
        time = 29;
    }
    };

    reset();

    $(".main").on("click", "p", function(){
        $(this).attr("class", "glyphicon glyphicon-expand choice");
        if ($(this).text().trim() == maincontent[index].answer.trim()){
            clearInterval(interval);
            $("div.main").empty();
            $("div.main").append("<p class = 'correct text-center'>" + "Congratulations on choosing the right answer!"+ "</p>");
            total_answer++;
            correct_answer++; 
            index++; 
            time = 29;
            setTimeout(reset,3000);
        }
        else{
            clearInterval(interval);
            $("div.main").empty();
            $("div.main").append("<p class = 'incorrect text-center'>" + "The selected answer is not correct!"+ "</p>");
            $("div.main").append("<p class = 'incorrect text-center'>" + "Correct Answer is : " + maincontent[index].answer + "</p>");
            total_answer++;
            index++;
            time = 29;
            setTimeout(reset,3000);
        }
    });

    $(".main").on("click", "button", function(){
        reset();
    })
  
});
