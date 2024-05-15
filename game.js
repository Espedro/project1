class Game {
  constructor() {
    this.startScreen = document.getElementById("game-start")
    this.gameScreen = document.getElementById("gameScreen")
    this.gameEndScreen = document.getElementById("game-end")
    this.ball = document.getElementById("penalty-kicker")
  }

  start() {
    this.gameScreen.style.display = "flex"
    // this.gameScreen.style.height = "100vh"

    this.startScreen.style.display = "none"
    this.startScreen.style.padding = 0
    this.startScreen.style.height = 0
  }
}
