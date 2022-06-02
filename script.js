function createDiv(a){

    for ( let  i = 1; i <= a; i++){
        const div = document.createElement ('div');
        div.classList.add(`cell`);
        div.classList.add(`${i}`);
        container.appendChild(div);
        
    }
}
function formGrid(v){
    container.style.cssText = `grid-template-columns: repeat(${v}, 1fr)`
}
const container = document.querySelector('#container')

let v = window.prompt('enter',0)
a = v*v
createDiv(a)
formGrid(v)