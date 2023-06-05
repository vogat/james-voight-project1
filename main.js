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

/*----- app's state (variables) -----*/
let money;
let slotResults;

/*----- cached element references -----*/
const slot1El = document.getElementById('#one')
const slot2El = document.getElementById('#two')
const slot3El = document.getElementById('#three')

/*----- event listeners -----*/
//event listeners such as pulling the lever and reset
document.querySelector('#bet').addEventListener('click', handleBet);

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
    console.log(slotResults.slot1.img)

        //starting money, object array, etc.
    slot1El.innerHTML = `<img src=${slotResults.slot1.img}>`;
    slot2El.src = slotResults.slot2.img;
    slot3El.src = slotResults.slot3.img;
}

function intitRound() {
    //restore the slot board
    slotResults.slot1 = SYMBOL_LOOKUP.svn;
    slotResults.slot2 = SYMBOL_LOOKUP.svn;
    slotResults.slot3 = SYMBOL_LOOKUP.svn;

    rndSlot()

    for(let i=0; i<slot1; i++) {

    }
}

//handle event functions for the lever and reset, will call render() at the end. will dedect the cost of betting amount from user total in lever handle function
function handleBet(evt) {
    //guards...

    if(evt.target.innerText === 'bet $5') {
        money.total -= 5;
        intitRound();
    } else return;
}

function render() {
    renderDisplay()
    renderWinnings()
    renderControls()
}

//random slot generation (update array of each object with the number of spins, if spins>5, then restart at 1)
function rndSlot() {
        slotResults.slot1 = SYMBOL_LOOKUP[randomIdx()],
        slotResults.slot2 = slot1 + SYMBOL_LOOKUP[randomIdx()],
        slotResults.slot3 = slot2 + SYMBOL_LOOKUP[randomIdx()]
}

function randomIdx() {
    const sym = Object.keys(SYMBOL_LOOKUP);
    const rndIdx = Math.floor(Math.random() * sym.length);
    return sym[rndIdx];
}

function renderDisplay() {
    //call random slot gen function
    //use the updated array to display slot images
}

function renderWinnings() {
    //use slot payouts array to calculate the total amount of money won
    //call renderMessage and pass in the value of the amount of money won
    //add the winnings to user money total
}

function renderMessage() {
    //You won x amount of money! or you lost
}

function renderControls() {
    //hide/show the lever button when game is running
}