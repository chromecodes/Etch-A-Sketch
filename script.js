const container = document.querySelector('#container')
slider = document.getElementById('myRange');
output = document.getElementById('sliderValue');

let v = slider.value;
a = v*v;
output.innerHTML = slider.value+' x '+slider.value;
slider.oninput = function(){
   // clearDiv(a);
    v = this.value;
    a = v**2;
    output.innerHTML = this.value+' x '+this.value;
    createDiv(a,v)
}


createDiv(a,v)
function clearDiv(a){
    for ( let  i = 1; i <= a; i++){
    let div = container.querySelector('div')
    container.removeChild(div)
    }
}



function createDiv(a,v){
    
    for ( let  i = 1; i <= a; i++){
        const div = document.createElement ('div');
        div.classList.add(`cell`);
        div.classList.add(`${i}`);
        container.appendChild(div);  
        console.log(v)
        console.log(a)
        container.style.cssText = `grid-template-columns: repeat(${v}, 1fr)`
    }
    console.log(v)
   
    
}

const grids = document.querySelectorAll ('.cell')

console.log(grids)
function run(e){
   console.log(e.target);
   e.target.style.cssText = 'background-color: black;'
}/*
grids.forEach((grid) => {grid.addEventListener('mouseenter', run );
});*/

slider.addEventListener('mousemove', function(){
    let l = slider.value*1.5 ;
    let color = 'linear-gradient(90deg, rgb(0,0,0)'+l+'%, rgb(211, 211, 211)'+l+'%)'
    slider.style.background = color;

})
