let teamarr = ['RCB', 'CSK', 'MI', 'DC', 'RR', 'SRH', 'KKR', 'LSG', 'GT', 'PBKS'];

let btn = document.querySelector('button')
let box = document.querySelector('#box')
let flag = 0
btn.addEventListener('click', function(){
    if(flag == 0){
        let team = Math.floor(Math.random()*teamarr.length);
        let winner = teamarr[team];
        box.innerHTML = winner
        btn.innerHTML = 'Reset'
        flag = 1
    }else{
        flag = 0
        btn.innerHTML = 'Guess'
        box.innerHTML = '***'
    }
})