window.onload = function () {
  console.log("loaded!!!")

  const startButton = document.getElementById("start-button")
  const restartButton = document.getElementById("restart-button")

  let game

  startButton.addEventListener("click", function () {
    startGame()
  })

  function startGame() {
    game = new Game()
    game.start()
    console.log("Starting game.....")

    let zone1 = document.getElementById("1")
    let zone2 = document.getElementById("2")
    let zone3 = document.getElementById("3")
    let zone4 = document.getElementById("4")
    let zone5 = document.getElementById("5")
    let zone6 = document.getElementById("6")

    let zones = [zone1, zone2, zone3, zone4, zone5, zone6]

    zones.forEach((zone) => {
      let thisId = zone.getAttribute("id")

      let ballRect = game.ball.getBoundingClientRect()
      console.log("this is ball rect", ballRect)
      zone.addEventListener("click", (e) => {
        let initialX = ballRect.left
        let initialY = ballRect.top

        let stepX = (e.x - 30 - initialX) / 5
        let stepY = (e.y - 30 - initialY) / 5

        console.log("These are the steps", stepX, stepY)
        let counter = 0
        let ballInterval
        ballInterval = setInterval(() => {
          if (counter < 5) {
            initialX += stepX
            initialY += stepY
            console.log("this is the value of X's", initialX, stepX)
            game.ball.style.left = `${initialX}px`
            game.ball.style.top = `${initialY}px`
            console.log("incrementing")
            counter += 1
          } else {
            console.log("Stopped interval", counter)
            clearInterval(ballInterval)
            setTimeout(() => {
              game.ball.style.left = `${ballRect.left}px`
              game.ball.style.top = `${ballRect.top}px`
            }, 1000)
          }
        }, 100)

        // console.log(`We hace clicked zone ${thisId}`)
        // console.log("this is e ===>", e)
        // console.log("This is the ball ===>", game.ball)

        // console.log("This is the X difference", game.ball.style.left, game.ball.style.top, e.x - 30)
        // game.ball.style.left = `${e.x - 30}px`
        // game.ball.style.top = `${e.y - 30}px`
        // console.log("This is they Y difference", ballRect.top - e.y - 30)
        // console.log("Ball after", ballRect.left, ballRect.top)
      })
    })
  }
}
