var patterns = {
  BLACKOUT: [[0, 1, 2, 3, 4, 5, 6 ,7 , 8, 9, 10, 11, 12, 13, 14, 15]],
  X: [[0, 3, 4, 6, 9, 10, 12, 15]],
  TOP: [[0, 1, 2, 3, 4, 5, 6, 7]],
  BOTTOM: [[8, 9, 10, 11, 12, 13, 14, 15]],
  CORNERS: [[0, 3, 12, 15]],
  CIRCLE: [[0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15]],
  ROW:[
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15]
  ]
};
module.exports = patterns;
