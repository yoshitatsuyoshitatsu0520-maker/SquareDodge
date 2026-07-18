// =======================
// UI
// =======================

function drawUI(){

    ctx.fillStyle = "#222";
    ctx.textAlign = "center";

    if(scene == SCENE_TITLE){

        ctx.font = "64px sans-serif";
        ctx.fillText(
            "SQUARE DODGE",
            canvas.width / 2,
            180
        );

        ctx.font = "32px sans-serif";
        ctx.fillText(
            "Click to Start",
            canvas.width / 2,
            300
        );

    }

    // =======================
    // スコア表示
    // =======================

    if(scene == SCENE_GAME){

        ctx.textAlign = "left";

        ctx.fillStyle = "#222";

        ctx.font = "32px sans-serif";

        ctx.fillText(
            "SCORE : " + score,
            20,
            50
        );

        ctx.fillText(
            "BEST : " + bestScore,
            20,
            90
        );

    }

   



if(scene == SCENE_NAME){

    ctx.fillStyle="black";

    ctx.textAlign="center";

    ctx.font="42px sans-serif";

    ctx.fillText(

        "NEW RECORD!",

        canvas.width/2,

        100

    );

    ctx.font="24px sans-serif";

    ctx.fillText(

        "名前を入力してください",

        canvas.width/2,

        170

    );

    ctx.font="18px sans-serif";

  

}
if(scene == SCENE_RANKING){

    ctx.fillStyle = "black";

    ctx.textAlign = "center";

    ctx.font = "40px sans-serif";

    ctx.fillText(

        "🏆 RANKING",

        canvas.width/2,

        60

    );

    const start = rankingPage * 10;

    const end = Math.min(

        start + 10,

        ranking.length

    );

    ctx.strokeStyle = "black";

ctx.lineWidth = 4;

ctx.strokeRect(

    canvas.width / 2 - 170,
    160,

    340,
    230

);

    ctx.font = "22px sans-serif";

    for(let i = start; i < end; i++){

        const data = ranking[i];

        const y = 120 + (i - start) * 30;

        // 順位
        ctx.textAlign = "left";

        ctx.fillText(

            (i + 1) + ".",

            60,

            y

        );

        // 名前
        ctx.fillText(

            data.name,

            110,

            y

        );

        // スコア
        ctx.textAlign = "right";

        ctx.fillText(

            data.score,

            canvas.width - 60,

            y

        );

    }

    ctx.textAlign = "center";

    ctx.font = "18px sans-serif";

    ctx.fillText(

        "← → ページ切替",

        canvas.width/2,

        430

    );

    ctx.fillText(

        "ESC：戻る",

        canvas.width/2,

        455

    );

    ctx.fillText(

        "Page " +

        (rankingPage + 1) +

        "/" +

        Math.max(

            1,

            Math.ceil(ranking.length / 10)

        ),

        canvas.width/2,

        90

    );

}

if(scene == SCENE_GAMEOVER){

    ctx.fillStyle = "black";

    ctx.font = "48px sans-serif";

    ctx.fillText(
        "GAME OVER",
        canvas.width / 2,
        80
    );

    // ★ここに追加★

    // ランキングの背景
    ctx.fillStyle = "#f5f5f5";

    ctx.fillRect(
        canvas.width / 2 - 170,
        160,
        340,
        230
    );

    // ランキングの枠
    ctx.strokeStyle = "black";

    ctx.lineWidth = 4;

    ctx.strokeRect(
        canvas.width / 2 - 170,
        160,
        340,
        230
    );
// タイトル帯
ctx.fillStyle = "#222";

ctx.fillRect(

    canvas.width / 2 - 115,

    105,

    230,

    30

);

// トロフィー
ctx.font = "26px sans-serif";

ctx.fillStyle = "#FFD700";

ctx.fillText(
    "🏆",
    canvas.width / 2 - 45,
    128
);

// RANKING
ctx.fillStyle = "white";

ctx.font = "bold 20px sans-serif";

ctx.fillText(
    "RANKING",
    canvas.width / 2 + 20,
    127
);
    

    ctx.fillStyle = "black";

    // ↓この下にランキング表示


    

    // ランキング表示
    ctx.font = "22px sans-serif";


        for(let i = 0; i < Math.min(5, ranking.length); i++){

    const data = ranking[i];

    const y = 220 + i * 32;

    // 順位
    ctx.textAlign = "left";

    let rank;

if(i == 0){

    rank = "🥇";

}else if(i == 1){

    rank = "🥈";

}else if(i == 2){

    rank = "🥉";

}else{

    rank = (i + 1) + ".";

}

ctx.fillText(

    rank,

    canvas.width / 2 - 140,

    y

);

    // 名前
    ctx.fillText(

        data.name,

        canvas.width / 2 - 105,

        y

    );

    // スコア
    ctx.textAlign = "right";

    ctx.fillText(

        data.score,

        canvas.width / 2 + 140,

        y

    );

}

    

    ctx.textAlign = "center";

    ctx.font = "20px sans-serif";

if(playerRank >= 0 && playerRank < 100){

    ctx.fillText(

        "あなたの順位は " +

        currentRank +

        " 位です！",

        canvas.width/2,

        430

    );

}else{

    ctx.fillText(

        "あなたの順位は圏外です！",

        canvas.width/2,

        430

    );

}

    ctx.fillText(

        "クリックでリスタート",

        canvas.width / 2,

        450

    );

}

}