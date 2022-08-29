const url = 'http://localhost:3000/pups'

document.addEventListener('DOMContentLoaded', () => {
    getpup()
    goodBadDog()
})

function getpup(){
    fetch(url).then(res => res.json())
    .then(pups => pups.forEach(pup => {
        goodBadDog(pup)
    }))
}

function showPup(pup){
    
    const span = document.createElement('span')
    const dogBar = document.getElementById('dog-bar')
    span.innerHTML = pup.name
    dogBar.appendChild(span)
    span.addEventListener('click', () => {
        pupInfo(pup)
    })
}

function pupInfo(pup){
    const dogInfo = document.getElementById('dog-info')
    let btnText;
    if(pup.isGoodDog == true){
        btnText = 'Good Dog!'
    }else{
        btnText = 'Bad Dog!'
    }
    const info = `<img src='${pup.image}' alt='image' />
            <h2>${pup.name}</h2>
            <button>${btnText}</button>
    `
    dogInfo.innerHTML = info
}

function goodBadDog(pup){
    const btn = document.getElementById('good-dog-filter')

    btn.addEventListener('click', () => {
        if (pup.isGoodDog) {
            showPup(pup)
        }
    })
}