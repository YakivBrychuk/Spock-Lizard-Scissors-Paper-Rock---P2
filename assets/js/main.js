function game() {
    const actions = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    
    // Add an event listener for the window 'load' event to ensure that the DOM is fully loaded before executing the script.
    window.addEventListener('load', () => {

        let userchoice = '';

        document.querySelectorAll('.user-choice .game-cards').forEach (card => {
            // Adding event listener to the game cards
            card.addEventListener('click', (ev) => {
                // Getting the user choice
                userchoice = getuserchoice(ev.target);
        console.log(userchoice);
            
            gameStart();
        });
    })

    function gameStart () {

    }

    // Function to get the user choice
    function getuserchoice (target) {
        if (target.nodeName === 'IMG') {
            return target.parentElement.classList[1];
        }
        return target.classList[1];

    }

    function getchoicecomputer() {
        return actions[Math.floor(Math.random() * actions.length)];
    }

});
}