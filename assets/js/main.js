function game() {
    const actions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    //Variables to store the user and computer choices 
    let userchoice = '';
    let computerChoice = '';
    //Selecting the DOM elements for user choice and choosen option to display 
    const userChoiceElement = document.querySelector('.user-choice');
    const choosenElement = document.querySelector('.chosen-main');
    const userChosenElement = choosenElement.querySelector('.user-chosen');
    const computerChosenElement = choosenElement.querySelector('.computer-choice');
    const resultElement = choosenElement.querySelector('.result');
    const resultTitleElement = resultElement.querySelector('.title');
    


    let scoreElement = document.querySelector('.score-number');
    // Initialize current score
    let currentScore = 0;

    // Add an event listeners for the window 'load' event to ensure that the DOM is fully loaded before executing the script.
    window.addEventListener('load', () => {
        // Retrieve the score from local storage
        retrieveScoreFromLocalStorage();

        document.querySelectorAll('.user-choice .game-cards').forEach (card => {
            // Adding event listener to the game cards
            card.addEventListener('click', (ev) => {
                // Getting the user choice
                userchoice = getuserchoice(ev.target);
                // Getting the computer choice
                computerChoice = getchoicecomputer();   

                gameStart();
            });
        });

        resultElement.querySelector('button').addEventListener('click', tryAgain);

    });
    //Function to handle the game start
    function gameStart () {
        calculateWinner(userchoice, computerChoice);
        userChoiceElement.classList.add('hidden');
        choosenElement.classList.remove('hidden');

    // Set the user and computer choices in the result section
        userChosenElement.innerHTML = getImageElement(userchoice);
        computerChosenElement.innerHTML = getImageElement(computerChoice);

    }

    //function to show the user choice and computer choice in result section
    function getImageElement(choice) {
        // Create the outer div with the 'game-cards' class and the specific choice class (e.g., 'rock')
        let gameCardDiv = document.createElement('div');
        gameCardDiv.className = `game-cards ${choice}`;
    
        // Create the img element
        let imgElement = document.createElement('img');
        imgElement.src = `assets/images/${choice}-svgrepo-com.svg`;
        imgElement.alt = choice;
    
        // Append the img to the gameCardDiv
        gameCardDiv.appendChild(imgElement);
    
        // Return the outer div's HTML
        return gameCardDiv.outerHTML;
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
    
    // Function to deternine the winner

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

    //function to calculate & update the score
    function calculateScore(roundResult) {
        currentScore += roundResult;
        updateScoreBoard();
    }

    //function to update the score board UI
    function updateScoreBoard() {
        scoreElement.innerText = currentScore;
        window.localStorage.setItem('gameScore', currentScore);
    }

    //function to retrieve the score from local storage
    function retrieveScoreFromLocalStorage() {
        const score = +window.localStorage.getItem('gameScore') || 0;
        currentScore = score;
        }
    
    //function to try again
    function tryAgain() {
        userChoiceElement.classList.remove('hidden');
        choosenElement.classList.add('hidden');
    }

    //modal
    const modal = document.querySelector('.modal');
    const rulesBtn = document.querySelector('.rules-btn');
    const closeModal = document.querySelector('.close-img');
    const modalBg = document.querySelector('.modal-behind');

    rulesBtn.addEventListener('click', () => {
        modal.classList.add('active');
        modalBg.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        modalBg.classList.remove('active');
    });

    modalBg.addEventListener('click', (ev) => {
        if (ev.target === modalBg) {
            modal.classList.remove('active');
            modalBg.classList.remove('active');
        }
        
    });


    

}

game(); 