window.onload = function () {
  const startButton = document.getElementById("start-button")
  const restartButton = document.getElementById("restart-button")

  let game

  startButton.addEventListener("click", function () {
    startGame()
  })

  function startGame() {
    game = new Game()
    game.start()

    let zone1 = document.getElementById("1")
    let zone2 = document.getElementById("2")
    let zone3 = document.getElementById("3")
    let zone4 = document.getElementById("4")
    let zone5 = document.getElementById("5")
    let zone6 = document.getElementById("6")

    let zones = [zone1, zone2, zone3, zone4, zone5, zone6]

    let zone1Rect = zone1.getBoundingClientRect()
    let zone2Rect = zone2.getBoundingClientRect()
    let zone3Rect = zone3.getBoundingClientRect()
    let zone4Rect = zone4.getBoundingClientRect()
    let zone5Rect = zone5.getBoundingClientRect()
    let zone6Rect = zone6.getBoundingClientRect()

    let goalieRect = game.goalie.getBoundingClientRect()

    zones.forEach((zone) => {
      let thisId = zone.getAttribute("id")

      console.log(`I've clicked on Zone: ${thisId}`)

      let ballRect = game.ball.getBoundingClientRect()

      zone.addEventListener("click", (e) => {
        e.stopPropagation()
        e.stopImmediatePropagation()
        e.preventDefault()

        game.blockingDiv.style.zIndex = "99"

        let initialX = ballRect.left
        let initialY = ballRect.top

        let stepX = (e.x - 30 - initialX) / 5
        let stepY = (e.y - 30 - initialY) / 5

        let counter = 0
        let ballInterval
        ballInterval = setInterval(() => {
          if (counter < 5) {
            initialX += stepX
            initialY += stepY

            game.ball.style.left = `${initialX}px`
            game.ball.style.top = `${initialY}px`
            counter += 1
          } else {
            clearInterval(ballInterval)
            setTimeout(() => {
              game.ball.style.left = `${ballRect.left}px`
              game.ball.style.top = `${ballRect.top}px`
              game.blockingDiv.style.zIndex = "0"
            }, 1000)
          }
        }, 100)

        let goalieInitialX = goalieRect.x
        let goalieInitialY = goalieRect.y

        let randomNumber = Math.ceil(Math.random() * 10)

        console.log("This is our random", randomNumber)

        // let goalieRect = game.goalie.getBoundingClientRect()
        if (randomNumber > 7) {

          game.otherTeamScore++
          console.log("Greater than 5")

          game.goalie.style.left = `${e.x - 25}px`
          game.goalie.style.top = `${e.y - 110}px`
        } else {
          let randomDiv = Math.ceil(Math.random() * 6)

          console.log("Random div!!!!!!!!!!!!!!!", randomDiv)

          if (randomNumber !== randomDiv) {
            game.team1Score++
            setTimeout(() => {
              game.goalSreen.style.display = 'inline'
              game.goalScreen.style.height = "fit-content"
            }, 500);
  
            setTimeout(() => {
              game.goalSreen.style.display = 'none'
              game.goalScreen.style.height = "0"
            }, 1500);
          } else {
            game.otherTeamScore++
          }



          // zone1Rect
          // zone2Rect
          // zone3Rect
          // zone4Rect
          // zone5Rect
          // zone6Rect

          switch (true) {
            case randomDiv === 1:

              game.goalie.style.left = `${zone1Rect.x}px`
              game.goalie.style.top = `${zone1Rect.y}px`

              console.log("RANDOM BLOCKING!!!!!")

              break
            case randomDiv === 2:
              game.goalie.style.left = `${zone2Rect.x}px`
              game.goalie.style.top = `${zone2Rect.y}px`

              console.log("RANDOM BLOCKING!!!!!")

              break
            case randomDiv === 3:
              game.goalie.style.left = `${zone3Rect.x}px`
              game.goalie.style.top = `${zone3Rect.y}px`

              console.log("RANDOM BLOCKING!!!!!")

              break
            case randomDiv === 4:
              game.goalie.style.left = `${zone4Rect.x}px`
              game.goalie.style.top = `${zone4Rect.y}px`

              console.log("RANDOM BLOCKING!!!!!")

              break
            case randomDiv === 5:
              game.goalie.style.left = `${zone4Rect.x}px`
              game.goalie.style.top = `${zone4Rect.y}px`

              console.log("RANDOM BLOCKING!!!!!")

              break
            case randomDiv === 5:
              game.goalie.style.left = `${zone5Rect.x}px`
              game.goalie.style.top = `${zone5Rect.y}px`

              console.log("RANDOM BLOCKING!!!!!")

              break
          }
        }

        setTimeout(() => {
          game.goalie.style.left = `${goalieInitialX}px`
          game.goalie.style.top = `${goalieInitialY}px`
          game.team1ScoreDiv.innerHTML = `${game.team1Score}`
          game.otherTeamScoreDiv.innerHTML = `${game.otherTeamScore}`
          setTimeout(() => {      
            game.isGameOver()
          }, 100);
        }, 1500)
      })
    })
  }
}
