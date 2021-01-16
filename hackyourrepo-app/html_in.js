const divMenu = document.createElement("div");
document.body.appendChild(divMenu);
divMenu.id = "dropdown-menu";

const label = document.createElement("label")
divMenu.appendChild(label).innerHTML = "HYF Repositories";

const selectElement = document.createElement("select");
divMenu.appendChild(selectElement);
selectElement.id = "select";

const optionElement = document.createElement("option");
selectElement.appendChild(optionElement)
optionElement.setAttribute("value", "''")

const divError = document.createElement("div")
document.body.appendChild(divError)
divError.id = "errorMessage"


const divContainer = document.createElement("div")
document.body.appendChild(divContainer)
divContainer.id = "container"

const divRepository = document.createElement("div")
divContainer.appendChild(divRepository)
divRepository.id = "repository"

const divRepositoryName = document.createElement("div")
divRepository.appendChild(divRepositoryName)
divRepositoryName.classList.add("horisontal")
const h4Name = document.createElement("h4")
divRepositoryName.appendChild(h4Name).innerHTML = "Repository:"
const aName = document.createElement("a")
divRepositoryName.appendChild(aName).id = "repository-name"

const divRepositoryDescription = document.createElement("div")
divRepository.appendChild(divRepositoryDescription)
divRepositoryDescription.classList.add("horisontal")
const h4Description = document.createElement("h4")
divRepositoryDescription.appendChild(h4Description).innerHTML = "Description:"
const pDescription = document.createElement("p")
divRepositoryDescription.appendChild(pDescription).id = "repository-description"

const divRepositoryForks = document.createElement("div")
divRepository.appendChild(divRepositoryForks)
divRepositoryForks.classList.add("horisontal")
const h4Forks = document.createElement("h4")
divRepositoryForks.appendChild(h4Forks).innerHTML = "Forks:"
const pForks = document.createElement("p")
divRepositoryForks.appendChild(pForks).id = "repository-forks"

const divRepositoryUpdated = document.createElement("div")
divRepository.appendChild(divRepositoryUpdated)
divRepositoryUpdated.classList.add("horisontal")
const h4Updated = document.createElement("h4")
divRepositoryUpdated.appendChild(h4Updated).innerHTML = "Updated:"
const pUpdated = document.createElement("p")
divRepositoryUpdated.appendChild(pUpdated).id = "repository-updated"

const divMainRight = document.createElement("div");
divContainer.appendChild(divMainRight);
divMainRight.id = "main-right"

const divContributors = document.createElement("div")
divMainRight.appendChild(divContributors)
divContributors.id = "contributors"
const pContributors = document.createElement("p")
divContributors.appendChild(pContributors).innerHTML = "Contributors"

const divClearInfoDiv = document.createElement("div")
divMainRight.appendChild(divClearInfoDiv)
divClearInfoDiv.id = "clear-info-div"


