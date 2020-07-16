window.onload = () => {
  setTimeout(() => {
    const canvasElement = document.getElementById('canvas');
    canvasElement.style.width = '100%';
    canvasElement.style.height = '100%';
    // debugger;
    const container = document.querySelector('.start-menu');
    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', e => {
      e.preventDefault();
      container.style.display = 'none';
      const game = new Game(canvasElement);
      game.loop();
    });
  });
};
