"use strict";

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
const select = document.getElementById("select")

// i was confused my the requirements
// i guess i was not suppoers to write js at all only HTML and CSS 
// but if you change value of the "selected one" below,
// you can see all elemenst of the placeholderRepost, hope its ok

let selectedOne = 0
repositoryName.innerText = placeholderRepos[selectedOne].name
repositoryDescription.innerText = placeholderRepos[selectedOne].description
repositoryForks.innerText = placeholderRepos[selectedOne].forks
repositoryUpdated.innerText = placeholderRepos[selectedOne].updated




