// =======================
// 効果音
// =======================

const se = {

    score: new Audio("assets/sound/kati.mp3"),

    start: new Audio("assets/sound/title1.mp3"),

    gameover: new Audio("assets/sound/tekisi.mp3"),

    record: new Audio("assets/sound/bomb.mp3")

};

function playSE(sound){

    sound.currentTime = 0;

    sound.play();

}