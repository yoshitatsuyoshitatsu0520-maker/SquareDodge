// =======================
// スコア
// =======================
let level = 1;
let score = 0;


let bestScore =
    localStorage.getItem("bestScore") || 0;

// =======================
// スコア加算
// =======================

function addScore(){

    score++;

    playSE(se.score);

    if(score > bestScore){

        bestScore = score;

        playSE(se.record);

        localStorage.setItem(
            "bestScore",
            bestScore
        );

    }

    const newLevel = Math.floor(score / 50) + 1;

if(newLevel > level){

    level = newLevel;

    levelUpTimer = 90;
    

levelUpScale = 2.5;



    playSE(se.record);

}
    enemySpeed = Math.min(
        enemySpeed + 0.03,
        12
    );

    spawnInterval = Math.max(
        8,
        spawnInterval - 0.2
    );

}