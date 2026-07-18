// =======================
// 当たり判定
// =======================

function checkCollision(){

    for(const enemy of enemies){

        const dx = player.x - enemy.x;
        const dy = player.y - enemy.y;

        const distance =
            Math.sqrt(dx * dx + dy * dy);

        const hitDistance =
            (player.size + enemy.size) / 2;

        if(distance < hitDistance){

            gameOver();

            return;

        }

    }

}