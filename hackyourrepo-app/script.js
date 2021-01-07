"use strict";
// 
const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];
const repository = document.getElementById("repository");
const repositoryName = document.getElementById("repository-name");
const repositoryDescription = document.getElementById("repository-description")
const repositoryForks = document.getElementById("repository-forks")
const repositoryUpdated = document.getElementById("repository-updated")


function dropdownValue() {
  const selectedValue = document.getElementById("select").value
  repositoryName.innerText = placeholderRepos[selectedValue].name
  repositoryDescription.innerText = placeholderRepos[selectedValue].description
  repositoryForks.innerText = placeholderRepos[selectedValue].forks
  repositoryUpdated.innerText = placeholderRepos[selectedValue].updated

}




