const twoPlayers_body = document.querySelector(`body`);

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

playerOneArray = [];
playerTwoArray = [];

imageZero = document.createElement(`img`);
imageZero.src = `Hangman_image_0`;
imageOne = document.createElement(`img`);
imageOne.src = `Hangman_image_1`;
imageTwo = document.createElement(`img`);
imageTwo.src = `Hangman_image_2`;
imageThree = document.createElement(`img`);
imageThree.src = `Hangman_image_3`;
imageFour = document.createElement(`img`);
imageFour.src = `Hangman_image_4`;
imageFive = document.createElement(`img`);
imageFive.src = `Hangman_image_5`;
imageSix = document.createElement(`img`);
imageSix.src = `Hangman_image_6`;

hangmanArray = [imageZero, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix];

const cards = document.querySelectorAll(`.card`);

const roleFlipper = roleChange();

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener(`click`, function () {
    if (!this.classList.contains(`X`) && !this.classList.contains(`O`)) {
      let role = roleFlipper();

      if (role === `X`) {
        this.classList.add(`X`);
        const picture = document.createElement(`img`);
        picture.src = `shooting-star.png`;
        picture.height = `165.5`;
        picture.width = `162.5`;
        playerTwoArray.push(this);
        this.appendChild(picture);
      } else if (role === `O`) {
        this.classList.add(`O`);
        const picture = document.createElement(`img`);
        picture.src = `moon.jfif`;
        picture.height = `165.5`;
        picture.width = `162.5`;
        this.appendChild(picture);
        playerOneArray.push(this);
      }
    } else {
      alert(`This square is occupied`);
    }
  });
}

if (playerTwoArray.length === winningArray[0].length) {
  alert(`Player 2 wins!`);
}

// const compareArrays = (array1, array2) => {
//   let comparisonArray = [];

//   for (i = 0, j = 0; i < array1.length && j < array2.length; i++, j++) {
//     if (array1[i] === array2[j]) {
//       comparisonArray.push(array1[i]);
//     }
//   }
//   return comparisonArray;
// };

// if (playerOneArray.length >= 3) {
//   playerOneArray.sort();

//   winningArray.array.forEach((element) => {
//     if (compareArrays(playerOneArray, element).length === element.length) {
//       alert(`Winner: Player 1 wins!`);
//     }
//   });
// }

// if (playerTwoArray.length >= 3) {
//   playerTwoArray.sort();

//   winningArray.array.forEach((element) => {
//     if (compareArrays(playerTwoArray, element).length === element.length) {
//       alert(`Winner: Player 2 wins!`);
//     }
//   });
// }

// if (playerOneArray.length + playerTwoArray.length === 9) {

//   if (playerOneArray.length >= 3) {
//     playerOneArray.sort();

//     winningArray.array.forEach((element) => {
//       if (compareArrays(playerOneArray, element).length === element.length) {
//         alert(`Winner: Player 1 wins!`);
//       }
//     });
//   }

//   if (playerTwoArray.length >= 3) {
//     playerTwoArray.sort();

//     winningArray.array.forEach((element) => {
//       if (compareArrays(playerTwoArray, element).length === element.length) {
//         alert(`Winner: Player 2 wins!`);
//       }
//     });
//   }

//   alert (`It's a draw!`)
// }
