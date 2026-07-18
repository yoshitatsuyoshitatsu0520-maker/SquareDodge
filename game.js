// =======================
// ゲーム
// =======================

// =======================
// ゲーム開始
// =======================


let playerName ="";
let playerId = "";
let inputName = "";
let playerRank = -1;    // 自分の最高記録の順位
let currentRank = -1;     // 今回のスコアの順位

let rankingPage = 0;
function startGame(){

    document.getElementById("nameInput").style.display = "none";

    scene = SCENE_GAME;

    playSE(se.start);

    enemies.length = 0;

    enemyTimer = 0;

    score = 0;

    level = 1;

    enemySpeed = 5;
spawnInterval = 20;

    resetPlayer();

}
// ランキングの背景


// =======================
// ゲームオーバー
// =======================
async function gameOver(){

    playSE(se.gameover);

    if(playerName == ""){

        scene = SCENE_NAME;

        const input = document.getElementById("nameInput");

        input.value = "";

        input.style.display = "block";

        input.focus();

        return;

    }

    scene = SCENE_GAMEOVER;

    try{

        // 自分のデータを検索（名前ではなくplayerId）
        const snapshot = await db
    .collection("ranking")
    .where("playerId", "==", playerId)
    .get();

console.log("playerId =", playerId);
console.log("検索件数 =", snapshot.size);

if(snapshot.empty){

    console.log("初回登録");

}else{

    console.log("更新処理");

    const doc = snapshot.docs[0];
    const data = doc.data();

    console.log("現在の最高 =", data.score);
    console.log("今回 =", score);

    if(score > data.score){

        console.log("更新します！");

        await doc.ref.update({

            name: playerName,

            score: score,

            time: Date.now()

        });

    }else{

        console.log("更新しません");

    }

}
        await loadRanking();

        currentRank = 1;

for(const data of ranking){

    if(data.score > score){

        currentRank++;

    }

}

        currentRank = ranking.filter(data=>{

    return data.score > score;

}).length + 1;
        console.log("ランキング更新完了！");

    }catch(error){

        console.error(error);

    }

}
async function loadRanking(){

    try{

        const snapshot = await db
            .collection("ranking")
            .orderBy("score", "desc")
            .orderBy("time", "asc")
            .get();

        ranking = [];

        snapshot.forEach(doc=>{

            ranking.push(doc.data());

        });

        // 自分の順位を取得
        playerRank = ranking.findIndex(data=>{

            return data.playerId == playerId;

        });

    }catch(error){

        console.error("ランキング取得失敗", error);

    }

}