const gameContainer = document.getElementById('game-container');
const ball = document.querySelector('.ball');
const scoreDisplay = document.getElementById('score');

let score = 0;
let speed = 1000; // Time in milliseconds

// Function to place the ball at a random position
function placeBall() {
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    const randomX = Math.random() * (containerWidth - ball.offsetWidth);
    const randomY = Math.random() * (containerHeight - ball.offsetHeight);

    ball.style.left = `${randomX}px`;
    ball.style.top = `${randomY}px`;
}

// Function to update the score
function updateScore() {
    score++;
    scoreDisplay.textContent = `Ba3bous: ${score}`;
    speed = Math.max(300, speed - 50); // Increase speed up to a limit
    resetBall();
}

// Function to reset ball position
function resetBall() {
    clearTimeout(ball.timer);
    placeBall();
    ball.timer = setTimeout(resetBall, speed);
}

// Event listener for catching the ball
ball.addEventListener('click', updateScore);

// Start the game
resetBall();

// Function to play sound when clicking on any <center> tag
function playSoundOnCenterClick(soundFile) {
    const centers = document.querySelectorAll("center"); // Select all <center> elements

    centers.forEach(center => {
        center.addEventListener('click', () => {
            let sound = new Audio(soundFile); // Create a new audio object
            sound.play(); // Play sound
        });
    });
}

// Call the function and provide the sound file path
playSoundOnCenterClick("SOUND/samia-hosny-sound.mp3");

// // const gameContainer = document.getElementById('game-container');
// const ball = document.querySelector('.ball');
// const scoreDisplay = document.getElementById('score');

// let score = 0;
// let speed = 1000; // Time in milliseconds

// // Function to place the ball at a random position
// function placeBall() {
//     const containerWidth = gameContainer.clientWidth;
//     const containerHeight = gameContainer.clientHeight;

//     const randomX = Math.random() * (containerWidth - ball.offsetWidth);
//     const randomY = Math.random() * (containerHeight - ball.offsetHeight);

//     ball.style.left = `${randomX}px`;
//     ball.style.top = `${randomY}px`;
// }

// // Function to update the score
// function updateScore() {
//     score++;
//     scoreDisplay.textContent = `Score: ${score}`;
//     speed = Math.max(300, speed - 50); // Increase speed up to a limit
//     resetBall();
// }

// // Function to reset ball position
// function resetBall() {
//     clearTimeout(ball.timer);
//     placeBall();
//     ball.timer = setTimeout(resetBall, speed);
// }

// // Event listener for catching the ball
// ball.addEventListener('click', updateScore);

// // Start the game
// resetBall();

// // Function to play sound when clicking on any <center> tag
// function playSoundOnCenterClick(soundFile) {
//     const centers = document.querySelectorAll("center"); // Select all <center> elements

//     centers.forEach(center => {
//         center.addEventListener('click', () => {
//             let sound = new Audio(soundFile); // Create a new audio object
//             sound.play(); // Play sound
//         });
//     });
// }

// // Call the function and provide the sound file path
// playSoundOnCenterClick("SOUND/samia-hosny-sound.mp3");

