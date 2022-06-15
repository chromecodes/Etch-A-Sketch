const container = document.querySelector('#container');
slider = document.getElementById('myRange');
output = document.getElementById('sliderValue');
rainbow = document.getElementById('rainbow');
classic = document.getElementById('classic');
eraser = document.getElementById('eraser');
clear = document.getElementById('clear');
pen = document.getElementById('pen');
canvas = document.getElementById('canvas');
//gray = document.getElementById('grayscale');

let v = slider.value;
a = v*v;
c = 0;
active = "";
penColour = pen.value;
bg = canvas.value;
output.innerHTML = slider.value+' x '+slider.value;
createDiv(a,v);

pen.addEventListener('click', function(e){
    pen.addEventListener("change", function(e){
        classic.style.cssText = '';
        rainbow.style.cssText = '';
        eraser.style.cssText = "";
        penColour = e.target.value;
        active = e.target.id;
        listen(e);
    });
});
canvas.addEventListener('click', function(e){
    canvas.addEventListener("change", function(e){
        bg = e.target.value;
        active = e.target.id;
        grids = document.querySelectorAll ('.cell');
            grids.forEach((grid) => {grid.style.cssText = ' background-color:'+bg+';';
            });
        });
        listen();
    });
    

classic.addEventListener('click', function(e){
    classic.style.cssText = 'color: var(--primary-light); background-color: var(--primary-dark);';
    rainbow.style.cssText = '';
  //  gray.style.cssText = "";
    eraser.style.cssText = "";
    penColour = "black";
    active = e.target.id;
    listen();
});
rainbow.addEventListener('click', function(e){
    classic.style.cssText = '';
    rainbow.style.cssText = 'color: var(--primary-light); background-color: var(--primary-dark);';
   // gray.style.cssText = "";
    eraser.style.cssText = '';
    active = e.target.id;
    listen();
});
/*
gray.addEventListener('click', function(e){
    classic.style.cssText = '';
    rainbow.style.cssText = '';
    gray.style.cssText = 'color: var(--primary-light); background-color: var(--primary-dark);';
    eraser.style.cssText = '';
    penColour ='background:rgba(0, 0, 0, 0.1);'
    active = e.target.id;
    listen();
});
*/
eraser.addEventListener('click', function(e){
    classic.style.cssText = '';
    rainbow.style.cssText = '';
//gray.style.cssText = "";
    eraser.style.cssText = 'color: var(--primary-light); background-color: var(--primary-dark);';
    penColour = "aliceblue";
    console.log(penColour);
    active = e.target.id;
    listen();
});

clear.addEventListener('click', function(){
    grids = document.querySelectorAll ('.cell');
    grids.forEach((grid) => {grid.style.cssText = 'transition: background-color 1s ease-in-out; background-color: '+bg+';';
        });
    });


function multiColour(){
    rainBow = ['violet','darkmagenta', 'indigo', 'blueviolet','slateblue','navy','blue', 'aqua','aquamarine', 'springgreen','green', 'yellowgreen','yellow', 'orange','orangered', 'red'];
    if( c == rainBow.length ){
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
    createDiv(a,v);
}

function clearDiv(a){
    for ( let  i = 1; i <= a; i++){
    let div = container.querySelector('div');
    container.removeChild(div);
    }
}

function createDiv(a,v){
    for ( let  i = 1; i <= a; i++){
        const div = document.createElement ('div');
        div.classList.add(`cell`);
        container.appendChild(div);  
        container.style.cssText = `grid-template-columns: repeat(${v}, 1fr)`;
    }
   listen();
}

function listen(){
    console.log(active);
    if(active == "rainbow"){
        grids = document.querySelectorAll ('.cell');
        grids.forEach((grid) => {grid.addEventListener('mouseenter', function(e){
            this.style.cssText = 'background-color: '+ multiColour()+';';
            });
        });
    } 
    /*
    else if (active == "grayscale") {
    grids = document.querySelectorAll ('.cell');
    grids.forEach((grid) => {grid.addEventListener('mouseenter', function(e){
        if (e.target.classList[1] == 'grey'){
            console.log(0);
            console.log(e.target.style.backgroundColor);
            if(e.target.style.backgroundColor == 'rgba(0, 0, 0, 0.1)'){
                console.log(1);
                console.log(e.target.style[9]);

                e.target.style.cssText ='background:rgba(0, 0, 0, 0.3);'

            } else if (e.target.style.backgroundColor == 'rgba(0, 0, 0, 0.4)'){
                e.target.style.cssText = 'background: rgb(0, 0, 0, 0.6);';
                console.log(e.target.style.backgroundColor);
                console.log(2);
            } else if (e.target.style.backgroundColor == 'rgba(0, 0, 0, 0.6)'){
                e.target.style.cssText = 'background: rgb(0, 0, 0, 0.8);';
                console.log(e.target.style.backgroundColor);
                console.log(3);
            } else {
                e.target.style.cssText ='background:rgba(0, 0, 0, 1);';
                console.log(e.target.style);
                console.log(4);
            }
        } 
        else {
            e.target.classList.add('grey');
            e.target.style.cssText ='background:rgba(0, 0, 0, 0.1);';
        }
        });
    });
    } 
    */
    else {
        grids = document.querySelectorAll ('.cell');
        grids.forEach((grid) => {grid.addEventListener('mouseenter', function(e){
            this.style.cssText = 'background-color: '+penColour+';';
        });
        });
    }
}

slider.addEventListener('mousemove', function(){
    let l = slider.value*1.5 ;
    let color = 'linear-gradient(90deg, rgb(128, 0, 0)'+l+'%, rgb(255, 185, 153)'+l+'%)';
    slider.style.background = color;
})

/*
if(e.target.style.backgroundColor == 'rgba(0, 0, 0, 0.1)'){
    e.target.style.cssText = 'background: rgb(0, 0, 0, 0.4);';
    console.log(e.target.style.backgroundColor);
} else if (e.target.style.backgroundColor == 'rgba(0, 0, 0, 0.4)'){
    e.target.style.cssText = 'background: rgb(0, 0, 0, 0.6);';
    console.log(e.target.style.backgroundColor);
} else if (e.target.style.backgroundColor == 'rgba(0, 0, 0, 0.6)'){
    e.target.style.cssText = 'background: rgb(0, 0, 0, 0.8);';
    console.log(e.target.style.backgroundColor);
} else if (e.target.style.backgroundColor == 'rgba(0, 0, 0, 0.8)'){
    e.target.style.cssText = 'background: rgb(0, 0, 0, 1);';
    console.log(e.target.style.backgroundColor);
};*/