let r = Math.round(Math.random()*100)
document.querySelector('#unicID').innerText = '00' + r 

// press on the btn change -> add inputs after <p> and btns 'done' -> inputs to inveese, info input -> span

let nick = document.querySelector('#nickname')
let job = document.querySelector('#job')
let lorem = document.querySelector('#lorem')
let colour = document.querySelector('#colour')
let team = document.querySelector('#team')
let birth = document.querySelector('#birth')
let pass = document.querySelector('#password')

document.querySelector('#toChange').onclick = function() {
    nick.hidden = true
    job.hidden = true
    lorem.hidden = true
    document.querySelector('.inv-job').style.display = "block"
    document.querySelector('.inv-nick').style.display = "block"
    document.querySelector('.inv-lorem').style.display = "block"
    document.querySelector('.inv-colour').style.display = "block"
    document.querySelector('.inv-team').style.display = "block"
    document.querySelector('.inv-birth').style.display = "block"
    document.querySelector('.inv-password').style.display = "block"
}

document.querySelector('#nNickBtn').onclick = changeNickF
document.querySelector('#nJobBtn').onclick = changeJobF
document.querySelector('#nLoremBtn').onclick = changeLoremF
document.querySelector('#nColourBtn').onclick = changeColourF
document.querySelector('#nTeamBtn').onclick = changeTeamF
document.querySelector('#nDateBtn').onclick = changeBirthF
document.querySelector('#nPasswordBtn').onclick = changePassF

function changeNickF () {
    nick.hidden = false
    document.querySelector('.inv-nick').style.display = "none"
    nick.innerText = document.querySelector('#newNick').value
}
function changeJobF () {
    job.hidden = false
    document.querySelector('.inv-job').style.display = "none";
    job.innerText = document.querySelector('#newJob').value
}
function changeLoremF () {
    lorem.hidden = false
    document.querySelector('.inv-lorem').style.display = "none";
    lorem.innerText = document.querySelector('#newLorem').value
}
function changeColourF () {
    colour.hidden = false
    document.querySelector('.inv-colour').style.display = "none";
    colour.innerText = document.querySelector('#newColour').value
}
function changeTeamF () {
    team.hidden = false
    document.querySelector('.inv-team').style.display = "none";
    team.innerText = document.querySelector('#newTeam').value
}
function changeBirthF () {
    birth.hidden = false
    document.querySelector('.inv-birth').style.display = "none";
    birth.innerText = document.querySelector('#newBirth').value
}
function changePassF () {
    pass.hidden = false
    document.querySelector('.inv-password').style.display = "none";
    pass.innerText = document.querySelector('#newPassword').value
}
// document.querySelector('#').onclick =