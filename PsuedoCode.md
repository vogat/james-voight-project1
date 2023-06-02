# james-voight-project1

Slot machine browser game

Psuedo code:

Slot payouts array

Object array of slot images and user money/cost

event listeners such as pulling the lever and reset

initGame () {
    default values
        starting money, object array, etc.
    render()
}

intitRound() {
    restore the slot board
}

handle event functions for the lever and reset, will call render() at the end. will dedect the cost of betting amount from user total in lever handle function

render() {
    renderDisplay
    renderWinnings
        renderMessage

    renderControls
}

random slot generation (update array of each object with the number of spins, if spins>5, then restart at 1)
    slot1 = random number of spins
    slot2 = slot1 + random number of spins
    slot3 = slot2 + random number of spins
    slot4 = slot3 + random number of spins
    slot5 = slot4 + random number of spins

renderDisplay() {
    call random slot gen function
    use the updated array to display slot images
}

renderWinnings() {
    use slot payouts array to calculate the total amount of money won
    call renderMessage and pass in the value of the amount of money won
    add the winnings to user money total
}

renderMessage(pass in the amount of money won) {
    You won x amount of money! or you lost
}

renderControls() {
    hide/show the lever button when game is running
}




extra add-ins
    update visuals - including buttons such as an actual lever
    betting amount choice
    when reset is clicked, say "are you sure, this will erase all progress"
