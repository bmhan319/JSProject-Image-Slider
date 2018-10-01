const HOUSE = document.querySelectorAll('.house-wrapper');
const DOTS = document.querySelectorAll('.dot');
let houseIndex = 1;


// SETS RULES FOR THE ARROW LINKS
function arrowClick(number) {
  houseIndex += number;
  if (houseIndex > HOUSE.length) {
    houseIndex = 1;
  }
  if (houseIndex <= 0) {
    houseIndex = HOUSE.length;
  }
  showHouse(houseIndex);
};


// SETS RULES FOR THE DOTS
function dotClick(number){
  houseIndex = number;
  showHouse(houseIndex);
};

//DECIDES WHICH HOUSE TO DISPLAY
function showHouse(houseIndex) {
  for (i = 0; i < HOUSE.length; i++) {
    HOUSE[i].setAttribute("style", "display:none");
    DOTS[i].setAttribute("class", "dot");
  }
  HOUSE[houseIndex - 1].setAttribute("style", "display:block");
  DOTS[houseIndex - 1].setAttribute("class", "active");
};

showHouse(houseIndex);