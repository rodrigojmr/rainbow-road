class Platform {
  constructor(options) {
    Object.assign(this, options);
  }

  movePlatform() {
    if (
      this.game.player.x >= 350 &&
      !this.game.player.state.includes('boost')
    ) {
      this.x -= this.game.speed;
    }
    if (this.game.player.x > 350) {
      this.x -= 10;
    }
    if (this.game.player.state !== 'boost') {
      this.x -= this.game.speed;
    }
    if (
      this.game.player.state === 'boost' ||
      this.game.player.state === 'boostrun'
    ) {
      this.y += this.game.player.verticalSpeed;
      this.x += 0;
    }
    if (this.game.player.y > 500) {
      if (this.game.player.verticalSpeed <= 0) {
        this.y += -Math.abs(this.game.player.verticalSpeed * 2);
      } else {
        this.y -= -2;
      }
    }
    if (this.game.player.y <= 300) {
      this.y += 3;
    }
    if (this.game.player.y <= 200) {
      this.y -= 1;
    }

    // if (!this.game.player.state.includes('boost')) {
    //   this.x -= this.game.speed;
    //   if (this.game.player.y > 500) {
    //     if (
    //       this.game.player.verticalSpeed < 0 &&
    //       this.game.player.verticalSpeed > -3
    //     ) {
    //       this.y += this.game.player.verticalSpeed + 1;
    //     } else {
    //       this.y += this.game.player.verticalSpee;
    //     }
    //   }
    // }
    // if (this.game.player.state.includes('boost')) {
    //   this.y += this.game.player.verticalSpeed;
    //   this.x += 0;
    // }
    // if (this.game.player.y <= 300) {
    //   this.y += 3;
    // }
    // if (this.game.player.y <= 200) {
    //   this.y += 4;
    // }
  }

  removePlatforms() {}

  paint() {
    const context = this.game.context;
    if (
      (this.x < this.game.canvas.width || this.x + this.width > 0) &&
      (this.y < this.game.canvas.height || this.y + this.height > 0)
    ) {
      if (this.id === 'floor') {
        context.fillStyle = '#000';
        context.fillRect(
          Math.floor(this.x),
          Math.floor(this.y),
          this.width,
          this.height
        );
      }
      if (this.id === 'platform') {
        context.fillStyle = '#4287f5';
        context.fillRect(
          Math.floor(this.x),
          Math.floor(this.y),
          this.width,
          this.height
        );
      } else if (this.id === 'boost') {
        context.fillStyle = '#d9d621';
        context.fillRect(
          Math.floor(this.x),
          Math.floor(this.y),
          this.width,
          this.height
        );
      } else if (this.id === 'boostPlatRight' || this.id === 'boostPlatLeft') {
        context.fillStyle = '#a30a19';
        context.fillRect(
          Math.floor(this.x),
          Math.floor(this.y),
          this.width,
          this.height
        );
      } else if (this.id === 'obstacle') {
        context.fillStyle = '#cc0c26';
        for (let i = 0; i < this.width / 30; i++) {
          context.beginPath();
          context.moveTo(Math.floor(this.x) + i * 30, Math.floor(this.y));
          context.lineTo(
            Math.floor(this.x) + i * 30 + 15,
            Math.floor(this.y) - 30
          );
          context.lineTo(Math.floor(this.x) + i * 30 + 30, Math.floor(this.y));
          context.fill();
        }
        context.fillStyle = '#cc0c26';
        context.fillRect(
          Math.floor(this.x),
          Math.floor(this.y),
          this.width,
          this.height
        );
      } else if (this.id === 'obstacleVertLeft') {
        context.fillStyle = '#cc0c26';
        for (let i = 0; i < Math.floor(this.height / 60); i++) {
          context.beginPath();
          context.moveTo(
            Math.floor(this.x + this.width),
            Math.floor(this.y + this.height) - i * 60
          );
          context.lineTo(
            Math.floor(this.x + this.width) + 45,
            Math.floor(this.y + this.height) - i * 60 - 30
          );
          context.lineTo(
            Math.floor(this.x + this.width),
            Math.floor(this.y + this.height) - i * 60 - 60
          );
          context.fill();
        }
        context.fillStyle = '#cc0c26';
        context.fillRect(
          Math.floor(this.x),
          Math.floor(this.y),
          this.width,
          this.height
        );
      }
    } else if (this.id === 'obstacleRight') {
      context.fillStyle = '#cc0c26';
      for (let i = 0; i < Math.floor(this.height / 60); i++) {
        context.beginPath();
        context.moveTo(
          Math.floor(this.x),
          Math.floor(this.y + this.height) - i * 60
        );
        context.lineTo(
          Math.floor(this.x) - 45,
          Math.floor(this.y + this.height) - i * 60 - 30
        );
        context.lineTo(
          Math.floor(this.x),
          Math.floor(this.y + this.height) - i * 60 - 60
        );
        context.fill();
      }
      context.fillStyle = '#cc0c26';
      context.fillRect(
        Math.floor(this.x),
        Math.floor(this.y),
        this.width,
        this.height
      );
    }
  }
}
