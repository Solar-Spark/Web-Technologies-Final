const recommendBtn = document.querySelector("#recommend-btn");
const recommendText = document.querySelector("#recommend-txt");
const films = ["Dune", "Red Sparrow", "Moneyball", "Trouble With The Curve 2", "The Dictator", "Haunted Mansion", "Pitch Perfect", "American Made", "Searching", "Ballerina"];

recommendBtn.addEventListener("click", function(){
    recommendText.textContent = "Try to watch " + films[Math.round(Math.random() * films.length)]; 
})