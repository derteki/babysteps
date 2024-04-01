// Simplified version for demonstration purposes
// Initialize positions and movement direction
let ball = document.getElementById("ball");
let ballDirection = { x: 2, y: 2 };
let paddleA = document.getElementById("paddleA");
let paddleB = document.getElementById("paddleB");

function moveBall() {
    let ballPos = ball.getBoundingClientRect();
    let gamePos = document.getElementById("pongGame").getBoundingClientRect();
    let paddleAPos = paddleA.getBoundingClientRect();
    let paddleBPos = paddleB.getBoundingClientRect();

    // Ball movement logic
    if (ballPos.top <= gamePos.top || ballPos.bottom >= gamePos.bottom) {
        ballDirection.y *= -1;
    }
    if (ballPos.left <= paddleAPos.right || ballPos.right >= paddleBPos.left) {
        ballDirection.x *= -1;
    }

    ball.style.left = ballPos.left + ballDirection.x + "px";
    ball.style.top = ballPos.top + ballDirection.y + "px";
}

setInterval(moveBall, 30);

// Add keyboard controls for paddles here
