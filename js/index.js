window.onload = () => {
  setTimeout(() => {
    const canvasElement = document.getElementById('canvas');
    const game = new Game(canvasElement);
    game.loop();
  }, 200);
};
