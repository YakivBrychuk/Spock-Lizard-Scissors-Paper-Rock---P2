// Add an event listener for the window 'load' event to ensure that the DOM is fully loaded before executing the script.
window.addEventListener('load', () =>{

    document.querySelectorAll('.user-choice .game-cards').forEach (card => {
        // Adding event listener to the game cards
        card.addEventListener('click', (ev) => {
            // Getting the user choice
            user-choice = getUserChoice(ev);
            gameStart();
    });
})

function gameStart () {

}
// Function to get the user choice
function getuserchoice (element) {
    if (element.nodeName === 'IMG') {
        return element.parentElement.classList[1];
    }
    return element.classList[1];

}