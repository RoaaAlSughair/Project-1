const singlePlayer_body = document.querySelector("body");

playerOneArray = [];
playerTwoArray = [];
playerOneWinCount = 0;
playerOneLoseCount = 0;
playerTwoWinCount = 0;
playerTwoLoseCount = 0;

// The commented code below is for the computer as a player feature

// computerMove = () => {
//   let squareNumber = Math.round(Math.round() * 9);

//   if (
//     !document.getElementById(`${squareNumber}`).contains(`X`) &&
//     !document.getElementById(`${squareNumber}`).contains(`O`)
//   ) {
//     document.getElementById(`${squareNumber}`).classList.add(`X`);
//     const picture = document.createElement(`img`);
//     picture.src = `shooting-star.png`;
//     picture.height = `166`;
//     picture.width = `162.5`;
//     playerTwoArray.push(this);
//     document.getElementById(`${squareNumber}`).appendChild(picture);
//     playerTwoArray.push(document.getElementById(`${squareNumber}`));
//   }
// };

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener(`click`, () => {
    if (!this.classList.contains(`X`) && !this.classList.contains(`O`)) {
      this.classList.add(`O`);
      const picture = document.createElement(`img`);
      picture.src = `Moon.png`;
      picture.height = `166`;
      picture.width = `162.5`;
      this.appendChild(picture);
      playerOneArray.push(this);
      // computerMove();
    } else {
      alert(`This square is occupied`);
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

imageZero = document.createElement(`img`);
imageZero.src = `Hangman_image_0.png`;
imageOne = document.createElement(`img`);
imageOne.src = `Hangman_image_1.png`;
imageTwo = document.createElement(`img`);
imageTwo.src = `Hangman_image_2.png`;
imageThree = document.createElement(`img`);
imageThree.src = `Hangman_image_3.png`;
imageFour = document.createElement(`img`);
imageFour.src = `Hangman_image_4.png`;
imageFive = document.createElement(`img`);
imageFive.src = `Hangman_image_5.png`;
imageSix = document.createElement(`img`);
imageSix.src = `Hangman_image_6.png`;

hangmanArray = [
  imageZero,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
];

const cards = document.querySelectorAll(`.card`);

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener(`click`, (event) => {
    if (
      !event.target.classList.contains(`X`) &&
      !event.target.classList.contains(`O`)
    ) {
      event.target.classList.add(`O`);
      const picture = document.createElement(`img`);
      picture.src = `Moon.png`;
      picture.height = `166`;
      picture.width = `162.5`;
      this.appendChild(picture);
      playerOneArray.push(this);
      // computerMove();
    } else {
      alert(`This square is occupied`);
    }

    if (playerOneArray.length >= 3 || playerTwoArray.length >= 3) {
      winningArray.forEach((element) => {
        if (
          element[0].classList.contains(`O`) &&
          element[1].classList.contains(`O`) &&
          element[2].classList.contains(`O`)
        ) {
          playerOneWinCount++;
          playerTwoLoseCount++;
          alert(`Player wins!`);
          document.querySelector(".playerScoreDisplay").remove(`img`);
          document
            .querySelector("#playerTwo")
            .appendChild(hangmanArray[playerTwoLoseCount]);
          const oCards = document.querySelectorAll(`O`);
          for (i = 0; i < oCards.length; i++) {
            oCards[i].remove(`img`);
            oCards[i].classList.remove(`O`);
          }
          const xCards = document.querySelectorAll(`X`);
          for (i = 0; i < oCards.length; i++) {
            xCards[i].remove(`img`);
            xCards[i].classList.remove(`X`);
          }
        } else if (
          element[0].classList.contains(`X`) &&
          element[1].classList.contains(`X`) &&
          element[2].classList.contains(`X`)
        ) {
          playerTwoWinCount++;
          playerOneLoseCount++;
          alert(`Computer wins!
        
        Good luck in the next round Player`);
          document.querySelector(".playerScoreDisplay").remove(`img`);
          document
            .querySelector("#playerOne")
            .appendChild(hangmanArray[playerOneLoseCount]);
          const oCards = document.querySelectorAll(`O`);
          for (i = 0; i < oCards.length; i++) {
            oCards[i].remove(`img`);
            oCards[i].classList.remove(`O`);
          }
          const xCards = document.querySelectorAll(`X`);
          for (i = 0; i < oCards.length; i++) {
            xCards[i].remove(`img`);
            xCards[i].classList.remove(`X`);
          }
        }
      });
    }
  });
}
