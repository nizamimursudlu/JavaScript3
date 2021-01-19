function main() {

  const repositoryName = document.getElementById("repository-name")
  const repositoryDescription = document.getElementById("repository-description")
  const repositoryForks = document.getElementById("repository-forks")
  const repositoryUpdated = document.getElementById("repository-updated")
  const select = document.getElementById("select")


  document.getElementById("select").innerText = ""

  fetch("https://api.github.com/orgs/HackYourFuture/repos?per_page=100")
    .then(handleErrors)
    .then((result1) => {
      aName.setAttribute("href", `https://github.com/HackYourFuture/${result1[0].name}`)
      repositoryName.innerHTML = result1[0].name
      repositoryDescription.innerText = result1[0].description
      repositoryForks.innerText = result1[0].forks
      repositoryUpdated.innerText = result1[0].updated_at
      return result1[0].contributors_url
    })
    .then(newURL => {
      fetch(newURL)
        .then(handleErrors)
        .then(displayContributors)
        .catch(handleCatch)
    })
    .catch(handleCatch)
  function fetchData() {
    fetch("https://api.github.com/orgs/HackYourFuture/repos?per_page=100")
      .then(handleErrors)
      .then(result5 => {
        result5.map(element1 => {
          let option = document.createElement("option")
          select.appendChild(option)
          option.value = element1.name
          option.innerHTML = element1.name
        })
      })
      .catch(handleCatch)
  } fetchData()
  select.onchange = function getData() {
    fetch(`https://api.github.com/repos/HackYourFuture/${select.value}`)
      .then(handleErrors)
      .then(result4 => {
        aName.setAttribute("href", `https://github.com/HackYourFuture/${result4.name}`)
        repositoryName.innerText = result4.name
        repositoryDescription.innerText = result4.description
        repositoryForks.innerText = result4.forks
        repositoryUpdated.innerText = result4.updated_at
        return result4.contributors_url
      })
      .then(contributorsURL => {
        fetch(contributorsURL)
          .then(handleErrors)
          .then((result6) => {
            let current_page = 1;
            let rows = 5;
            divClearInfoDiv.innerHTML = ""
            function displayList(items, rows_per_page, page) {
              page--;
              let start = rows_per_page * page;
              let end = start + rows_per_page;
              let paginatedItems = items.slice(start, end);
              paginatedItems.forEach(element8 => {
                const infoDiv = document.createElement("div")
                divClearInfoDiv.appendChild(infoDiv)
                infoDiv.classList.add("info-div")
                const avatar = document.createElement("img")
                avatar.src = element8.avatar_url
                avatar.style.width = "50px"
                infoDiv.appendChild(avatar)
                const aCont = document.createElement("a")
                aCont.setAttribute("href", `https://github.com/${element8.login}`)
                infoDiv.appendChild(aCont).innerText = element8.login
                const divNum = document.createElement("div")
                divNum.id = "div-num"
                infoDiv.appendChild(divNum).innerText = element8.contributions
              })
              function setupPagination(items, rows_per_page) {
                let page_count = Math.ceil(items.length / rows_per_page);
                for (let i = 1; i < page_count + 1; i++) {
                  let btn = paginationButton(i, items);
                  divClearInfoDiv.appendChild(btn);
                }
                let next = document.createElement('button');
                next.id = "next";
                let prev = document.createElement('button');
                prev.id = "prev"
                var s = document.getElementsByTagName('button')[0]
                prev.innerText = '<';
                next.innerText = '>';
                divClearInfoDiv.insertBefore(prev, s);
                divClearInfoDiv.appendChild(next);
                document.getElementById("prev").addEventListener('click', function () {
                  if (current_page > 1) {
                    divClearInfoDiv.innerText = ""
                    current_page = current_page - 1;
                    displayList(items, rows, current_page);
                  }
                })
                document.getElementById("next").addEventListener('click', function () {
                  if (current_page < page_count) {
                    divClearInfoDiv.innerText = ""
                    current_page = current_page + 1;
                    displayList(items, rows, current_page);
                  }
                })
              }
              function paginationButton(page, items) {
                let button = document.createElement('button');
                button.innerText = page;
                if (current_page == page) button.classList.add('active');
                button.addEventListener('click', function () {
                  divClearInfoDiv.innerHTML = ""
                  current_page = page;
                  displayList(items, rows, current_page);

                  button.classList.add('active');
                });
                return button;
              }
              setupPagination(result6, rows);
            } displayList(result6, rows, current_page);
          })
          .catch(handleCatch)
      })
      .catch(handleCatch)
  }
}
main()

function handleErrors(response) {
  if (response.ok) {
    return response.json()
  } else {
    throw `ERROR: ${response.status} ${response.statusText}`
  }
}
function handleCatch(error) {
  document.getElementById("errorMessage").style.padding = "14px";
  document.getElementById("errorMessage").innerHTML = error;
}


function displayContributors(result2) {
  divClearInfoDiv.innerHTML = ""
  result2
    .forEach(element0 => {
      const infoDiv = document.createElement("div")
      divClearInfoDiv.appendChild(infoDiv)
      infoDiv.classList.add("info-div")
      const avatar = document.createElement("img")
      avatar.src = element0.avatar_url
      avatar.style.width = "50px"
      infoDiv.appendChild(avatar)
      const aCont = document.createElement("a")
      aCont.setAttribute("href", `https://github.com/${element0.login}`)
      infoDiv.appendChild(aCont).innerText = element0.login
      const divNum = document.createElement("div")
      divNum.id = "div-num"
      infoDiv.appendChild(divNum).innerText = element0.contributions
    })
  return result2
}
