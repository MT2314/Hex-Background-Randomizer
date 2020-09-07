//DOM Selectors
let color = document.getElementById("container");

//Array of Hexadecimal Bases
let hexArray = [
    "1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"
];


// Making newHex();
let newHex = function call(){
let randomHex = ['#'];

//6 timeloop to get hex values
for (let i=0;i<6;i++) {
            let randomA = (hexArray[Math.floor(Math.random() *hexArray.length) ] );
             randomHex.push(randomA);
    
    };
    hex = (randomHex.join(''));
    color.style.backgroundColor = hex;
    document.getElementById("currentHex").innerHTML=hex;
};

//button listener
document.getElementById("btn").addEventListener("click" , newHex );

