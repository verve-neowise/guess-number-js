const $ = (selector) => document.querySelector(selector)

const balance = $('#balance')
const result  = $('#result')
const bet     = $('#bet')
const number  = $('#number')

const submit = $('.btn.btn-success')

const toastBtn = $('#liveToastBtn')

let money   = 100
let message = "Son kiriting"
let random  = 0
let guess   = 0

updateUI()

submit.onclick = () => {
    let userBet     = +bet.value
    let userNumber  = +number.value 

    if (userBet === 0 || userNumber === 0 || isNaN(userBet) || isNaN(userNumber)) {
        message = 'Ma`lumotlar xa`to kiritildi'
    }
    else if (userBet < 5) {
        message = '$5 dan kam qabul qilinmaydi'
    }
    else if (userNumber < 0 || userNumber > 6) {
        message = '0 dan 6 gacha son!'
    }
    updateUI()
}

function checkData()

function updateUI() {
    balance.innerText = `$${balance}`
    result.innerText  = `${message}`
}