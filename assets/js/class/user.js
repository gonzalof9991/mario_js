import utils from "../utils.js";

class User {
    constructor(name,age,element){
        this.name = name;
        this.age = age;
        this.counterX = 0;
        this.counterY = 0;
        this.element = element;
        this.element.style.background = 'green';
        this.element.innerHTML = this.name;
    }

    moveToX(type, strong = 10){
        const newType = utils.knowAddress(type);
        if (newType === 'right') {
            this.counterX += strong;
        }
        else if (newType === 'left') {
            this.counterX -= strong;
        }
        this.element.style.left = `${this.counterX}px`;
    }

    moveToY(type, strong = 10){
        const newType = utils.knowAddress(type);
        if (newType === 'top') {
            this.counterY -= strong;
        }
        else if (newType === 'bottom') {
            this.counterY += strong;
        }
        this.element.style.top = `${this.counterY}px`;
    }

    jump(){
        this.moveToY('up',100);
        setTimeout(() => {
            this.moveToY('down',100)
        },1000)
        
    }
}


export default User;