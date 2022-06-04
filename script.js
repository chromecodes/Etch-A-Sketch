const container = document.querySelector('#container')
slider = document.getElementById('myRange');
output = document.getElementById('sliderValue');
rainbow = document.getElementById('rainbow')
classic = document.getElementById('classic')
eraser = document.getElementById('eraser')
clear = document.getElementById('clear')
pen = document.getElementById('pen')
canvas = document.getElementById('canvas')

let v = slider.value;
a = v*v;
c = 0;
active = ""
penColour = pen.value;
bg = canvas.value
console.log(bg);
console.log(canvas.value);
output.innerHTML = slider.value+' x '+slider.value;
createDiv(a,v)

pen.addEventListener('click', function(e){
    pen.addEventListener("change", function(e){
        classic.style.cssText = ''
        rainbow.style.cssText = ''
        eraser.style.cssText = ""
        penColour = e.target.value;
        active = e.target.id
        listen(e);
    });
});
canvas.addEventListener('click', function(e){
    canvas.addEventListener("change", function(e){
        bg = e.target.value
        active = e.target.id
        grids = document.querySelectorAll ('.cell');
            grids.forEach((grid) => {grid.style.cssText = ' background-color:'+bg+';';
            });
        });
        listen();
    });
    

classic.addEventListener('click', function(e){
    classic.style.cssText = ' color: rgb(230, 230, 230); background-color: rgb(0, 0, 0);'
    rainbow.style.cssText = ''
    eraser.style.cssText = ""
    penColour = "black"
    active = e.target.id
    listen();
});
rainbow.addEventListener('click', function(e){
    classic.style.cssText = ' '
    rainbow.style.cssText = 'color: rgb(230, 230, 230); background-color: rgb(0, 0, 0);'
    eraser.style.cssText = ' '
    active = e.target.id
    listen();
});

eraser.addEventListener('click', function(e){
    classic.style.cssText = ' '
    rainbow.style.cssText = ''
    eraser.style.cssText = ' color: rgb(230, 230, 230); background-color: rgb(0, 0, 0);'
    penColour = "aliceblue"
    console.log(penColour);
    active = e.target.id
    listen();
});
clear.addEventListener('click', function(){
    grids = document.querySelectorAll ('.cell');
    grids.forEach((grid) => {grid.style.cssText = 'transition: background-color 1s ease-in-out; background-color: '+bg+';';
        });
    });


function multiColour(){
    rainBow = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
    if( c == 7 ){
        c = 0;
    };
    while( c < rainBow.length){
        let pen = rainBow[c];
        c++;
        return pen;
  }; 
}



slider.oninput = function(){
    clearDiv(a);
    v = this.value;
    a = v**2;
    output.innerHTML = this.value+' x '+this.value;
    createDiv(a,v)
}

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
        container.style.cssText = `grid-template-columns: repeat(${v}, 1fr)`
    }
   listen()
}

function listen(){
    if(active == "rainbow"){
        grids = document.querySelectorAll ('.cell');
        grids.forEach((grid) => {grid.addEventListener('mouseenter', function(e){
            e.target.style.cssText = 'background-color: '+ multiColour()+';';
            });
        });
} else {
    grids = document.querySelectorAll ('.cell');
    grids.forEach((grid) => {grid.addEventListener('mouseenter', function(e){
        e.target.style.cssText = 'background-color: '+ penColour+';';
    });
    });
}
}


function run(e){
   e.target.style.cssText = 'background-color: black;'
}


slider.addEventListener('mousemove', function(){
    let l = slider.value*1.5 ;
    let color = 'linear-gradient(90deg, rgb(0,0,0)'+l+'%, rgb(211, 211, 211)'+l+'%)'
    slider.style.background = color;
})


