// =======================
// Canvas
// =======================


// =======================
// サイズ
// =======================
playerId = localStorage.getItem("playerId");

if(!playerId){

    playerId = crypto.randomUUID();

    localStorage.setItem("playerId", playerId);

}

function resizeCanvas(){

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

    resetPlayer();

}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);

// =======================
// 更新
// =======================
function update(){

    if(scene == SCENE_TITLE){

        if(mousePressed){

            window.startGame();

        }

    }

    if(scene == SCENE_GAME){

        updatePlayer();

        updateEnemy();

        updateEffect();

        checkCollision();

    }

    if(scene == SCENE_GAMEOVER){

        if(mousePressed){

            window.startGame();

        }

    }

    mousePressed = false;

}

function draw(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    if(scene == SCENE_GAME){

        drawEnemy();

        drawPlayer();

        drawEffect();

    }

    drawUI();

}

// =======================
// ゲームループ
// =======================

function gameLoop(){

    update();

    draw();

    requestAnimationFrame(
        gameLoop
    );

}

gameLoop();

window.startGame = startGame;
window.gameOver = gameOver;
window.loadRanking = loadRanking;