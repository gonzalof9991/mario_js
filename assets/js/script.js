import User  from "./class/user.js";
import utils from "./utils.js";

// User
const user = document.querySelector('.user');





utils.createBricks(55);



const player1 = new User('Gonzalo',45,user);

document.addEventListener('keydown', (event) => {
    var codeValue = event.code;
    console.log(codeValue);
    player1.moveToX(codeValue);
    player1.moveToY(codeValue);
    if (codeValue === 'Space') {
        player1.jump();
    }
  }, false);









