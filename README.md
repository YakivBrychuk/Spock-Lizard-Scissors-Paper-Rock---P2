# Spock, Lizard, Scissors, Paper, Rock 

Rock, Paper, Scissors, Lizard, Spock (abbreviated as RPSLS) elevates the traditional Rock, Paper, Scissors (RPS) game with additional complexity. In RPSLS, each option can defeat two others - for instance, Rock overcomes both Scissors and Lizard, unlike in RPS where each option only beats one other (e.g., Rock defeats Scissors).

This game features a series of five rounds pitting the player against the computer, offering a chance to become accustomed to the nuances of RPSLS. The computer's selections are randomly generated, ensuring unbiased outcomes and a fair playing experience. It's a contest of chance where either the player or the computer could emerge victorious!

Designed for both adults and children, this game is an engaging way to understand RPSLS rules. It presents a more intricate alternative to the classic game, providing fun and interactive play among participants.

![Am I Responsive](/assets/images/Readme-Img/am-i-responsive.png)

[View Game live project here](https://yakivbrychuk.github.io/P2/)
- - -
## Table of Contents

### [User Experience (UX)](#user-experience-ux-1)
* [User Stories](#user-stories)
### [Features](#features)
* [Existing Features](#existing-features)
### [Features Left to Implement](#features-left-to-implement-1)
### [Design](#design-1)
### [Technologies Used](#technologies-used-1)
### [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used-1)
### [Testing](#testing-1)
* [Validation Results](#validation-results)
* [Manual Testing](#manual-testing)
* [Lighthouse Report](#lighthouse-report)
### [Deployment and local development](#deployment-and-local-development-1)
* [GitHub Pages](#github-pages)
* [Forking the GitHub Repository](#forking-the-github-repository)
* [Local Clone](#local-clone)
### [Credits](#credits-1)
### [Acknowledgements](#acknowledgements-1)
---

## User Experience (UX)

This site caters to enthusiasts of the Big Bang Theory, who likely recognize the game from the show. It offers them an opportunity to engage in the game, mirroring its portrayal on TV, against a computer with randomized choices.

Both new and returning users share identical objectives:

    To experience the game as depicted in the TV series.
    To enjoy a game with a defined objective, including a score tracker.
    For new users, to receive a refresher on the game's rules.

### User Stories

 
   * As a user, I want to be able to figure out what the game is.
   * As a user, I want to easily be able to understand how to play the game.
   * As a user, I want to know what score the game is up too.
   * As a user, I want to be able to easily navigate through the game.
   * As a user, I want the score to be easily visible so I can clearly see who is winning.
- - -

## Features

* Home
    * This is launch page for the game
    * The user will choose one of animated icons
    * The user will read the games instructions with Rules buttom 
    * Score ounter will reflect eighter user won or lost against computer
    * Try Again button leads to home page so user can chose again game card/animated icon

![Home](/assets/images/Readme-Img/home.png)

* Game cards/Animated icons
    * 5 Game Cards of : Rock, Paper, Scissors, Lizard, Spock

![Game Cards](/assets/images/Readme-Img/game-cards.png)

* Rules button
    * By clicking will show modal screen of rules

![Rules button](/assets/images/Readme-Img/rules-button.png)

* Rules image:

![Rules Image](/assets/images/rules.png)

* Score Counter:
    * The score is adjusted based on the outcome of each game round. If the user loses, the score decreases. 
    * Conversely, if the user wins against the computer, the score increases.

![Score Counter](/assets/images/Readme-Img/score.png)

* Result w/ Try Again button 
    * By clicking Try Again button that leads to home page in order to play again with same score

![Result](/assets/images/Readme-Img/result.png)

* Footer
    * Links to the Webpage of Code Institute will open in a new tab to allow easy navigation for the user.
    * Links to the users Github & Linkeding Profile as it gives them an easy contact option via social media.

![Footer](/assets/images/Readme-Img/footer.png)

## Features Left to Implement

* Reset button
* Additional Score Counter, in order to have 1 for User and another for Computer
* Pop up modal screen to input User Name

## Design

 * Colour Scheme
    * Primary colors used on the website: ![Color Scheme](/assets/images/Readme-Img/colors.png)

 * Typography
    * 'Roboto' font is main font used throughout the site with sans-serif as its fallback font in case Roboto doesn't import for some reasson.

 * Wireframes
    * Pen and paper in a notebook: simple and effective.
---

## Technologies Used

 * [HTML5](https://en.wikipedia.org/wiki/HTML5)
 * [CSS3](https://en.wikipedia.org/wiki/CSS)
 * [JS](https://en.wikipedia.org/wiki/JavaScript)
---

## Frameworks, Libraries & Programs Used

 * [Gitpod](https://www.gitpod.io/)
    * To write the code.
 * [Visual Studio Code](https://code.visualstudio.com/)
    * Integrated Development Environment used for coding
* [Github](https://github.com/)
    * Deployment of the website and storing the files online.
 * [Github](https://github.com/features/codespaces)
    * Cloud-based development environment provided by GitHub.
 * [Github Copilot](https://github.com/features/copilot)
    * As assitent in VScode Studio.
* [Am I Responsive](https://ui.dev/amiresponsive)
    * Mockup picture for the README file.
---

## Testing

The W3C Markup Validator and W3C CSS Validator services were used to validate every page of the project to ensure there were no errors.

 * [W3C Markup Validtor](https://validator.w3.org/)
 * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
 * [JSHint JS Validator](https://jshint.com/)
 * [Google's Lighthouse application](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)

### Validation results

<details>
<summary>Nu Html Checker
</summary>

![Home Page validation result](/assets/images/Readme-Img/Nu Html Checker.png)
</details>
<details>
<summary>W3C CSS Validator
</summary>

![Gallery validation result](/assets/images/Readme-Img/W3C CSS Validator.png)
</details>
<details>
<summary>JSHint JS Validator
</summary>

![Sign Up page validation result](/assets/images/Readme-Img/JSHint.png)
</details>

### Manual Testing

* The website was tested on Google Chrome, Microsoft Edge, and Opera browsers.
* The website was viewed on a desktop computer, laptop, and Samsung Galaxy A52 mobile phone.
* A large amount of testing was done to ensure links between pages are working correctly on all pages.
* Family and friends were asked to review the website for a better understanding of the user experience.
* Dev Tools was used to test how the site looks on various screen sizes.

### Lighthouse Report

#### Mobile analysis
<details>
<summary>Google's Lighthouse application
</summary>

![Application Received validation result](/assets/images/Readme-Img/lighthouse.png)
</details>

---

## Deployment and local development

### GitHub Pages

GitHub Pages used to deploy live version of the website.
1. Log in to GitHub and locate [GitHub Repository](https://github.com/YakivBrychuk/P2)
2. At the top of the Repository(not the main navigation) locate "Settings" button on the menu.
3. Scroll down the Settings page until you locate "GitHub Pages".
4. Under "Source", click the dropdown menu "None" and select "Main" and click "Save".
5. The page will automatically refresh.
6. Scroll back to locate the now-published site [link](https://yakivbrychuk.github.io/P2/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the repository, we make a copy of the original repository on our GitHub account to view and change without affecting the original repository by using these steps:

1. Log in to GitHub and locate [GitHub Repository ](https://yakivbrychuk.github.io/P2/)
2. At the top of the Repository(under the main navigation) locate "Fork" button.
3. Now you should have a copy of the original repository in your GitHub account.

### Local Clone

1. Log in to GitHub and locate [GitHub Repository](https://github.com/YakivBrychuk/P2)
2. Under the repository name click "Clone or download"
3. Click on the code button, select clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone` and then paste The URL copied in the step 3.
7. Press Enter and your local clone will be created.

---

## Credits

### Code
 * 
 * The README template was helpfully provided by [Code Institute (template)](https://github.com/Code-Institute-Solutions/SampleREADME)

### Content

 * All content was written by the developer.
 * [Color contrast checker](https://coolors.co/contrast-checker/112a46-acc8e5) was used to decide which colors would be used for the website.

### Media 

 * [Game Cards: Rock, Paper, Scissors, Lizard, Spock](www.svgrepo.com)
 * [Rules Image from wikipedia](https://en.wikipedia.org/wiki/File:Rock_paper_scissors_lizard_spock.png#/media/File:Rock_Paper_Scissors_Lizard_Spock_en.svg) free stock photos, royalty free images.
 * [Pixlr](https://pixlr.com/) Resizing images.

---

## Acknowledgements

 * My mentor Mitko Bachvarov provided helpful feedback and a links.
 * Slack community for encouragement and information.
 * Code Institute Hackathons 