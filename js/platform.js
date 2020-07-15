class Platform {
  constructor(options) {
    Object.assign(this, options);
  }

  movePlatform() {
    // if (this.game.player.x > 100) {
    //   this.x--;
    //   debugger;
    // }
    // while (this.game.player.y >)
    if (this.game.player.state !== 'boost') {
      this.x -= this.game.speed;
    }
    if (this.game.player.y > 500) {
      if (
        this.game.player.verticalSpeed < 0 &&
        this.game.player.verticalSpeed > -3
      ) {
        this.y += this.game.player.verticalSpeed + 1;
      } else {
        this.y += this.game.player.verticalSpeed;
      }
    }
    if (this.game.player.y <= 300) {
      this.y += 3;
    }
    if (this.game.player.y <= 200) {
      this.y += 4;
    }

    if (
      this.game.player.state === 'boost' ||
      this.game.player.state === 'boostrun'
    ) {
      this.y += this.game.player.verticalSpeed;
      this.x += 0;
    }
  }

  removePlatforms() {}

  paint() {
    const context = this.game.context;
    context.save();
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
        context.restore();
      }
      if (this.id === 'platform') {
        context.fillStyle = '#4287f5';
        context.fillRect(
          Math.floor(this.x),
          Math.floor(this.y),
          this.width,
          this.height
        );
        context.restore();
      } else if (this.id === 'boost') {
        context.fillStyle = '#d9d621';
        context.fillRect(
          Math.floor(this.x),
          Math.floor(this.y),
          this.width,
          this.height
        );
        context.restore();
      } else if (this.id === 'boostPlatRight' || this.id === 'boostPlatLeft') {
        context.fillStyle = '#a30a19';
        context.fillRect(
          Math.floor(this.x),
          Math.floor(this.y),
          this.width,
          this.height
        );
        context.restore();
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
        context.restore();
      }
    }
  }
}
