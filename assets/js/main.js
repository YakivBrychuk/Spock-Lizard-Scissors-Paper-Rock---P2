function game() {
    const actions = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    
    let userchoice = '';
    let computerChoice = '';
    const userChoiceElement = document.querySelector('.user-choice');
    const choosenElement = document.querySelector('.choosen-main');


    // Add an event listener for the window 'load' event to ensure that the DOM is fully loaded before executing the script.
    window.addEventListener('load', () => {

        

        document.querySelectorAll('.user-choice .game-cards').forEach (card => {
            // Adding event listener to the game cards
            card.addEventListener('click', (ev) => {
                // Getting the user choice
                userchoice = getuserchoice(ev.target);
                // Getting the computer choice
                computerChoice = getchoicecomputer();
        
            
                gameStart();
            })
        })

    })
    
    function gameStart () {
        calculateWinner(userchoice, computerChoice);

    }

    // Function to get the user choice
    function getuserchoice (target) {
        if (target.nodeName === 'IMG') {
            return target.parentElement.classList[1];
        }
        return target.classList[1];

    }
    // Function to get the computer choice
    function getchoicecomputer() {
        return actions[Math.floor(Math.random() * actions.length)];
    }
    // Function to calculate the winner
    function calculateWinner(user, comp) {
        let result = getwinner(user, comp);
        console.log("Result:", result);
        switch (result) {
            case 'user':
                resultTitleElement.innerText = 'You win';
                calculateScore(1);
                break;
            case 'computer':
                resultTitleElement.innerText = 'You lose';
                calculateScore(-1);
                break;
            case 'Draw':
                resultTitleElement.innerText = 'Tie';
                // No score change on draw
                break;
                
        }
    }
    // Function to calculate the win 
    function getwinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Draw';
        }
        if (userChoice === 'rock') {
            if (computerChoice === 'paper' || computerChoice === 'spock') {
                return 'computer';
            }
            return 'user';
        }
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors' || computerChoice === 'lizard') {
                return 'computer';
            }
            return 'user';
        }
        if (userChoice === 'scissors') {
            if (computerChoice === 'rock' || computerChoice === 'spock') {
                return 'computer';
            }
            return 'user';
        }
        if (userChoice === 'lizard') {
            if (computerChoice === 'rock' || computerChoice === 'scissors') {
                return 'computer';
            }
            return 'user';
        }
        if (userChoice === 'spock') {
            if (computerChoice === 'paper' || computerChoice === 'lizard') {
                return 'computer';
            }
            return 'user';
        }
    }


    

}

game(); 