class Player {
  constructor(game) {
    this.game = game;
    this.x = 100;
    this.y = 450;
    this.width = 50;
    this.height = 50;
    this.maxVerticalSpeed = 13;
    this.verticalSpeed = 0;
    this.gravity = 0.8;
    this.state = 'running';
    this.ifPlatformUnderneath = true;
    this.jumpingPoint = 500;
    this.boundaryTimestamp = 0;
    this.hue = 0;
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = '#fff';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.strokeStyle = '#000';
    context.lineWidth = 2;
    context.strokeRect(this.x, this.y, this.width, this.height);
    context.restore();
  }

  paintJump() {
    const context = this.game.context;
    context.save();
    if (this.hue === 360) {
      this.hue = 0;
      this.hue++;
    } else this.hue++;

    context.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
    context.fillRect(this.x, this.y, this.width, this.height);
    context.restore();
  }

  move(direction) {
    switch (direction) {
      case 'left':
        this.x -= this.moveSpeed;
        break;
      case 'right':
        this.x += this.moveSpeed;
        break;
      default:
        break;
    }
  }

  runLogic() {
    this.checkPlatformsAround();
    this.movement();
  }

  executeMove(direction) {
    if (direction === 'up' && this.state === 'running') {
      this.state = 'jumping';
      this.y -= 0.6;
      this.jumpingPoint = this.y + this.height;
      this.verticalSpeed = this.maxVerticalSpeed;
    }
    if (direction === 'left' && this.state === 'boostrun') {
      this.state = 'boost';
      this.game.speed = -this.game.maxGameSpeed;
    }
    if (direction === 'right' && this.state === 'boostrun') {
      this.state = 'boost';
      this.game.speed = this.game.maxGameSpeed;
    }
  }

  movement() {
    // Set speed in certain states
    if (this.state === 'jumping' || this.state === 'falling') {
      if (this.y >= 0 && this.y <= 550) {
        this.y -= this.verticalSpeed;
        this.verticalSpeed -= this.gravity;
      } else if (this.y > 550) {
        this.y = 550;
        this.y -= this.verticalSpeed;
        this.verticalSpeed -= 0.3;
      } else if (this.y < 300) {
        this.y++;
      }
      if (this.verticalSpeed < -15) {
        this.verticalSpeed = -15;
      }
    }
    if (this.state === 'boost') {
      this.verticalSpeed = this.maxVerticalSpeed;
      this.x += this.game.speed;
    }

    // Prevent player from going further than certain point
    if (this.x > 100 && !this.state.includes('boost')) {
      this.x -= this.game.speed * 0.75;
    } else if (this.x > 700) {
      this.x -= this.game.speed * 2;
    }
    if (this.y < 350 && this.state.includes('boost')) {
      this.y += 10;
    }
  }

  checkPlatformsAround() {
    const platforms = this.game.platforms.filter(platform => {
      if (!platform.id.includes('boostPlat') && !platform.id.includes('Vert')) {
        return (
          (platform.x <= this.x &&
            platform.x + platform.width >= this.x + this.width) ||
          // Case in which player is between two platforms
          (platform.x + platform.width >= this.x &&
            platform.x + platform.width <= this.x + this.width) ||
          (platform.x >= this.x && platform.x <= this.x + this.width)
        );
      } else if (platform.id === 'boostPlatLeft') {
        return (
          platform.x < this.x && platform.x + platform.width >= this.x - 10
        );
      } else if (platform.id === 'boostPlatRight') {
        return (
          platform.x + platform.width > this.x + this.width &&
          platform.x < this.x + this.width + 10
        );
      } else if (platform.id === 'obstacleVertLeft') {
        return (
          platform.x < this.x && platform.x + platform.width >= this.x - 50
        );
      } else if (platform.id === 'obstacleVertRight') {
        return (
          platform.x + platform.width > this.x + this.width &&
          platform.x <= this.x + this.width + 30
        );
      }
    });
    this.ifPlatformUnderneath = platforms.some(
      platform =>
        platform.y - 15 < this.y + this.height &&
        platform.y + 50 > this.y + this.height &&
        platform.x + platform.width > this.x + 10
    );
    this.checkIfOutOfBounds(platforms);
    this.checkBoundaries(platforms);
    this.game.findSection(platforms);
    // if (platforms.find(e => e.id.includes('finalBoost'))) {
    //   this.game.
    // }
  }

  checkIfOutOfBounds(platforms) {
    if (
      !platforms.length ||
      !platforms.find(plat => plat.y < this.y + 1000 || plat.y > this.y - 1000)
    ) {
      // console.log('this.game.timestamp: ', this.game.timestamp);
      if (!this.boundaryTimestamp) {
        this.boundaryTimestamp = this.game.timestamp;
      } else {
        if (this.game.timestamp > this.boundaryTimestamp + 3000) {
          alert('test');
        }
      }
    }
  }

  checkBoundaries(platforms) {
    if (
      !this.ifPlatformUnderneath &&
      this.state !== 'jumping' &&
      !platforms.some(plat => plat.id.includes('boost'))
    ) {
      this.state = 'falling';
    }
    for (let platform of platforms) {
      // Moves square from underplatform to on top of it
      if (
        platform.id === 'floor' &&
        this.y + this.height > platform.y &&
        !(this.y > platform.y)
      ) {
        this.y = platform.y - this.height;
        this.verticalSpeed = 0;
        this.state = 'running';
      } else if (
        platform.id === 'floor' &&
        this.y > platform.y &&
        this.x > platform.x &&
        this.x < platform.x + platform.width
      ) {
        this.game.lose();
      }

      if (platform.id === 'platform') {
        if (
          this.y + this.height >= platform.y + 20 &&
          this.y < platform.y + platform.height &&
          this.x + this.width <= platform.x + platform.width / 4 &&
          this.x + this.width >= platform.x &&
          this.x < platform.x
        ) {
          this.game.lose(); // return false;
        } else if (
          this.ifPlatformUnderneath &&
          this.state !== 'running' &&
          this.y + this.height > platform.y &&
          this.y < platform.y
        ) {
          this.y = platform.y - this.height;
          this.verticalSpeed = 0;
          this.state = 'running';
        }
      }
      if (platform.id === 'boost' && this.state !== 'boostrun') {
        this.state = 'boost';
      }
      if (platform.id === 'boostPlatRight') {
        // Colision check
        if (
          this.x + this.width >= platform.x &&
          this.x + this.width < platform.x + platform.width &&
          this.y + this.height > platform.y &&
          this.y < platform.y + platform.height
        ) {
          if (this.game.speed > 0) {
            this.game.speed = 0;
          }
          this.x = platform.x - this.width;
          this.state = 'boostrun';
        } else if (
          // Keep moving if miss platform/jump
          ((this.y > platform.y + platform.height &&
            this.y < platform.y + platform.height + 300) ||
            (this.y < platform.y && this.y > platform.y - 100)) &&
          this.game.speed === 0
        ) {
          this.state = 'boost';
          this.game.speed = this.game.maxGameSpeed;
          setTimeout(() => {
            if (!platforms.length) this.game.lose();
          }, 1000);
        } else if (
          // Colision lose Check
          this.x > platform.x &&
          this.x + this.width < platform.x + platform.width + 100 &&
          this.y <= platform.y + platform.height &&
          this.y > platform.y
        ) {
          this.game.lose();
        }
      } else if (platform.id === 'boostPlatLeft') {
        // Colision check
        if (
          this.x <= platform.x + platform.width &&
          this.x > platform.x &&
          this.y + this.height > platform.y &&
          this.y < platform.y + platform.height
        ) {
          if (this.game.speed < 0) {
            this.game.speed = 0;
          }
          this.x = platform.x + platform.width;
          this.state = 'boostrun';
        } else if (
          // Keep moving if miss platform/jump
          ((this.y > platform.y + platform.height &&
            this.y < platform.y + platform.height + 100) ||
            (this.y < platform.y && this.y > platform.y - 100)) &&
          this.game.speed === 0
        ) {
          this.game.speed = -Math.abs(this.game.maxGameSpeed);
          setTimeout(() => {
            this.game.lose();
          }, 200);
        }
      }
      if (
        platform.id === 'obstacle' &&
        this.y + this.height > platform.y - 30 &&
        ((this.x < platform.x && this.x + this.width > platform.x + 15) ||
          (this.x > platform.x && this.x < platform.x + platform.width - 15))
      ) {
        this.game.lose(); // return false;
      }
      if (
        platform.id === 'obstacleVertLeft' &&
        this.x <= platform.x + platform.width + 60 &&
        ((this.y < platform.y + platform.height &&
          this.y > platform.y + platform.height - 30) ||
          (this.y < platform.y && this.y + this.height > platform.y - 15))
      ) {
        this.game.lose(); // return false;
      }
      if (
        platform.id === 'obstacleVertRight' &&
        this.x + this.width >= platform.x + platform.width - 60 &&
        ((this.y < platform.y + platform.height &&
          this.y > platform.y + platform.height - 30) ||
          (this.y < platform.y && this.y + this.height > platform.y - 15))
      ) {
        this.game.lose(); // return false;
      }
    }
  }
}
