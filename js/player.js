class Player {
  constructor(game) {
    this.game = game;
    this.x = 100;
    this.y = 500;
    this.width = 50;
    this.height = 50;
    this.maxVerticalSpeed = 13;
    this.verticalSpeed = 0;
    this.gravity = 0.8;
    this.state = 'running';
    this.ifPlatformUnderneath = true;
    this.jumpingPoint = 500;
  }

  paint() {
    const context = this.game.context;
    context.save();

    context.fillStyle = '#4251f5';
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
      }
      if (this.verticalSpeed < -15) {
        this.verticalSpeed = -15;
      }
    }
    if (this.state === 'boost') {
      this.verticalSpeed = 5;
      this.x += this.game.speed;
    }

    // Prevent player from going further than certain point
    if (this.x > 100 && !this.game.player.state.includes('boost')) {
      this.x -= this.game.speed * 0.75;
    }
  }

  checkPlatformsAround() {
    const platforms = this.game.platforms.filter(platform => {
      if (!platform.id.includes('boostPlat')) {
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
      }
    });
    this.ifPlatformUnderneath = platforms.some(
      platform =>
        platform.y - 15 < this.y + this.height &&
        platform.y + 50 > this.y + this.height &&
        platform.x + platform.width > this.x + 10
    );

    this.checkBoundaries(platforms);
    this.game.findSection(platforms);
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
      }

      if (platform.id === 'platform') {
        if (
          this.y + this.height >= platform.y + 10 &&
          this.y < platform.y + platform.height &&
          this.x + this.width <= platform.x + platform.width / 4 &&
          this.x + this.width >= platform.x &&
          this.x < platform.x
        ) {
          this.game.lose(); // return false;
        } else if (
          this.ifPlatformUnderneath &&
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
        if (
          this.x + this.width >= platform.x &&
          this.x + this.width < platform.x + platform.width &&
          this.y + this.height > platform.y &&
          this.y < platform.y + platform.height
        ) {
          if (this.game.speed !== 0) {
            this.game.speed = 0;
          }
          this.x = platform.x - this.width;
          this.state = 'boostrun';
        } else if (this.game.speed === 0) {
          this.game.speed = 8;
        }
      } else if (platform.id === 'boostPlatLeft') {
        if (
          this.x <= platform.x + platform.width &&
          this.x > platform.x &&
          this.y + this.height > platform.y &&
          this.y < platform.y + platform.height
        ) {
          if (this.game.speed !== 0) {
            this.game.speed = 0;
          }
          this.x = platform.x + platform.width;
          this.state = 'boostrun';
        } else if (this.game.speed === 0) {
          this.game.speed = -8;
        }
      }
      if (platform.id === 'obstacle') {
        // console.log(this.state, platforms);
        // Check if front edge touches obstacle, then checks if bottom left edge touches front of obstacle
        if (
          this.y + this.height > platform.y - 30 &&
          ((this.x < platform.x && this.x + this.width > platform.x + 15) ||
            (this.x > platform.x && this.x < platform.x + platform.width - 15))
        ) {
          this.game.lose(); // return false;
        }
      }
    }
  }
}
