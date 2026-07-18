// =======================
// 敵
// =======================

const enemies = [];

let enemyTimer = 0;

let enemySpeed = 5;

let spawnInterval = 20;

// =======================
// 敵を作る
// =======================

function spawnEnemy(){

    enemies.push({

        x: Math.random() * canvas.width,

        y: -40,

        size: 30,

        speed: enemySpeed

    });

}

// =======================
// 更新
// =======================

function updateEnemy(){

    enemyTimer++;

    if(enemyTimer >= spawnInterval){

        enemyTimer = 0;

        spawnEnemy();

    }

    for(let i = enemies.length - 1; i >= 0; i--){

        const enemy = enemies[i];

        enemy.y += enemy.speed;

        if(enemy.y > canvas.height + enemy.size){

addScore();

addScoreEffect(
    enemy.x,
    enemy.y
);

enemies.splice(i,1);

}

    }

}

// =======================
// 描画
// =======================

function drawEnemy(){

    ctx.fillStyle = "#222";

    for(const enemy of enemies){

        ctx.fillRect(

            enemy.x - enemy.size / 2,
            enemy.y - enemy.size / 2,

            enemy.size,
            enemy.size

        );

    }

}