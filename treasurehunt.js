


var treasure = Math.floor(Math.random()*9)
var bomb = Math.floor(Math.random()*9)

if(treasure === bomb){
    bomb = Math.floor(Math.random()*9)  
}


const treasureLocation = (square) => {
if(square === treasure){
document.getElementById(square).innerHTML = "💰"
} else if(square === bomb){
    document.getElementById(square).innerHTML = "💣"
setTimeout(() => {alert("You Lose!")
    
}, 100);
setTimeout(() => {document.location.reload()
    
}, 120);
} else(document.getElementById(square).innerHTML = "👎")
}









console.log(treasureLocation(square))
