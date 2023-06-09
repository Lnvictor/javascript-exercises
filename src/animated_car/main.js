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
        console.log(element.id[3])
        if (element.id == sessionStorage.getItem('carChoosed')){
            sessionStorage.setItem('resultadoUrl', 'https://www.opovo.com.br/_midias/png/2020/07/24/750x500/1_baianinho-13114270.png')
        }
        else{
            sessionStorage.setItem('resultadoUrl', 'https://f.i.uol.com.br/fotografia/2021/12/10/163916169061b39f5a2e688_1639161690_3x2_md.jpg')
        }
        location.href = './result.html'
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