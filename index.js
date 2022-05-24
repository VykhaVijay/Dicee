var randomNumber1 = Math.floor(Math.random()*6 + 1); //+1 because 1 is exclusive [0,1)
// var image = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png",
//"images/dice6.png"]; maybe one way

document.querySelector(".img1").setAttribute("src", "dice"+ randomNumber1 +".png");

var randomNumber2 = Math.floor(Math.random()*6 + 1);

//change image
document.querySelector(".img2").setAttribute("src", "dice"+ randomNumber2+".png");

//change text
if(randomNumber1===6)
{
    //document.getElementsByTagName("h1")[0].innerText = "Player 1 Wins"; correct but want to use queryselector 
    document.querySelector("h1").innerText = "🚩Player 1 Wins!";
}
if(randomNumber2===6)
{
    document.querySelector("h1").innerText = "Player 2 Wins!🚩";
}
if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerText = "Draw!";
}
