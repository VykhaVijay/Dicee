var randomNumber1 = Math.floor(Math.random()*6 + 1); //+1 because 1 is exclusive [0,1)

document.querySelector(".img1").setAttribute("src", "dice"+ randomNumber1 +".png");

var randomNumber2 = Math.floor(Math.random()*6 + 1);

document.querySelector(".img2").setAttribute("src", "dice"+ randomNumber2+".png");

if(randomNumber1===6)
{ 
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
