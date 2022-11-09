function knowAddress(direction){
    let clearAddress = direction.replace('Arrow', '').toLowerCase() || '';
    clearAddress = (clearAddress === 'up') ? 'top' : (clearAddress === 'down') ? 'bottom' : clearAddress;
    return clearAddress;
}


function createBricks(amount = 20){
    const bricks = document.querySelector('.bricks');
    for (let index = 0; index < amount; index++) {
        bricks.innerHTML  += `
            <div class="brick" style="left:${50 * index}px";></div>
        `
    }
}

export default {
    knowAddress,
    createBricks
}