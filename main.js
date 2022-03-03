const $ = (selector) => document.querySelector(selector)
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const balance = $('#balance')
const result  = $('#result')
const bet     = $('#bet')
const number  = $('#number')

const submit  = $('.btn.btn-success')

let money  =  100

updateUI('')

submit.onclick = () => {
    let userBet     = +bet.value
    let userNumber  = +number.value 

    let error = checkData(userBet, userNumber)

    if (error == '') {

        let guess = random(0, 6)

        if (playGame(userBet, userNumber, guess)) {
            updateUI('Yutdingiz!')
        }
        else {
            updateUI('Yutqizdingiz, son ' + guess + ' edi :(')
        }
    }
    else {
        updateUI(error)
    }

    clearEntries()
}

function checkData(userBet, userNumber) {

    if (userBet === 0 || userNumber === 0 || isNaN(userBet) || isNaN(userNumber)) {
        return 'Ma`lumotlar xa`to kiritildi'
    }
    else if (userBet < 5) {
        return '$5 dan kam qabul qilinmaydi'
    }
    else if (userNumber < 0 || userNumber > 6) {
        return '0 dan 6 gacha son!'
    }
    else if (userBet > money) {
        return 'Mablag`ingiz yetarli emas!'
    }

    return ''
}

function playGame(userBet, userNumber, guess) {

    if (guess === userNumber) {
        money += userBet * 1.25
        return true
    }

    money -= userBet
    return false
}

function clearEntries() {
    bet.value = ''
    number.value = ''
}

function updateUI(message) {
    balance.value = `$${money}`
    result.innerText  = `${message}`
}