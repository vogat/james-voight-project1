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
    //restore the slot board
    slotResults.slot1 = SYMBOL_LOOKUP.svn;
    slotResults.slot2 = SYMBOL_LOOKUP.svn;
    slotResults.slot3 = SYMBOL_LOOKUP.svn;
    
   

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
    //guards...

    betEl.style.visibility = 'visible';
    initGame();
}

function render() {
    renderDisplay();
    renderWinnings();
    renderControls();
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
    //use the updated array to display slot images
    slot1El.innerHTML = `<img src=${slotResults.slot1.img}>`;
    slot2El.innerHTML = `<img src=${slotResults.slot2.img}>`;
    slot3El.innerHTML = `<img src=${slotResults.slot3.img}>`;
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

    //display stats
    totalEl.innerHTML = `Total: $${money.total}`;
    spentEl.innerHTML = `Spent: $${money.lost}`;
    madeEl.innerHTML = `Earned: $${money.earned}`;

    //call renderMessage and pass in the value of the amount of money won
}

function renderControls() {
    //hide/show the lever button when game is running
    if (money.total < 50) {
        bet50El.style.visibility = 'hidden';
    }
    if (money.total < 20) {
        bet20El.style.visibility = 'hidden';
    }
    if (money.total >= 50) {
        bet50El.style.visibility = 'visible';
    }
    if (money.total >= 20) {
        bet20El.style.visibility = 'visible';
    }
    if (money.total <= 0) {
        betEl.style.visibility = 'hidden';
    }
}