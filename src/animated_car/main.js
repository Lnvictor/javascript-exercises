if (!sessionStorage.getItem('carChoosed')){
    location.href = './login.html'
}


const attempts = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]

function choice(){
    index = Math.floor(Math.random() * 10)
    return attempts[index]
}

function move(element){
    toAdd = Number.parseFloat(element.dataset.speed)
    existent = Number.parseFloat(element.offsetLeft)
    newMarginLeft = existent + toAdd

    if (newMarginLeft < 1100)
        element.style.marginLeft = newMarginLeft + "px";
    else{
        alert('acabou o jogo')
        location.reload()
    }
}


elements = document.getElementsByClassName("car");
speeds = [100, 100]
winnerIndex = choice()
speeds[winnerIndex - 1] = 50

console.log(speeds)
setInterval(() => {
    move(elements[0]) 
}, speeds[0])

setInterval(() => {
   move(elements[1]) 
}, speeds[1]);