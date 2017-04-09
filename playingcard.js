const ROWS = 4;
const COLUMNS = 4;

function generateCard() {
  var card = { rows: [] };
  var cardSquares = [];

  for (var i = 0; i < ROWS; i++) {
    var row = { columns: [] };
    for (var j = 0; j < COLUMNS; j++) {
      var square;
      do {
        square = getRandomSquare();
      }
      while (cardSquares.indexOf(square) != -1);
      cardSquares.push(square);
      row.columns.push(square);
    }

    card.rows.push(row);
  }

  renderCard(card);
}

function renderCard(card) {
  console.log(card);
  var template = nunjucks.renderString (view, card);
  document.getElementById("cards").insertAdjacentHTML('beforeend', template);
}
