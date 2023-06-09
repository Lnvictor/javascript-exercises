image = document.getElementById('resultado')
image.src = sessionStorage.getItem('resultadoUrl')


runAgain = document.getElementById('run-again')
chooseCar = document.getElementById('choose-car')

runAgain.addEventListener('click', (el) => {
    location.href = './index.html'
})

chooseCar.addEventListener('click', (el) => {
    sessionStorage.removeItem('carChoosed')
    location.href = './login.html'
})