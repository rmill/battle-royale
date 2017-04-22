const jQuery = $ = require('jquery');
const bootstrap = require('bootstrap');
const {dialog} = require('electron').remote
const cards = require('../js/cards');
const patterns = require('../js/patterns');
const timeline = require('../js/timeline');

window.onload = function () {
  const movie = $('#movie');
  const validationModal = $('#validation-modal');
  const result = $('#result');

  let previousBingoTime = 0;

  const movieFilepath = dialog.showOpenDialog({ title: 'Select Battle Royale Movie File', properties: ['openFile'] });
  const subtitlesFilepath = dialog.showOpenDialog({ title: 'Select Battle Royale Subtitles File', properties: ['openFile'] });

  movie.find('source').attr('src', movieFilepath);
  movie.find('track').attr('src', subtitlesFilepath);
  movie.get(0).load();

  $('body').keyup(function(e){
    if(e.keyCode == 32){
      // user has pressed space
      validationModal.modal('toggle');
      movie.get(0).pause();
    }
  });

  $('#validate-card').click(function(){
    // const cardNumber = validationModal.find('#card-number').val();
    // const card = cards[cardNumber];
    // const patternType = validationModal.find('#pattern-type').val();
    // const pattern = patterns[patternType];
    // const currentTime = movie.get(0).currentTime;
    // const currentItems = getCurrentItems(previousBingoTime, currentTime);
    //
    // const isValid = validate(currentItems, pattern, card);

    result.show();
    validationModal.find('.modal-footer').hide();

    // if (isValid) {
      // previousBingoTime = currentTime;
      result.find('i').addClass('fa-check valid');
      result.find('i').removeClass('fa-close invalid');
    // } else {
    //   result.find('i').removeClass('fa-check valid');
    //   result.find('i').addClass('fa-close invalid');
    // }
  });

  validationModal.on('hidden.bs.modal', function() {
    result.hide();
    validationModal.find('.modal-footer').show();
    validationModal.find('#card-number').val(null);
    movie.get(0).play();
  });

  validationModal.on('show.bs.modal', function() {
    movie.get(0).pause();
  });
};

function validate (currentItems, pattern, card) {
  for (var cellSet of pattern) {
    var valid = true;

    for (var cell of cellSet) {
      var item = card[cell];
      if (currentItems.indexOf(item) === -1) {
        valid = false;
        break;
      }
    }

    if (valid) {
      return true;
    }
  }

  return false;
}

function getCurrentItems(startTime, endTime) {
  var items = [];
  for (var i=startTime; i <= endTime; i++) {
    if (timeline[i]) {
      items.push(items[i]);
    }
  }

  return items;
}
