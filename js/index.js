window.onload = () => {
  setTimeout(() => {
    const canvasElement = document.querySelector('.canvas');
    canvasElement.style.width = '100%';
    canvasElement.style.height = '100%';
    // debugger;
    const container = document.querySelector('.start-menu');
    const startButton = document.querySelector('.start-button');
    const startTune = new Audio('./start.mp3');
    startButton.addEventListener('click', e => {
      e.preventDefault();
      container.classList.add('visuallyhidden');
      container.addEventListener(
        'transitioned',
        e => {
          container.classList.add('hidden');
        },
        {
          capture: false,
          once: true,
          passive: false
        }
      );
      startTune.volume = 0.3;
      startTune.play();
      setTimeout(() => {
        canvasElement.classList.remove('visuallyhidden');
      }, 1200);
      setTimeout(() => {
        const game = new Game(canvasElement);
        game.loop();
      }, 1000);
    });
  });
};
