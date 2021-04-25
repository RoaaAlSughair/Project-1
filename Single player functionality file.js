const singlePlayer_body = document.querySelector("body");

const roleChange = () => {
  let roleSwitch = `X`;

  return () => {
    if (roleSwitch === `X`) {
      roleSwitch = `O`;
      return roleSwitch;
    } else {
      roleSwitch = `X`;
      return roleSwitch;
    }
  };
};

playerOneArray = [];
playerTwoArray = [];

const cards = document.querySelectorAll(`.card`);

const roleFlipper = roleChange();

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener(`click`, function () {
    let role = roleFlipper();

    if (role === `O`) {
      if (!this.classList.contains(`X`) && !this.classList.contains(`O`)) {
        this.classList.add(`O`);
        playerOneArray.push(this);

        computerMove = () => {
          let squareNumber = Math.round(Math.round() * 9);

          if (
            !document.getElementById(`${squareNumber}`).contains(`X`) &&
            !document.getElementById(`${squareNumber}`).contains(`O`)
          ) {
            document.getElementById(`${squareNumber}`).classList.add(`X`);
            playerTwoArray.push(document.getElementById(`${squareNumber}`));
          } else {
            return computerMove();
          }
        };
      } else {
        alert(`This square is occupied`);
      }
    }
  });
}

winningArray = [
  [
    document.getElementById(`1`),
    document.getElementById(`2`),
    document.getElementById(`3`),
  ],
  [
    document.getElementById(`4`),
    document.getElementById(`5`),
    document.getElementById(`6`),
  ],
  [
    document.getElementById(`7`),
    document.getElementById(`8`),
    document.getElementById(`9`),
  ],
  [
    document.getElementById(`1`),
    document.getElementById(`4`),
    document.getElementById(`7`),
  ],
  [
    document.getElementById(`2`),
    document.getElementById(`5`),
    document.getElementById(`8`),
  ],
  [
    document.getElementById(`3`),
    document.getElementById(`6`),
    document.getElementById(`9`),
  ],
  [
    document.getElementById(`1`),
    document.getElementById(`5`),
    document.getElementById(`9`),
  ],
  [
    document.getElementById(`3`),
    document.getElementById(`5`),
    document.getElementById(`7`),
  ],
];

const compareArrays = (array1, array2) => {
  let comparisonArray = [];

  for (i = 0, j = 0; i < array1.length && j < array2.length; i++, j++) {
    if (array1[i] === array2[j]) {
      comparisonArray.push(array1[i]);
    }
    return comparisonArray;
  }
};

if (playerOneArray.length >= 3) {
  playerOneArray.sort();

  winningArray.array.forEach((element) => {
    if (compareArrays(playerOneArray, element).length === element.length) {
      alert(`Winner: Player wins`);
    }
  });
}

if (playerTwoArray.length >= 3) {
  playerTwoArray.sort();

  winningArray.array.forEach((element) => {
    if (compareArrays(playerTwoArray, element).length === element.length) {
      alert(`Winner: Computer wins`);
    }
  });
}
