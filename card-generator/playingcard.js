const ROWS = 4;
const COLUMNS = 4;
const NUM_CARDS = 200;

function generateCards() {
  var cards = {};
  for(var i = 0; i < NUM_CARDS; i++) {
    cards[i] = generateCard(i + 1);
  }

  renderJson(cards);
}

function generateCard(id) {
  var card = { id: id, rows: [] };
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
  return card;
}

function renderCard(card) {
  var template = nunjucks.renderString (view, card);
  document.getElementById("cards").insertAdjacentHTML('beforeend', template);
}

function renderJson(cards) {
  json = {};
  for(var index in cards) {
    var card = cards[index];
    var cardArray = [
      card.rows[0].columns[0],
      card.rows[0].columns[1],
      card.rows[0].columns[2],
      card.rows[0].columns[3],
      card.rows[1].columns[0],
      card.rows[1].columns[1],
      card.rows[1].columns[2],
      card.rows[1].columns[3],
      card.rows[2].columns[0],
      card.rows[2].columns[1],
      card.rows[2].columns[2],
      card.rows[2].columns[3],
      card.rows[3].columns[0],
      card.rows[3].columns[1],
      card.rows[3].columns[2],
      card.rows[3].columns[3]
    ];

    json[card.id] = cardArray;
  }

  console.log(JSON.stringify(json));
}
