var answers =
{
    goodAnswers: ["Yes.","Without a doubt.","Signs point to yes."],
    ehhAnswers: ["Concentrate and ask again.","Cannot predict now","Reply hazy, try again"],
    badAnswers: ["My sources say no.","Outlook not so good","Highly doubtful."],
    // theAnswer: [goodAnswers,maybeAnswers,badAnswers],
    pullGoodAnswer: function()
    {
        var gotGoodAnwser = this.goodAnswers[Math.floor(Math.random() * this.goodAnswers.length)];
        alert(gotGoodAnwser); 
    } , 
    pullEhhAnswer: function()
    {
        var gotEhhAnswer = this.ehhAnswers[Math.floor(Math.random() * this.ehhAnswers.length)];
        alert(gotEhhAnswer + "\nThink a bit more positive for your desired results to manifest.");
    } , 
    pullBadAnswer: function()
    {
        var gotBadAnswer = this.badAnswers[Math.floor(Math.random() * this.badAnswers.length)];
        alert(gotBadAnswer + "\nFocus on what you want, and how good it feels, and then ask again.");
    }
}
function tellEm()
{
    var newLine = "\r\n";
    var message = "Instructions: ";
    message += newLine;
    message += "Take a few deep breaths, finding a natural rhythm.";
    message += newLine;
    message += "Clear your mind; let all passing thoughts go with grace.";
    message += newLine;
    message += "Be still and focus on what you want to ask the Magic 8 Ball, then type out your question.";
    alert(message);
}
function conMagic()
{
    var quest = document.forms[0].askMe.value;
    var  questTest = quest.includes("\?");
    switch (questTest)
    {
        case false:
            alert("Ask me in the form of a question; use a '?' to end what you want to ask!");
             break;
        case true:
            var feeling = prompt("How do you feel about it? \r\n Enter 'Good', 'Bad', or 'Ehh'");
            switch (feeling)
            {
                case "Good":
                    answers.pullGoodAnswer();
                    break;
                case "Ehh":
                    answers.pullEhhAnswer();
                    break;
                case "Bad":
                    answers.pullBadAnswer();
                    break;
                default:
                    alert("Please Enter either 'Good', 'Bad', or 'Ehh', for the 8Ball to answer your question");
                    break;        
            }
    } 
}

function hideIns()
{
    // document.getElementById("magicIns").style.visibility = "hidden";
    document.getElementById("magicIns").addEventListener("click", hideIt);
    function hideIt()
    {
        document.getElementById("magicIns").style.opacity = "0.0";
    }
}
function showIns()
{
    document.getElementById("magicIns").addEventListener("click", changeIt);
    function changeIt()
    {
        var derp = document.getElementById("magicIns").style.opacity = "1.0";
    }

}

function magicBack()
{
    document.getElementById("8ball").addEventListener("mouseover", mouseOver);
    document.getElementById("8ball").addEventListener("mouseout", mouseOut);
    
    function mouseOver()
    {
        document.getElementById("8ball").src="m8back.svg";
    }
    function mouseOut()
    {
        document.getElementById("8ball").src="m8_2.svg";
    }
}
// My goal for the rest of this project is to animate the svg, and to display the answers we get on the page in the empty div I have in the html.