// =======================
// プレイヤー
// =======================

const player = {

    x: 0,
    y: 0,

    size: 30,

    color: "#3b82f6",

};

// =======================
// 初期位置
// =======================
function resetPlayer(){

    player.x = canvas.width / 2;
    player.y = canvas.height / 2;

    input.x = player.x;
    input.y = player.y;

}
resetPlayer();

// =======================
// 更新
// =======================

function updatePlayer(){

    player.x += (input.x - player.x) * 0.18;
    player.y += (input.y - player.y) * 0.18;

}

// =======================
// 描画
// =======================

function drawPlayer(){

    ctx.fillStyle =
        player.color;

    ctx.fillRect(

        player.x - player.size / 2,
        player.y - player.size / 2,

        player.size,
        player.size

    );

}