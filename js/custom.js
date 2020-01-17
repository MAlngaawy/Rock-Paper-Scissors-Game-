
// Let's Start
// Define variables
const overlay = document.querySelector(".rules-overlay")
const userScore = document.querySelector(".score")
const game = document.querySelector(".game")
const resultSection = document.querySelector(".result-section")
const userResult = document.querySelector(".user-result")
const userChooisesList = document.querySelector(".user-chooise .chooise").children
const houseChooisesList = document.querySelector(".house-chooise .chooise").children
const playAgainBtn = document.querySelector(".play-again")

let score = 0
// Show & Hide Overlay
function displayOverlay() {
  overlay.classList.remove("d-none")
}
function hideOverlay() {
  overlay.classList.add("d-none")
}

// CHange User Result
function editUserResult(result) {
  userResult.innerHTML = result
}

// display user chooise
function displayUserChooise(chooise) {
  // userChooisesList[chooise].classList.remove("d-none")
  for(all of userChooisesList) {
    all.style.display = "none"
  }
  userChooisesList[chooise].style.display = "grid"
}
function displayHouseChooise(chooise) {
  for(all of houseChooisesList) {
    all.style.display = "none"
  }
  houseChooisesList[chooise].style.display = "grid"
}

// When User Click
function chooise(element) {
  // User chooise
  let userChooise
  if (element.classList.contains("rock")){
    userChooise = 1 // Rock
    displayUserChooise(0)
  } else if (element.classList.contains("paper")) {
    userChooise = 2 // Paper
    displayUserChooise(1)
  } else if(element.classList.contains("scissors")) {
    userChooise = 3 // Scissors
    displayUserChooise(2)
  }
  // House Chooise
  let houseChooise = Math.ceil(Math.random() * 3) // From 1 To 3
  switch(houseChooise){
    case 1:
     setTimeout( displayHouseChooise(0), 2000);
      break;
    case 2:
      setTimeout( displayHouseChooise(1), 2000);
      break;
    case 3:
      setTimeout( displayHouseChooise(2), 2000);
      break;
  }

  // Result
  if (userChooise == 1) { // User Chooises (Rock)
    if (houseChooise == 2) {
      score -= 1
      editUserResult("You Lose")
    } else if (houseChooise == 3) {
      score += 1
      editUserResult("You Win")
    }
  } else if (userChooise == 2) { // User Chooises (Paper)
    if (houseChooise == 1) {
      score += 1
      editUserResult("You Win")
    } else if (houseChooise == 3) {
      score -= 1
      editUserResult("You Lose")
    }
  } else { // User Chooise (Scissors)
    if (houseChooise == 1 ) {
      score -= 1
      editUserResult("You Lose")
    } else if (houseChooise == 2) {
      score += 1
      editUserResult("You win")
    }
  }

  // Print Result
  userScore.innerHTML = score

  game.classList.add("d-none")
  resultSection.classList.remove("d-none")

  
}

// Click Play Again Btn
function playAgain() {
  game.classList.remove("d-none")
  resultSection.classList.add("d-none")
}