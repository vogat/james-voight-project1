/*---- constants ----*/
//Slot payouts array
const PAYOUTS = {
    svn3: 150,
    svn2: 20,
    svn1: 5,
    fruit3: 50 
}
//Object array of slot images and user money/cost
const SYMBOL_LOOKUP = {
    svn: {img: 'https://images2.imgbox.com/2e/2b/ParwUXPv_o.png'},
    c: {img: 'https://images2.imgbox.com/ce/fd/iWb1vUJi_o.png'},
    o: {img: 'https://images2.imgbox.com/b8/a2/xmr6TkYG_o.png'},
    w: {img: 'https://images2.imgbox.com/b2/cd/JlGesziM_o.png'},
    g: {img: 'https://images2.imgbox.com/ff/72/JhPrhfda_o.png'}
}

//array for betting amount
const BETS = [5, 20, 50];

/*----- app's state (variables) -----*/
let money;
let slotResults;
let betChoice;
let running = 0;

/*----- cached element references -----*/
const slot1El = document.getElementById('one');
const slot2El = document.getElementById('two');
const slot3El = document.getElementById('three');

const totalEl = document.getElementById('total');
const spentEl = document.getElementById('spent');
const madeEl = document.getElementById('made');
const messageEl = document.getElementById('message');

const betEl = document.getElementById('bet');
const bet20El = document.getElementById('bet20');
const bet50El = document.getElementById('bet50');

/*----- event listeners -----*/
//event listeners such as pulling the lever and reset
document.querySelector('#bet').addEventListener('click', handleBet);
document.querySelector('#bet20').addEventListener('click', handleBet20);
document.querySelector('#bet50').addEventListener('click', handleBet50);
document.querySelector('#reset').addEventListener('click', handleReset);

/*----- functions -----*/
initGame();

function initGame () {
    money = {
        total: 25,
        earned: 0,
        lost: 0
    }

    slotResults = {
        slot1: '',
        slot2: '',
        slot3: ''
    }

    slotResults.slot1 = SYMBOL_LOOKUP.svn;
    slotResults.slot2 = SYMBOL_LOOKUP.svn;
    slotResults.slot3 = SYMBOL_LOOKUP.svn;

        //starting money, object array, etc.
    slot1El.innerHTML = `<img src=${slotResults.slot1.img}>`;
    slot2El.innerHTML = `<img src=${slotResults.slot2.img}>`;
    slot3El.innerHTML = `<img src=${slotResults.slot3.img}>`;

    totalEl.innerHTML = `Total: $${money.total}`;
    spentEl.innerHTML = `Spent: $${money.lost}`;
    madeEl.innerHTML = `Earned: $${money.earned}`;
    messageEl.innerHTML = ``;

    renderControls();
}

function initRound() {   
    messageEl.innerText = '';

    render()
}

//handle event functions for the lever and reset, will call render() at the end. will dedect the cost of betting amount from user total in lever handle function
function handleBet(evt) {
    money.total -= 5;
    money.lost += 5;
    betChoice = 1;
    initRound();
}
function handleBet20(evt) {
    money.total -= 20;
    money.lost += 20;
    betChoice  = 4;
    initRound();
}
function handleBet50(evt) {
    money.total -= 50;
    money.lost += 50;
    betChoice = 10;
    initRound();
}

function handleReset(evt) {
    initGame();
}

function render() {
    renderDisplay();
}

//random slot generation (update array of each object with the number of spins, if spins>5, then restart at 1)
function rndSlot() {
        slotResults.slot1 = SYMBOL_LOOKUP[randomIdx()],
        slotResults.slot2 = SYMBOL_LOOKUP[randomIdx()],
        slotResults.slot3 = SYMBOL_LOOKUP[randomIdx()]
}

function randomIdx() {
    const sym = Object.keys(SYMBOL_LOOKUP);
    const rndIdx = Math.floor(Math.random() * sym.length);
    return sym[rndIdx];
}

function renderDisplay() {
    //call random slot gen function
    rndSlot()

    betEl.style.visibility = 'hidden';
    bet20El.style.visibility = 'hidden';
    bet50El.style.visibility = 'hidden';
    //display changing slot images
    Switch1();
}

function slotLoops() {
    setTimeout(Switch1, 0);
}

function finalSlots() {
    slot1El.innerHTML = `<img src=${slotResults.slot1.img}>`;
    slot2El.innerHTML = `<img src=${slotResults.slot2.img}>`;
    slot3El.innerHTML = `<img src=${slotResults.slot3.img}>`;
}

function Switch1(){
    slot1El.innerHTML = `<img src=${SYMBOL_LOOKUP.svn.img}>`;
    slot2El.innerHTML = `<img src=${SYMBOL_LOOKUP.svn.img}>`;
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.svn.img}>`;
    setTimeout(Switch2, 150);
}
function Switch2(){
    slot1El.innerHTML = `<img src=${SYMBOL_LOOKUP.c.img}>`;
    slot2El.innerHTML = `<img src=${SYMBOL_LOOKUP.c.img}>`;
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.c.img}>`;
    setTimeout(Switch3, 150);
}
function Switch3(){
    slot1El.innerHTML = `<img src=${SYMBOL_LOOKUP.o.img}>`;
    slot2El.innerHTML = `<img src=${SYMBOL_LOOKUP.o.img}>`;
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.o.img}>`;
    setTimeout(Switch4, 150);
}
function Switch4(){
    slot1El.innerHTML = `<img src=${SYMBOL_LOOKUP.w.img}>`;
    slot2El.innerHTML = `<img src=${SYMBOL_LOOKUP.w.img}>`;
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.w.img}>`;
    setTimeout(Switch5, 150);
}
function Switch5(){
    slot1El.innerHTML = `<img src=${SYMBOL_LOOKUP.g.img}>`;
    slot2El.innerHTML = `<img src=${SYMBOL_LOOKUP.g.img}>`;
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.g.img}>`;
    setTimeout(Switch6, 150);
}
function Switch6(){
    slot1El.innerHTML = `<img src=${slotResults.slot1.img}>`;
    slot2El.innerHTML = `<img src=${SYMBOL_LOOKUP.svn.img}>`;
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.svn.img}>`;
    setTimeout(Switch7, 150);
}
function Switch7(){
    slot2El.innerHTML = `<img src=${SYMBOL_LOOKUP.c.img}>`;
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.c.img}>`;
    setTimeout(Switch8, 150);
}
function Switch8(){
    slot2El.innerHTML = `<img src=${SYMBOL_LOOKUP.o.img}>`;
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.o.img}>`;
    setTimeout(Switch9, 150);
}
function Switch9(){
    slot2El.innerHTML = `<img src=${SYMBOL_LOOKUP.w.img}>`;
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.w.img}>`;
    setTimeout(Switch10, 150);
}
function Switch10(){
    slot2El.innerHTML = `<img src=${SYMBOL_LOOKUP.g.img}>`;
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.g.img}>`;
    setTimeout(Switch11, 150);
}
function Switch11(){
    slot2El.innerHTML = `<img src=${slotResults.slot2.img}>`;
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.svn.img}>`;
    setTimeout(Switch12, 150);
}
function Switch12(){
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.c.img}>`;
    setTimeout(Switch13, 150);
}
function Switch13(){
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.o.img}>`;
    setTimeout(Switch14, 150);
}
function Switch14(){
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.w.img}>`;
    setTimeout(Switch15, 150);
}
function Switch15(){
    slot3El.innerHTML = `<img src=${SYMBOL_LOOKUP.g.img}>`;
    setTimeout(Switch16, 150);
}
function Switch16(){
    slot3El.innerHTML = `<img src=${slotResults.slot3.img}>`;

    //call fcn render winnings
    renderWinnings();
}

function renderWinnings() {
    //use slot payouts array to calculate the total amount of money won
    if (slotResults.slot1 === SYMBOL_LOOKUP.svn && slotResults.slot2 === SYMBOL_LOOKUP.svn && slotResults.slot3 === SYMBOL_LOOKUP.svn) {
        money.total += (PAYOUTS.svn3 * betChoice);
        money.earned += (PAYOUTS.svn3 * betChoice);
        messageEl.innerHTML = `You won $${PAYOUTS.svn3 * betChoice}!!!`;
    } else if ((slotResults.slot1 === SYMBOL_LOOKUP.svn && slotResults.slot2 === SYMBOL_LOOKUP.svn) || (slotResults.slot1 === SYMBOL_LOOKUP.svn && slotResults.slot3 === SYMBOL_LOOKUP.svn) || (slotResults.slot2 === SYMBOL_LOOKUP.svn && slotResults.slot3 === SYMBOL_LOOKUP.svn)) {
        money.total += (PAYOUTS.svn2 * betChoice);
        money.earned += (PAYOUTS.svn2 * betChoice);
        messageEl.innerHTML = `You won $${PAYOUTS.svn2 * betChoice}!!!`;
    } else if (slotResults.slot1 === SYMBOL_LOOKUP.svn || slotResults.slot2 === SYMBOL_LOOKUP.svn || slotResults.slot3 === SYMBOL_LOOKUP.svn) {
        money.total += (PAYOUTS.svn1 * betChoice);
        money.earned += (PAYOUTS.svn1 * betChoice);
        messageEl.innerHTML = `You won $${PAYOUTS.svn1 * betChoice}!!!`;
    } else if (slotResults.slot1 === SYMBOL_LOOKUP.c && slotResults.slot2 === SYMBOL_LOOKUP.c && slotResults.slot3 === SYMBOL_LOOKUP.c) {
        money.total += (PAYOUTS.fruit3 * betChoice);
        money.earned += (PAYOUTS.fruit3 * betChoice);
        messageEl.innerHTML = `You won $${PAYOUTS.fruit3 * betChoice}!!!`;
    } else if (slotResults.slot1 === SYMBOL_LOOKUP.o && slotResults.slot2 === SYMBOL_LOOKUP.o && slotResults.slot3 === SYMBOL_LOOKUP.o) {
        money.total += (PAYOUTS.fruit3 * betChoice);
        money.earned += (PAYOUTS.fruit3 * betChoice);
        messageEl.innerHTML = `You won $${PAYOUTS.fruit3 * betChoice}!!!`;
    } else if (slotResults.slot1 === SYMBOL_LOOKUP.w && slotResults.slot2 === SYMBOL_LOOKUP.w && slotResults.slot3 === SYMBOL_LOOKUP.w) {
        money.total += (PAYOUTS.fruit3 * betChoice);
        money.earned += (PAYOUTS.fruit3 * betChoice);
        messageEl.innerHTML = `You won $${PAYOUTS.fruit3 * betChoice}!!!`;
    } else if (slotResults.slot1 === SYMBOL_LOOKUP.g && slotResults.slot2 === SYMBOL_LOOKUP.g && slotResults.slot3 === SYMBOL_LOOKUP.g) {
        money.total += (PAYOUTS.fruit3 * betChoice);
        money.earned += (PAYOUTS.fruit3 * betChoice);
        messageEl.innerHTML = `You won $${PAYOUTS.fruit3 * betChoice}!!!`;
    } else {
        money.total += 0
        messageEl.innerHTML = `You lost`;
    }

    console.log(money.total)
    if (money.total <= 0) {
        totalEl.innerHTML = `Total: $${money.total}`;
        messageEl.innerText = 'You lost. click reset to play again.';
        renderControls();
        return;
    } 
    renderControls();
    //display stats
    totalEl.innerHTML = `Total: $${money.total}`;
    spentEl.innerHTML = `Spent: $${money.lost}`;
    madeEl.innerHTML = `Earned: $${money.earned}`;

    //call renderMessage and pass in the value of the amount of money won
}

function renderControls() {
    //hide/show the lever button when game is running
    
    if (money.total >= 50) {
        bet50El.style.visibility = 'visible';
    }
    if (money.total < 50) {
        bet50El.style.visibility = 'hidden';
        console.log(money.total)
    }
    if (money.total >= 20) {
        bet20El.style.visibility = 'visible';
    }
    if (money.total < 20) {
        bet20El.style.visibility = 'hidden';
    }
    if (money.total > 0) {
        betEl.style.visibility = 'visible';
        console.log('v')
    }
    if (money.total <= 0) {
        betEl.style.visibility = 'hidden';
        console.log('h')
    }    
}