if (name == '') {

    var name = prompt('Enter your name: ');
}

else if (name != '') {
var randomnumber1, randomnumber2;

randomnumber1 = Math.floor(Math.random() * 6) + 1;

randomnumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('#Player1').innerHTML = name;

document.getElementsByClassName('img1')[0].setAttribute("src", "images/dice" + randomnumber1 + ".png");

document.getElementsByClassName('img2')[0].setAttribute("src", "images/dice" + randomnumber2 + ".png");

if (randomnumber2 > randomnumber1) {

    document.querySelector('h1').innerHTML = "Player 2 Won!!";

}

else if (randomnumber1 == randomnumber2) {
    document.querySelector('h1').innerHTML = "draw";
}

else {
    document.querySelector('h1').innerHTML = name + " Won!!";
}
}
