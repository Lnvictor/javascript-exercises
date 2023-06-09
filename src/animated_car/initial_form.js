if (sessionStorage.getItem('carChoosed')){
    location.href = './index.html'
}

form = document.forms[0]

form.addEventListener('submit', (e) => {
    form = document.forms[0]
    if (form.car1.checked){
        sessionStorage.setItem('carChoosed', 'car1')
    }
    else if (form.car2.checked){
        sessionStorage.setItem('carChoosed', 'car2')
    }
    location.reload()
})