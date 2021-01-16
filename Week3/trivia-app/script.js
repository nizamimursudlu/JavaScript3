const divContainer = document.createElement("div")
document.body.appendChild(divContainer)
divContainer.id = "container"

const divTrivia = document.createElement("div")
divContainer.appendChild(divTrivia)
divTrivia.id = "trivisa"

const h1Element = document.createElement("h1")
divTrivia.appendChild(h1Element).innerHTML = "Let's play some Trivia!"

const h4Element = document.createElement("h4")
divTrivia.appendChild(h4Element).innerHTML = "Try your best to figure out the answer.If you really have no clue, click on the question to reveal the answer..."



let divAnswer = document.createElement("div")
divAnswer.classList.add("div-answer")
// divAnswer.style.transition = "3s"

const URL = "https://opentdb.com/api.php?amount=5"

async function main() {
  const response = await fetch(URL)
  const json = await response.json()
  return json
}
main().then(json =>
  json.results.forEach(element => {
    const divQuestion = document.createElement("div")
    divTrivia.appendChild(divQuestion)
    divQuestion.classList.add("div-question")
    divQuestion.innerHTML = element.question
    divQuestion.addEventListener('click', function () {
      setTimeout(delay, 3000)
      divAnswer = document.createElement("div")
      divQuestion.appendChild(divAnswer)
      divAnswer.classList.add("div-answer")
      divAnswer.innerHTML = element.correct_answer
      console.log(element.correct_answer)

    })
  })
).catch(error => console.log(error))


async function delay() {
  divAnswer.innerHTML = ''
  divAnswer.classList.remove('div-answer')
}
