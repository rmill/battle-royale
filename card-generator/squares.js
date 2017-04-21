SQUARES = [
'CLASSICAL',
'TIME',
'PHOTO',
'BEACH',
'AXE',
'CARRIED',
'SUICIDE',
'COLLAR',
'CROSSBOW',
'REPORT',
'DEATH',
'FEMALE_DEATH',
'FLASHBACK',
'FLASHLIGHT',
'GUN',
'HELICOPTER',
'KNIFE',
'LAUGH',
'MALE_DEATH',
'MAP',
'MILITARY',
'MONITOR',
'NONCHARA',
'NORIKO',
'PROFESS_LOVE',
'SICKLE',
'TAZER',
'TEXT',
'WATER_BOTTLE',
'YELLING',
'KATANA',
'FIRE'
]

function getRandomSquare() {
  return SQUARES[getRandomInt(0, SQUARES.length - 1)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
