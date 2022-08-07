var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png" );
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png" );

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML= "You Draw";
}

else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML= "Player 1 Wins";

}else{
  document.querySelector("h1").innerHTML= "Player 2 Wins";

};

/*
var arrayOfImages = ['images/dice1.png',
'images/dice2.png',
'images/dice3.png',
'images/dice4.png',
'images/dice5.png',
'images/dice6.png'];


  var rand1 = Math.floor(Math.random() * arrayOfImages.length);
  document.querySelector('.img1').src= arrayOfImages[rand1];

  var rand2 = Math.floor(Math.random() * arrayOfImages.length);
  document.querySelector('.img2').src = arrayOfImages[rand2];

*/
