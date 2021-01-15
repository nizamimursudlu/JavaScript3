const divTrivia = document.getElementById("trivia")
let divAnswer = document.createElement("div")
divAnswer.classList.add("div-answer")

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
      setTimeout(() => {
        divAnswer.innerHTML = ''
        divAnswer.classList.remove('div-answer')
      }, 2000)
      divAnswer = document.createElement("div")
      divQuestion.appendChild(divAnswer)
      divAnswer.classList.add("div-answer")
      divAnswer.innerHTML = element.correct_answer
      console.log(element.correct_answer)
    })
  })
).catch(error => console.log(error))



