
// Let's Start
// Define variables
const overlay = document.querySelector(".rules-overlay")
const user_score = document.querySelector(".user-score h2")
const house_score = document.querySelector(".house-score h2")
const game = document.querySelector(".game")
const resultSection = document.querySelector(".result-section")
const userResult = document.querySelector(".user-result")
const userChooisesList = document.querySelector(".user-chooise .chooise").children
const houseChooisesList = document.querySelector(".house-chooise .chooise").children
const playAgainBtn = document.querySelector(".play-again")
const scoreBox = document.querySelector(".score-box")

let userScore = 0
let houseScore = 0
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
     displayHouseChooise(0)
      break;
    case 2:
      displayHouseChooise(1)
      break;
    case 3:
      displayHouseChooise(2)
      break;
  }

  // Result
  if (userChooise == 1) { // User Chooises (Rock)
    if (houseChooise == 2) {
      houseScore += 1
      editUserResult("You Lose")
    } else if (houseChooise == 3) {
      userScore += 1
      editUserResult("You Win")
    } else {
      editUserResult("No Winer")
    }
  } else if (userChooise == 2) { // User Chooises (Paper)
    if (houseChooise == 1) {
      userScore += 1
      editUserResult("You Win")
    } else if (houseChooise == 3) {
      houseScore += 1
      editUserResult("You Lose")
    } else {
      editUserResult("No Winer")
    }
  } else { // User Chooise (Scissors)
    if (houseChooise == 1 ) {
      houseScore += 1
      editUserResult("You Lose")
    } else if (houseChooise == 2) {
      userScore += 1
      editUserResult("You Win")
    } else {
      editUserResult("No Winer")

    }
  }

  // Print Result
  user_score.innerHTML = userScore
  house_score.innerHTML = houseScore

  game.classList.add("d-none")
  resultSection.classList.remove("d-none")

  setTimeout(() => {
    if (userResult.innerHTML == "You Win") {
      for (all of userChooisesList) {
        if (all.style.display == "grid") {
          all.style.boxShadow = ` 0 0 0 15px hsl(0, 0%, 80%, 0.3),  0 0 0 30px hsl(0, 0%, 80%, 0.2)`
        }
      }
    } else if (userResult.innerHTML == "You Lose") {
      for (all of houseChooisesList) {
        if (all.style.display == "grid") {
          all.style.boxShadow = ` 0 0 0 15px hsl(0, 0%, 80%, 0.3),  0 0 0 30px hsl(0, 0%, 80%, 0.2)`
        }
      }
    }
  }, 300);

}

// Click Play Again Btn
function playAgain() {
  game.classList.remove("d-none")
  resultSection.classList.add("d-none")
  for(all of userChooisesList) {
    all.style.boxShadow = "none"
  }
  for(all of houseChooisesList) {
    all.style.boxShadow = "none"
  }
}