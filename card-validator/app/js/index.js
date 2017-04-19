// var FourInACorner = [
//   [0, 1, 4, 5], // top left
//   [2, 3, 6, 7], // top right
//   [8, 9, 12, 13] // bottom left
//   [10, 11, 14, 15] // bottom right
// ];
//
// var Blackout = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// function validate (currentItems, gameType, card) {
//   for (var cellSet of gameType) {
//     var valid = true;
//
//     for (var cell of cellSet) {
//       var item = card[cell];
//       if (currentItems.indexOf(item) === -1) {
//         valid = false;
//         break;
//       }
//     }
//
//     if (valid) {
//       return true;
//     }
//   }
//
//   return false;
// }
//
// function getCurrentItems(startTime, endTime, items) {
//   var items = [];
//   for (var i=startTime; i <= endTime; i++) {
//     if (items[i]) {
//       items.push(items[i]);
//     }
//   }
//
//   return items;
// }
const $ = require('jquery');
const {dialog} = require('electron').remote

window.onload = function () {
  const movie = $('#movie');
  const movieFilepath = dialog.showOpenDialog({ title: 'Select Battle Royale Movie File', properties: ['openFile'] });
  const subtitlesFilepath = dialog.showOpenDialog({ title: 'Select Battle Royale Subtitles File', properties: ['openFile'] });

  movie.find('source').attr('src', movieFilepath);
  movie.find('track').attr('src', subtitlesFilepath);
  movie.get(0).load();
};
