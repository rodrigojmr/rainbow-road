window.onload = () => {
  setTimeout(() => {
    const canvasElement = document.querySelector('.canvas');
    // canvasElement.width = window.innerWidth ;
    canvasElement.height = window.innerHeight - window.innerHeight / 10;
    // canvasElement.style.width = '100%';
    canvasElement.width = window.innerWidth - 10 - window.innerWidth / 5;
    canvasElement.style.height = '100%';
    const container = document.querySelector('.start-menu');
    const startButton = document.querySelector('.start-text');
    const startTune = new Audio('./start.mp3');
    const restartButton = document.querySelector('.restart-button');
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
      startTune.volume = 0.5;
      startTune.play();
      setTimeout(() => {
        canvasElement.classList.remove('visuallyhidden');
      }, 700); // 1200
      setTimeout(() => {
        const game = new Game(canvasElement);
        game.loop();
      }, 700); // 1000
    });

    // setTimeout(() => {
    //   const game = new Game(canvasElement);
    //   game.loop(0);
    // }, 500); // 1000
  });
};
