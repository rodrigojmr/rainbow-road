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

    this.running = true;
  }

  debug() {
    const game = this;
    layout3.map((platform, index, originalArray) => {
      const newPlatform = new Platform({
        ...platform,
        i: index,
        x: platform.x - 39300,
        y: platform.y + 9150,
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
    // this.music.currentTime = Math.abs(this.platforms[0].x) / this.speed / 60;
    this.music.play();
    // const loseMusic = new Audio('./Lose.mp3');
    // this.loseMusic = loseMusic;
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
    // if (platforms.some(plat => plat.section === 1)) {
    // if (this.platforms[0].x < -11040 && this.platforms[0].x > -11100) {
    //   this.maxGameSpeed = 8;
    //   this.speed = 8;
    //   this.player.maxVerticalSpeed = 13;
    //   this.player.gravity = 0.8;
    // }
    if (platforms.some(plat => plat.section === 2)) {
      // if (this.platforms[0].x < -11040 && this.platforms[0].x > -11100) {
      this.maxGameSpeed = 10;
      this.speed = 10;
      this.player.maxVerticalSpeed = 13;
      this.player.gravity = 1.4;
    }
    if (platforms.some(plat => plat.section === 'end')) {
      // if (this.platforms[0].x < -11040 && this.platforms[0].x > -11100) {
      this.win();
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
      // debugger;
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
    }
  }

  cleanPlatforms() {
    // if (this.platforms[0].x + this.platforms[0].width < -200) {
    //   this.platforms.shift();
    // }
  }

  // window.addEventListener('keydown', event => {
  //   const key = event.key;
  //   switch (key) {
  //     case 'ArrowLeft':
  //       event.preventDefault();
  //       this.player.executeMove('left');
  //       break;
  //     case 'ArrowRight':
  //       event.preventDefault();
  //       this.player.executeMove('right');
  //       break;
  //     case 'ArrowUp':
  //       event.preventDefault();
  //       this.player.executeMove('up');
  //       break;
  //     case 'ArrowDown':
  //       event.preventDefault();
  //       this.player.executeMove('down');
  //       break;
  //   }
  // });
  // }

  runLogic() {
    this.cleanPlatforms();
    this.player.runLogic();
    for (let platform of this.platforms) {
      platform.movePlatform();
    }
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.player.paint();
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

    this.context.font = '100px sans-serif';
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
    // this.loseMusic.play();
    this.running = false;
  }

  loop() {
    this.checkKeys();
    this.runLogic();
    if (this.running) {
      this.clean();
      this.paint();
      // debugger;

      requestAnimationFrame(() => this.loop());
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
