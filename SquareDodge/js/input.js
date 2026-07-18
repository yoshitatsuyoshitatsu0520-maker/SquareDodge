// =======================
// 入力
// =======================

const input = {

    x: 0,
    y: 0

};

// =======================
// マウス
// =======================

canvas.addEventListener("mousemove", e => {

    const rect = canvas.getBoundingClientRect();

    input.x = e.clientX - rect.left;
    input.y = e.clientY - rect.top;

    console.log("move", input.x, input.y);

});

// =======================
// タッチ
// =======================

canvas.addEventListener("touchstart", (e) => {

    e.preventDefault();

    const rect = canvas.getBoundingClientRect();

    input.x = e.touches[0].clientX - rect.left;
    input.y = e.touches[0].clientY - rect.top;

});

canvas.addEventListener("touchmove", (e) => {

    e.preventDefault();

    const rect = canvas.getBoundingClientRect();

    input.x = e.touches[0].clientX - rect.left;
    input.y = e.touches[0].clientY - rect.top;

});

// =======================
// クリック
// =======================

let mousePressed = false;

canvas.addEventListener("mousedown", () => {

    mousePressed = true;

});

canvas.addEventListener("touchstart", () => {

    mousePressed = true;

});
const nameInput =
document.getElementById("nameInput");

nameInput.addEventListener("keydown", async e=>{

    if(e.key != "Enter"){

        return;

    }

    let name = nameInput.value.trim();

    if(name == ""){

        name = "PLAYER";

    }

    playerName = name;

   

    localStorage.setItem(

    "playerName",

    name

);

    

    nameInput.style.display = "none";

await gameOver();
});

document.addEventListener("keydown", e=>{

    if(scene == SCENE_GAMEOVER){

        if(e.key == "r" || e.key == "R"){

            rankingPage = 0;

            scene = SCENE_RANKING;

        }

    }

    if(scene == SCENE_RANKING){

    


    // 次のページ
    if(e.key == "ArrowRight"){

        if((rankingPage + 1) * 10 < ranking.length){

            rankingPage++;

        }

    }

    // 前のページ
    if(e.key == "ArrowLeft"){

        if(rankingPage > 0){

            rankingPage--;

        }

    }

    // 戻る
    if(e.key == "Escape"){

        scene = SCENE_GAMEOVER;

    }

    }

});
