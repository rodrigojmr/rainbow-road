class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.speed = 8; // 8
    this.maxGameSpeed = 8;
    this.score = 0;

    this.player = new Player(this);

    this.platforms = [];
    this.debug();
    // this.buildLayout();

    this.setKeyStates();
    this.listenKeyStates();
    this.setMusic();
    this.loadFont();
    this.setRestartButton();

    this.running = true;
    this.finished = false;
    this.lost = false;
    this.timestamp = 0;
    this.deltaTimestamp = 0;
    this.previousTimestamp = 0;
  }

  debug() {
    const game = this;
    layout3.map((platform, index, originalArray) => {
      const newPlatform = new Platform({
        ...platform,
        i: index,
        x: platform.x - 42800,
        y: platform.y + 14750,
        // x: platform.x - 10300,
        // y: platform.y,
        // x: platform.x - 6600, //
        // y: platform.y + 200, //
        // x: platform.x, //
        // y: platform.y, //
        game
      });
      this.platforms.push(newPlatform);
    });
  }

  // buildLayout() {
  //   const game = this;
  //   layout.map(platform => {
  //     const newPlatform = new Platform({ ...platform, game });
  //     this.platforms.push(newPlatform);
  //   });
  // }
  setMusic() {
    const music = new Audio('./Rainbow Road.mp3');
    this.music = music;
    this.music.currentTime =
      Math.abs(this.platforms[0].x) / this.speed / 60 - 17.8;
    // this.music.currentTime =
    //   Math.abs(this.platforms[0].x) / this.speed / 60 - 14;
    this.music.play();
    const loseMusic = new Audio('./Lose.mp3');
    this.loseMusic = loseMusic;
  }

  setKeyStates() {
    const keys = {
      38: false,
      37: false,
      39: false,
      40: false
    };
    this.keys = keys;
  }

  setRestartButton() {
    const restartButton = document.querySelector('.restart-button');
    this.restartButton = restartButton;
    restartButton.addEventListener('click', this.restart.bind(this));
  }

  loadFont() {
    const font = new FontFace(
      '2P',
      'url(https://fonts.gstatic.com/s/pressstart2p/v8/e3t4euO8T-267oIAQAu6jDQyK3nYivN04w.woff2)'
    );
    font.load().then(() => {
      this.font = font;
    });
  }

  listenKeyStates() {
    window.addEventListener(
      'keydown',
      e => {
        event.preventDefault();
        this.keys[e.keyCode] = true;
      },
      true
    );
    window.addEventListener(
      'keyup',
      e => {
        event.preventDefault();
        this.keys[e.keyCode] = false;
      },
      true
    );
  }

  checkKeys() {
    if (this.keys[38]) {
      this.player.executeMove('up');
    }
    if (this.keys[37]) {
      this.player.executeMove('left');
    }
    if (this.keys[39]) {
      this.player.executeMove('right');
    }
    if (this.keys[40]) {
      this.player.executeMove('down');
    }
  }

  findSection(platforms) {
    if (platforms.some(plat => plat.section === 2)) {
      // if (this.platforms[0].x < -11040 && this.platforms[0].x > -11100) {
      this.maxGameSpeed = 10;
      this.speed = 10;
      this.player.maxVerticalSpeed = 13;
      this.player.gravity = 1.4;
    }
    if (
      platforms.some(plat => plat.section === 'boostSection') &&
      this.player.ifPlatformUnderneath
    ) {
      this.player.maxVerticalSpeed = 15;
      this.speed = 13;
      this.maxGameSpeed = 13;
    }

    if (
      platforms.some(plat => plat.section === 'jumpS') &&
      this.player.ifPlatformUnderneath
    ) {
      this.player.maxVerticalSpeed = 18;
      this.player.gravity = 0.6;
    }
    if (
      platforms.some(plat => plat.section === 'resetJump1') &&
      this.player.ifPlatformUnderneath
    ) {
      this.player.gravity = 0.8;
      this.player.maxVerticalSpeed = 13;
    }

    if (
      platforms.some(plat => plat.section === 3) &&
      this.player.ifPlatformUnderneath
    ) {
      this.player.maxVerticalSpeed = 9;
      this.speed = 15;
      this.maxGameSpeed = 14;
      this.player.gravity = 1;
    }

    if (
      platforms.some(plat => plat.section === 'jump') &&
      this.player.ifPlatformUnderneath
    ) {
      this.player.maxVerticalSpeed = 23;
    }
    if (
      platforms.some(plat => plat.section === 4) &&
      this.player.ifPlatformUnderneath
    ) {
      this.player.maxVerticalSpeed = 10;
      this.speed = 16;
      this.maxGameSpeed = 16;
      this.player.gravity = 0.9;
    }
    if (
      platforms.some(plat => plat.section === 5) &&
      this.player.ifPlatformUnderneath
    ) {
      this.player.maxVerticalSpeed = 9;
      this.speed = 18;
      this.maxGameSpeed = 18;
      this.player.gravity = 1;
    }
    if (
      platforms.some(plat => plat.section === 'jumpXS') &&
      this.player.ifPlatformUnderneath
    ) {
      this.player.maxVerticalSpeed = 12;
    }
    if (
      platforms.some(plat => plat.section === '5 reset') &&
      this.player.ifPlatformUnderneath
    ) {
      this.speed = 18;
      this.maxGameSpeed = 18;
      this.player.maxVerticalSpeed = 9;
      this.player.gravity = 1;
    }
    if (
      platforms.some(plat => plat.section === 'jumpXS2') &&
      this.player.ifPlatformUnderneath
    ) {
      this.player.maxVerticalSpeed = 14;
    }
    if (
      platforms.some(plat => plat.section === 'jumpXS2') &&
      this.player.ifPlatformUnderneath
    ) {
      this.player.maxVerticalSpeed = 14;
    }
    if (platforms.some(plat => plat.section === 'finalBoost')) {
      this.speed = 22;
      this.maxGameSpeed = 22;
      this.player.maxVerticalSpeed = 16;
      if (this.player.y > 300) {
        this.player.y += this.player.maxVerticalSpeed;
      }
    }
    if (platforms.some(plat => plat.section === 'end')) {
      if (this.speed > 0) {
        this.speed -= 0.2;
      }
      if (this.speed < 0.5) {
        this.speed = 0;
      }

      if (this.player.x < this.canvas.width / 2 - this.player.width) {
        this.player.x += 1;
      }
      if (!this.finished) {
        this.finished = true;
        setTimeout(() => {
          // debugger;
          const endScreen = document.querySelector('.end-screen');
          endScreen.classList.add('visuallyhidden');
          endScreen.classList.remove('hidden');
          setTimeout(() => {
            endScreen.classList.remove('visuallyhidden');
          }, 500);
        }, 7000);
      }
    }
  }

  runLogic(timestamp) {
    this.previousTimestamp = timestamp;
    this.deltaTimestamp = timestamp - this.previousTimestamp;
    this.player.runLogic();
    for (let platform of this.platforms) {
      platform.movePlatform();
    }
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    if (this.player.state === 'falling' || this.player.state === 'running') {
      this.player.paint();
    } else {
      this.player.hue++;
      this.player.paintJump();
    }

    for (let platform of this.platforms) {
      platform.paint();
    }
  }

  paintLose() {
    this.clean();
    this.context.fillStyle = '#fff';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = '#000';
    this.context.font = '50px sans-serif';
    this.context.fillText(
      'Game Over!',
      this.canvas.width / 2 - 150,
      this.canvas.height / 2
    );
  }

  paintWin() {
    this.clean();
    this.context.save();
    this.context.fillStyle = '#fff';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.restore();

    this.context.font = '10px 2P';
    var gradient = this.context.createLinearGradient(
      0,
      this.canvas.height / 2,
      this.canvas.width,
      this.canvas.height / 2
    );
    // var gradient = this.context.createLinearGradient(
    //   this.canvas.width / 2,
    //   this.canvas.height / 2 - 50,
    //   this.canvas.width / 2,
    //   this.canvas.height / 2 + 50
    // );
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1 / 6, 'orange');
    gradient.addColorStop(2 / 6, 'yellow');
    gradient.addColorStop(3 / 6, 'green');
    gradient.addColorStop(4 / 6, 'blue');
    gradient.addColorStop(5 / 6, 'indigo');
    gradient.addColorStop(1, 'violet');
    this.context.fillStyle = gradient;
    this.context.fillText(
      'RAINBOW ROAD',
      this.canvas.width / 8,
      this.canvas.height / 2 + 50
    );
  }

  win() {
    this.paintWin();
    this.running = false;
  }

  lose() {
    this.paintLose();
    this.music.pause();
    this.music.currentTime = 0;
    this.loseMusic.play();

    this.restartButton.classList.remove('hidden');
    this.restartButton.classList.add('visuallyhidden');

    setTimeout(() => {
      this.restartButton.classList.remove('visuallyhidden');
    }, 400);

    this.running = false;

    debugger;
  }

  restart() {
    this.restartButton.classList.remove('visuallyhidden');
    this.restartButton.classList.add('hidden');

    this.loseMusic.pause();
    this.loseMusic.currentTime = 0;
    this.music.currentTime = 0;
    this.music.play();

    // this.player.x += this.platforms[0].x;
    // this.player.y += this.platforms[0].y;

    this.running = true;
    this.platforms.splice(0, this.platforms.length);
    this.debug();
    this.clean();
    this.loop(0);
  }

  loop(timestamp) {
    this.checkKeys();
    this.runLogic(timestamp);
    if (this.running) {
      this.clean();
      this.paint();

      requestAnimationFrame(timestamp => this.loop(timestamp));
      // setTimeout(() => {
      //   this.loop();
      // }, 1000 / 0.01);
    } else {
      return false;
    }
  }
}

/*function createPlatforms(game) {
  return (platformArray = [
    new Platform({
      game: game,
      id: 'floor',
      x: 0,
      y: 500,
      width: 1000,
      height: 300
    })
  ]);
}*/
