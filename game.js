class Game {
  constructor() {
    this.startScreen = document.getElementById("game-start")
    this.gameScreen = document.getElementById("gameScreen")
    // this.gameEndScreen = document.getElementById("game-end")
    this.ball = document.getElementById("penalty-kicker")
    this.goalie = document.getElementById("goalkeeper")
    this.blockingDiv = document.getElementById("blocking-div")
    this.team1ScoreDiv = document.getElementById("team1Score")
    this.otherTeamScoreDiv = document.getElementById("team2Score")
    this.goalSreen = document.getElementById("made-goal")
    this.team1Score = 0
    this.otherTeamScore = 0

    // console.log("This is the goalie", this.goalie)
    // console.log("this is the blocking div", this.blockingDiv)
  }

  start() {
    this.gameScreen.style.display = "flex"
    // this.gameScreen.style.height = "100vh"

    this.startScreen.style.display = "none"
    this.startScreen.style.padding = 0
    this.startScreen.style.height = 0
  }

  isGameOver() {

    if (this.team1Score == 5) {
      alert('Congratulations! You scored 5 goals! You won!!!')
      window.location.reload()
      // setTimeout(() => {
      //   window.location.reload()
      // }, 1500);
    }

    if (this.otherTeamScore == 5) {
      alert("Sorry. Five kicks have been blocked. You lose!!!!")
      window.location.reload()
      // setTimeout(() => {
      //   window.location.reload()
      // }, 1500);
    }}
}
