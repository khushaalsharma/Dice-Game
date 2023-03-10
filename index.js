var num1 = Math.random();
num1 = num1*6;
num1 = Math.floor(num1);


var num2 = Math.random();
num2 = num2*6;
num2 = Math.floor(num2);

var array = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

if(num1>num2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if(num1<num2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!!";
}

document.querySelector(".img1").setAttribute("src",array[num1]);
document.querySelector(".img2").setAttribute("src",array[num2]);

