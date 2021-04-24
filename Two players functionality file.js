const twoPlayers_body = document.querySelector(`body`);

const roleChange =  () => {
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

const cards = document.querySelectorAll(`.card`)
const roleFlipper = roleChange();
for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener(`click`, function() {
        if(!this.classList.contains(`X`) && !this.classList.contains(`O`)){

            let role = roleFlipper();

            if (role === `X`) {
                this.classList.add(`X`);
            } else if (role === `O`) {
                this.classList.add(`O`);
            }
        } else {
            alert(`This square is occupied`);
        }
  });
}