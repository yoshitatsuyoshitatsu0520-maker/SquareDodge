// =======================
// エフェクト
// =======================

const effects = [];
let levelUpTimer = 0;


let levelUpScale = 1;
// =======================
// +1エフェクト
// =======================

function addScoreEffect(x, y){

    effects.push({

        x: x,
        y: y,

        text: "+1",

        alpha: 1,

        vy: -1

    });

}

// =======================
// 更新
// =======================

function updateEffect(){

    for(let i = effects.length - 1; i >= 0; i--){

        const effect = effects[i];

        effect.y += effect.vy;

        effect.alpha -= 0.02;

        if(effect.alpha <= 0){

            effects.splice(i,1);

        }

    }
if(levelUpTimer > 0){

    levelUpTimer--;

    levelUpScale += (1 - levelUpScale) * 0.15;

}
}

// =======================
// 描画
// =======================

function drawEffect(){

    ctx.font = "28px sans-serif";
    ctx.textAlign = "center";

    for(const effect of effects){

        ctx.fillStyle =
            `rgba(0,0,0,${effect.alpha})`;

        ctx.fillText(

            effect.text,

            effect.x,
            effect.y

        );

    }
if(levelUpTimer > 0){

    const alpha = levelUpTimer / 90;

    ctx.save();

    ctx.translate(
        canvas.width / 2,
        canvas.height / 2
    );

    ctx.scale(
        levelUpScale,
        levelUpScale
    );

    ctx.globalAlpha = alpha;

    ctx.fillStyle = "orange";

    ctx.strokeStyle = "white";

    ctx.lineWidth = 4;

    ctx.font = "bold 60px sans-serif";

    ctx.textAlign = "center";

    ctx.strokeText(
        "LEVEL UP!",
        0,
        0
    );

    ctx.fillText(
        "LEVEL UP!",
        0,
        0
    );

    ctx.restore();

}
}

