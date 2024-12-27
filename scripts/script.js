const sound1 = new Audio("../Music/sound1.mp3");


class Player {
    sound;
    playbutton;
    num;

    constructor(sound, num) {
        this.num = num
        this.playbutton = new Image();
        this.playbutton.src = '../images/play.png'
        this.sound = sound;
        this.playing = false;

    }


    playSound()
    {
        const elem = document.getElementById("audio" + this.num);
        if(!this.playing){
            this.playbutton.src = "../images/pause.png";
            elem.src = this.playbutton.src;
            this.sound.play();
            this.playing = true;
        }
        else if(this.playing) {
            this.playbutton.src = "../images/play.png"
            elem.src = this.playbutton.src;

            this.sound.pause();
            this.playing = false;

        }

    }
    resetSound() {
        this.sound.load()
    }

}

const rach2sound1 = new Player(new Audio('../Music/rach2mvt1.mp3'), 2);
const rach2sound2 = new Player(new Audio('../Music/sound1.mp3'), 3);


