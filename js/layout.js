const layout = [
  {
    i: 0,
    section: 1,
    id: 'floor',
    x: 0,
    y: 500,
    width: 1000,
    height: 300
  },
  { i: 1, id: 'floor', x: 0, y: 0, width: 2100, height: 300 },
  { i: 2, id: 'obstacle', x: 0, y: 0, width: 90, height: 300 },
  { i: 3, id: 'platform', x: 0, y: -110, width: 100, height: 20 },
  { i: 4, id: 'platform', x: 60, y: -90, width: 100, height: 20 },
  { i: 5, id: 'floor', x: 100, y: 190, width: 550, height: 300 },
  { i: 6, id: 'platform', x: 90, y: 50, width: 90, height: 20 },
  { i: 7, id: 'floor', x: 80, y: -50, width: 530, height: 300 },
  { i: 8, id: 'obstacle', x: 0, y: 0, width: 90, height: 300 },
  { i: 9, id: 'platform', x: 50, y: 80, width: 90, height: 20 },
  { i: 10, id: 'floor', x: 80, y: 190, width: 500, height: 300 },
  { i: 11, id: 'platform', x: 80, y: -130, width: 100, height: 20 },
  { i: 12, id: 'platform', x: 80, y: -110, width: 100, height: 20 },
  { i: 13, id: 'platform', x: 90, y: -100, width: 200, height: 20 },
  { i: 14, id: 'platform', x: 70, y: 90, width: 340, height: 20 },
  { i: 15, id: 'obstacle', x: 0, y: 0, width: 180, height: 20 },
  { i: 16, id: 'platform', x: 0, y: 0, width: 400, height: 20 },
  { i: 17, id: 'platform', x: 60, y: -110, width: 120, height: 20 },
  {
    i: 18,
    section: 'jumpS',
    id: 'platform',
    x: 50,
    y: -130,
    width: 120,
    height: 20
  },
  {
    i: 19,
    section: 'resetJump1',
    id: 'floor',
    x: 300,
    y: 300,
    width: 400,
    height: 500
  },
  { i: 20, id: 'platform', x: 180, y: 40, width: 100, height: 20 },
  { i: 21, id: 'platform', x: 130, y: 40, width: 100, height: 20 },
  { i: 22, id: 'floor', x: 60, y: 80, width: 400, height: 500 },
  { i: 23, id: 'platform', x: 70, y: -110, width: 90, height: 20 },
  { i: 24, id: 'platform', x: 70, y: -110, width: 90, height: 20 },
  { i: 25, id: 'floor', x: 120, y: -60, width: 900, height: 500 },
  {
    i: 26,
    section: 2,
    id: 'floor',
    x: 0,
    y: 0,
    width: 10,
    height: 500
  },
  { i: 27, id: 'floor', x: 0, y: 0, width: 750, height: 500 },
  { i: 28, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 29, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 30, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 31, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 32, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 33, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 34, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 35, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 36, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 37, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 38, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 39, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 40, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 41, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 42, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 43, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 44, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 45, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 46, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 47, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 48, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 49, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 50, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 51, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 52, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 53, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 54, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 55, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 56, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 57, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 58, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 59, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 60, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 61, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 62, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 63, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 64, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 65, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 66, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 67, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 68, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 69, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 70, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 71, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 72, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 73, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 74, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 75, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 76, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 77, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 78, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 79, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 80, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 81, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 82, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  { i: 83, id: 'floor', x: 0, y: 0, width: 150, height: 500 },
  { i: 84, id: 'obstacle', x: 0, y: 0, width: 60, height: 500 },
  {
    i: 85,
    section: 'boostSection',
    id: 'floor',
    x: 0,
    y: 0,
    width: 500,
    height: 500
  },
  { i: 86, id: 'floor', x: 0, y: 0, width: 300, height: 500 },
  { i: 87, id: 'boost', x: 0, y: 0, width: 300, height: 500 },
  { i: 88, id: 'boost', x: 0, y: 0, width: 1000, height: 500 },
  {
    i: 89,
    id: 'boostPlatRight',
    x: -1,
    y: -900,
    width: 50,
    height: 700
  },
  {
    i: 90,
    id: 'boostPlatLeft',
    x: -270,
    y: -700,
    width: 50,
    height: 600
  },
  {
    i: 91,
    id: 'boostPlatRight',
    x: 110,
    y: -500,
    width: 50,
    height: 500
  },
  {
    i: 92,
    id: 'boostPlatLeft',
    x: -150,
    y: -200,
    width: 50,
    height: 200
  },
  {
    i: 93,
    id: 'boostPlatRight',
    x: 110,
    y: -800,
    width: 50,
    height: 800
  },
  {
    i: 94,
    id: 'boostPlatLeft',
    x: -140,
    y: -300,
    width: 50,
    height: 300
  },
  {
    i: 95,
    id: 'boostPlatRight',
    x: 110,
    y: -300,
    width: 50,
    height: 300
  },
  {
    i: 96,
    id: 'boostPlatLeft',
    x: -140,
    y: -1900,
    width: 50,
    height: 1900
  },
  {
    i: 97,
    id: 'obstacleVertLeft',
    x: -1,
    y: -300,
    width: 50,
    height: 300
  },
  {
    i: 98,
    id: 'boostPlatRight',
    x: 130,
    y: 100,
    width: 50,
    height: 350
  },
  {
    i: 99,
    id: 'boostPlatRight',
    x: 150,
    y: -320,
    width: 50,
    height: 350
  },
  {
    i: 100,
    id: 'boostPlatRight',
    x: 150,
    y: -320,
    width: 50,
    height: 500
  },
  {
    i: 101,
    id: 'boostPlatRight',
    x: 150,
    y: -700,
    width: 50,
    height: 700
  },
  {
    i: 102,
    id: 'boostPlatLeft',
    x: -150,
    y: -400,
    width: 50,
    height: 400
  },
  {
    i: 103,
    id: 'boostPlatRight',
    x: 150,
    y: -400,
    width: 50,
    height: 400
  },
  {
    i: 104,
    id: 'boostPlatLeft',
    x: -150,
    y: -1600,
    width: 50,
    height: 1600
  },
  {
    i: 105,
    id: 'obstacleVertLeft',
    x: -1,
    y: -300,
    width: 50,
    height: 300
  },
  { i: 106, id: 'decoration', x: -140, y: 0, width: 50, height: 1000 },
  {
    i: 107,
    section: 3,
    id: 'platform',
    x: 500,
    y: 50,
    width: 350,
    height: 20
  },
  { i: 108, id: 'platform', x: 325, y: 0, width: 175, height: 20 },
  { i: 109, id: 'platform', x: 225, y: 0, width: 175, height: 20 },
  {
    i: 110,
    section: 'jump',
    id: 'platform',
    x: 175,
    y: 0,
    width: 175,
    height: 20
  },
  { i: 111, id: 'obstacle', x: 200, y: 0, width: 390, height: 1000 },
  {
    i: 112,
    section: 4,
    id: 'platform',
    x: 80,
    y: -50,
    width: 250,
    height: 20
  },
  { i: 113, id: 'platform', x: 80, y: -60, width: 180, height: 20 },
  { i: 114, id: 'platform', x: 80, y: 60, width: 825, height: 20 },
  { i: 115, id: 'platform', x: 80, y: 60, width: 300, height: 20 },
  { i: 116, id: 'platform', x: 80, y: -60, width: 300, height: 20 },
  { i: 117, id: 'platform', x: 80, y: -60, width: 1300, height: 20 },
  { i: 118, id: 'platform', x: 80, y: 60, width: 300, height: 20 },
  { i: 119, id: 'platform', x: 80, y: 60, width: 300, height: 20 },
  { i: 120, id: 'platform', x: 80, y: 60, width: 300, height: 20 },
  { i: 121, id: 'platform', x: 80, y: 60, width: 800, height: 20 },
  { i: 122, id: 'platform', x: 80, y: 60, width: 300, height: 20 },
  { i: 123, id: 'platform', x: 80, y: -60, width: 300, height: 20 },
  {
    i: 124,
    section: 5,
    id: 'platform',
    x: 80,
    y: -60,
    width: 3100,
    height: 20
  },
  {
    i: 125,
    section: 'jumpXS',
    id: 'platform',
    x: 120,
    y: -30,
    width: 200,
    height: 20
  },
  { i: 126, id: 'obstacle', x: 75, y: 60, width: 270, height: 20 },
  {
    i: 127,
    section: '5 reset',
    id: 'platform',
    x: 50,
    y: 10,
    width: 700,
    height: 20
  },
  {
    i: 128,
    section: 'jumpXS',
    id: 'platform',
    x: 120,
    y: -30,
    width: 200,
    height: 20
  },
  { i: 129, id: 'obstacle', x: 75, y: 60, width: 270, height: 20 },
  {
    i: 130,
    section: '5 reset',
    id: 'platform',
    x: 50,
    y: 10,
    width: 900,
    height: 20
  },
  {
    i: 131,
    section: 'jumpXS2',
    id: 'platform',
    x: 60,
    y: 40,
    width: 250,
    height: 20
  },
  { i: 132, id: 'obstacle', x: 50, y: 60, width: 330, height: 20 },
  {
    i: 133,
    section: '5 reset',
    id: 'platform',
    x: 60,
    y: 10,
    width: 1700,
    height: 20
  },
  { i: 134, id: 'obstacle', x: 30, y: 20, width: 60, height: 20 },
  { i: 135, id: 'platform', x: -1, y: -60, width: 100, height: 20 },
  { i: 136, id: 'platform', x: 80, y: 30, width: 200, height: 20 },
  { i: 137, id: 'platform', x: 100, y: -40, width: 200, height: 20 },
  { i: 138, id: 'platform', x: 100, y: -40, width: 200, height: 20 },
  { i: 139, id: 'platform', x: 100, y: 40, width: 950, height: 20 },
  {
    i: 140,
    section: 'jumpXS',
    id: 'platform',
    x: 120,
    y: -40,
    width: 200,
    height: 20
  },
  { i: 141, id: 'obstacle', x: 75, y: 60, width: 270, height: 20 },
  {
    i: 142,
    section: '5 reset',
    id: 'platform',
    x: 50,
    y: 10,
    width: 1000,
    height: 20
  },
  {
    i: 143,
    section: 'jumpXS',
    id: 'platform',
    x: 80,
    y: -30,
    width: 200,
    height: 20
  },
  {
    i: 144,
    section: 'jumpS',
    id: 'platform',
    x: 150,
    y: -50,
    width: 200,
    height: 20
  },
  {
    i: 145,
    section: 'finalBoost',
    id: 'boost',
    x: 100,
    y: 500,
    width: 10,
    height: 500
  },
  { i: 146, id: 'boost', x: 0, y: 0, width: 700, height: 500 },
  {
    i: 147,
    id: 'boostPlatRight',
    x: 0,
    y: -6200,
    width: 50,
    height: 5700
  },
  {
    i: 148,
    id: 'boostPlatLeft',
    x: -250,
    y: -500,
    width: 50,
    height: 5500
  },
  {
    i: 149,
    id: 'obstacleVertLeft',
    x: -1,
    y: -450,
    width: 50,
    height: 450
  },
  {
    i: 150,
    id: 'obstacleVertRight',
    x: 100,
    y: 4200,
    width: 50,
    height: 120
  },
  {
    i: 151,
    id: 'obstacleVertLeft',
    x: -150,
    y: -250,
    width: 50,
    height: 120
  },
  {
    i: 152,
    id: 'obstacleVertRight',
    x: 100,
    y: -300,
    width: 50,
    height: 120
  },
  {
    i: 152,
    id: 'obstacleVertLeft',
    x: -150,
    y: -750,
    width: 50,
    height: 120
  },
  {
    i: 153,
    id: 'obstacleVertRight',
    x: 100,
    y: -250,
    width: 50,
    height: 120
  },
  {
    i: 154,
    id: 'obstacleVertLeft',
    x: -150,
    y: -300,
    width: 50,
    height: 120
  },
  {
    i: 155,
    id: 'obstacleVertRight',
    x: 100,
    y: -900,
    width: 50,
    height: 300
  },
  {
    i: 156,
    section: 'end',
    id: 'platform',
    x: 600,
    y: -300,
    width: 4000,
    height: 2000
  }
];

// const layout = [
//   {
//     section: 1,
//     id: 'floor',
//     x: 0,
//     y: 500,
//     width: 100,
//     height: 300
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 2900,
//     height: 300
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 90,
//     height: 300
//   },
//   {
//     id: 'platform',
//     x: 0,
//     y: -110,
//     width: 100,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 60,
//     y: -90,
//     width: 100,
//     height: 20
//   },
//   {
//     id: 'floor',
//     x: 100,
//     y: 190,
//     width: 600,
//     height: 300
//   },
//   {
//     id: 'platform',
//     x: 90,
//     y: 50,
//     width: 90,
//     height: 20
//   },
//   {
//     id: 'floor',
//     x: 80,
//     y: -50,
//     width: 530,
//     height: 300
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 90,
//     height: 300
//   },
//   {
//     id: 'platform',
//     x: 50,
//     y: 80,
//     width: 90,
//     height: 20
//   },
//   {
//     id: 'floor',
//     x: 80,
//     y: 190,
//     width: 500,
//     height: 300
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: -130,
//     width: 100,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: -110,
//     width: 100,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 90,
//     y: -100,
//     width: 200,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 70,
//     y: 90,
//     width: 270,
//     height: 20
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 180,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 0,
//     y: 0,
//     width: 400,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 60,
//     y: -110,
//     width: 120,
//     height: 20
//   },
//   {
//     section: 'jumpS',
//     id: 'platform',
//     x: 60,
//     y: -110,
//     width: 120,
//     height: 20
//   },
//   {
//     section: 'resetJump1',
//     id: 'floor',
//     x: 300,
//     y: 300,
//     width: 400,
//     height: 500
//   },
//   {
//     id: 'platform',
//     x: 180,
//     y: 40,
//     width: 100,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 130,
//     y: 40,
//     width: 100,
//     height: 20
//   },
//   {
//     id: 'floor',
//     x: 60,
//     y: 80,
//     width: 500,
//     height: 500
//   },
//   {
//     id: 'platform',
//     x: 70,
//     y: -110,
//     width: 90,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 70,
//     y: -110,
//     width: 90,
//     height: 20
//   },
//   {
//     id: 'floor',
//     x: 120,
//     y: -60,
//     width: 900,
//     height: 500
//   },
//   {
//     section: 2,
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 10,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 750,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 150,
//     height: 500
//   },
//   {
//     id: 'obstacle',
//     x: 0,
//     y: 0,
//     width: 60,
//     height: 500
//   },
//   {
//     section: 'boostSection',
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 500,
//     height: 500
//   },
//   {
//     id: 'floor',
//     x: 0,
//     y: 0,
//     width: 300,
//     height: 500
//   },
//   {
//     id: 'boost',
//     x: 0,
//     y: 0,
//     width: 300,
//     height: 500
//   },
//   {
//     id: 'boost',
//     x: 0,
//     y: 0,
//     width: 1000,
//     height: 500
//   },
//   {
//     id: 'boostPlatRight',
//     x: -1,
//     y: -900,
//     width: 50,
//     height: 700
//   },
//   {
//     id: 'boostPlatLeft',
//     x: -270,
//     y: -700,
//     width: 50,
//     height: 600
//   },
//   {
//     id: 'boostPlatRight',
//     x: 110,
//     y: -500,
//     width: 50,
//     height: 500
//   },
//   {
//     id: 'boostPlatLeft',
//     x: -150,
//     y: -200,
//     width: 50,
//     height: 200
//   },
//   {
//     id: 'boostPlatRight',
//     x: 110,
//     y: -800,
//     width: 50,
//     height: 800
//   },
//   {
//     id: 'boostPlatLeft',
//     x: -140,
//     y: -300,
//     width: 50,
//     height: 300
//   },
//   {
//     id: 'boostPlatRight',
//     x: 110,
//     y: -300,
//     width: 50,
//     height: 300
//   },
//   {
//     id: 'boostPlatLeft',
//     x: -140,
//     y: -1500,
//     width: 50,
//     height: 1500
//   },
//   {
//     id: 'obstacleVertLeft',
//     x: -1,
//     y: -300,
//     width: 50,
//     height: 300
//   },
//   {
//     id: 'boostPlatRight',
//     x: 130,
//     y: 100,
//     width: 50,
//     height: 350
//   },
//   {
//     id: 'boostPlatRight',
//     x: 150,
//     y: -320,
//     width: 50,
//     height: 350
//   },
//   {
//     id: 'boostPlatRight',
//     x: 150,
//     y: -320,
//     width: 50,
//     height: 500
//   },
//   {
//     id: 'boostPlatRight',
//     x: 150,
//     y: -700,
//     width: 50,
//     height: 700
//   },
//   {
//     id: 'boostPlatLeft',
//     x: -150,
//     y: -400,
//     width: 50,
//     height: 400
//   },
//   {
//     id: 'boostPlatRight',
//     x: 150,
//     y: -400,
//     width: 50,
//     height: 400
//   },
//   {
//     id: 'boostPlatLeft',
//     x: -150,
//     y: -1600,
//     width: 50,
//     height: 1600
//   },
//   {
//     id: 'obstacleVertLeft',
//     x: -1,
//     y: -300,
//     width: 50,
//     height: 300
//   },
//   {
//     id: 'decoration',
//     x: -140,
//     y: 0,
//     width: 50,
//     height: 1000
//   },
//   {
//     section: 3,
//     id: 'platform',
//     x: 500,
//     y: 50,
//     width: 350,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 330,
//     y: 0,
//     width: 175,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 230,
//     y: 0,
//     width: 175,
//     height: 20
//   },
//   {
//     section: 'jump',
//     id: 'platform',
//     x: 180,
//     y: 0,
//     width: 175,
//     height: 20
//   },
//   {
//     id: 'obstacle',
//     x: 200,
//     y: 0,
//     width: 390,
//     height: 1000
//   },
//   {
//     section: 4,
//     id: 'platform',
//     x: 80,
//     y: -50,
//     width: 250,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: -60,
//     width: 180,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: 60,
//     width: 700,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: 60,
//     width: 250,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: -60,
//     width: 300,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: -60,
//     width: 1300,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: 60,
//     width: 300,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: 60,
//     width: 300,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: 60,
//     width: 300,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: 60,
//     width: 700,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: 60,
//     width: 300,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: -60,
//     width: 300,
//     height: 20
//   },
//   {
//     section: 5,
//     id: 'platform',
//     x: 80,
//     y: -60,
//     width: 3100,
//     height: 20
//   },
//   {
//     section: 'jumpXS',
//     id: 'platform',
//     x: 120,
//     y: -30,
//     width: 200,
//     height: 20
//   },
//   {
//     id: 'obstacle',
//     x: 75,
//     y: 60,
//     width: 270,
//     height: 20
//   },
//   {
//     section: '5 reset',
//     id: 'platform',
//     x: 50,
//     y: 10,
//     width: 700,
//     height: 20
//   },
//   {
//     section: 'jumpXS',
//     id: 'platform',
//     x: 120,
//     y: -30,
//     width: 200,
//     height: 20
//   },
//   {
//     id: 'obstacle',
//     x: 75,
//     y: 60,
//     width: 270,
//     height: 20
//   },
//   {
//     section: '5 reset',
//     id: 'platform',
//     x: 50,
//     y: 10,
//     width: 900,
//     height: 20
//   },
//   {
//     section: 'jumpXS2',
//     id: 'platform',
//     x: 60,
//     y: 40,
//     width: 250,
//     height: 20
//   },
//   {
//     id: 'obstacle',
//     x: 50,
//     y: 60,
//     width: 330,
//     height: 20
//   },
//   {
//     section: '5 reset',
//     id: 'platform',
//     x: 60,
//     y: 10,
//     width: 1700,
//     height: 20
//   },
//   {
//     id: 'obstacle',
//     x: 30,
//     y: 20,
//     width: 60,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: -1,
//     y: -60,
//     width: 100,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 80,
//     y: 30,
//     width: 200,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 100,
//     y: -40,
//     width: 200,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 100,
//     y: -40,
//     width: 200,
//     height: 20
//   },
//   {
//     id: 'platform',
//     x: 100,
//     y: 40,
//     width: 950,
//     height: 20
//   },
//   {
//     section: 'jumpXS',
//     id: 'platform',
//     x: 120,
//     y: -40,
//     width: 200,
//     height: 20
//   },
//   {
//     id: 'obstacle',
//     x: 75,
//     y: 60,
//     width: 270,
//     height: 20
//   },
//   {
//     section: '5 reset',
//     id: 'platform',
//     x: 50,
//     y: 10,
//     width: 1000,
//     height: 20
//   },
//   {
//     section: 'jumpXS',
//     id: 'platform',
//     x: 80,
//     y: -30,
//     width: 200,
//     height: 20
//   },
//   {
//     section: 'jumpS',
//     id: 'platform',
//     x: 150,
//     y: -50,
//     width: 200,
//     height: 20
//   },
//   {
//     section: 'finalBoost',
//     id: 'boost',
//     x: 100,
//     y: 500,
//     width: 10,
//     height: 500
//   },
//   {
//     id: 'boost',
//     x: 0,
//     y: 0,
//     width: 700,
//     height: 500
//   },
//   {
//     id: 'boostPlatRight',
//     x: 0,
//     y: -6200,
//     width: 50,
//     height: 5700
//   },
//   {
//     id: 'boostPlatLeft',
//     x: -250,
//     y: -500,
//     width: 50,
//     height: 5500
//   },
//   {
//     id: 'obstacleVertLeft',
//     x: -1,
//     y: -450,
//     width: 50,
//     height: 450
//   },
//   {
//     id: 'obstacleVertRight',
//     x: 100,
//     y: 4200,
//     width: 50,
//     height: 120
//   },
//   {
//     id: 'obstacleVertLeft',
//     x: -150,
//     y: -250,
//     width: 50,
//     height: 120
//   },
//   {
//     id: 'obstacleVertRight',
//     x: 100,
//     y: -300,
//     width: 50,
//     height: 120
//   },
//   {
//     id: 'obstacleVertLeft',
//     x: -150,
//     y: -750,
//     width: 50,
//     height: 120
//   },
//   {
//     id: 'obstacleVertRight',
//     x: 100,
//     y: -250,
//     width: 50,
//     height: 120
//   },
//   {
//     id: 'obstacleVertLeft',
//     x: -150,
//     y: -300,
//     width: 50,
//     height: 120
//   },
//   {
//     id: 'obstacleVertRight',
//     x: 100,
//     y: -900,
//     width: 50,
//     height: 300
//   },
//   {
//     section: 'end',
//     id: 'platform',
//     x: 600,
//     y: -300,
//     width: 4000,
//     height: 2000
//   }
// ];

let accWidth = 0;
const layout3 = layout.map((value, i, originalArray) => {
  if (i) {
    if (originalArray[i].x >= 0) {
      accWidth += originalArray[i - 1].width + originalArray[i].x;
      value.x += accWidth;
    }
    if (originalArray[i].x < 0) {
      accWidth += originalArray[i].x;
      value.x = accWidth;
    }
  } else {
    accWidth = value.x;
  }
  if (!i) {
    accY = originalArray[i].y;
    value.y = accY;
  } else {
    accY += originalArray[i].y;
    value.y = accY;
  }

  return value;
});

// Wasn't working
// layout2 = layout.reduce(function (acc, cur, i) {
//   return (layout[i - 1] = {
//     ...cur,
//     x: acc.x + acc.width + cur.x
//   });
// });

// const layout = [];
// layout = layoutData.map((item, i, arr) => {
//   let previousItem;
//   let previousItemWidth, previousItemX;
//   if (i === 0) {
//     previousItemWidth = 0;
//     previousItemX = 0;
//   } else {
//     previousItem = layout[i - 1];
//     previousItemWidth = previousItem.width;
//     previousItemX = previousItem.x;
//   }
//   return {
//     id: item.id,
//     x: previousItemWidth + previousItemX + item.x,
//     y: item.y,
//     width: item.width,
//     height: item.height
//   };
// });

// {
//   id: 'boost',
//   x: 600,
//   y: 500,
//   width: 290,
//   height: 300
// },
// {
//   id: 'boostPlatRight',
//   x: 800,
//   y: 400,
//   width: 60,
//   height: 120
// },
// {
//   id: 'boostPlatLeft',
//   x: 500,
//   y: 50,
//   width: 60,
//   height: 120
// },
