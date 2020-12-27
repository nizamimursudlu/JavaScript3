const buttonXhr = document.getElementById("button-xhr");
buttonXhr.addEventListener('click', getJokeXhr);

const buttonAxios = document.getElementById("button-axios");
buttonAxios.addEventListener('click', getJokeAxios);

let image = document.getElementById("img")
const mistake = document.getElementById("mistake")


const url = "https://xkcd.now.sh/?comic=latest";



//XMLHttpRequest 




function getJokeXhr() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onload = function () {
    if (xhr.status < 400) {
      const friendData = JSON.parse(xhr.responseText)
      image.src = `${friendData.img}`
    } else {
      mistake.innerHTML = `ERROR ${xhr.status}`
    }
    xhr.onerror = function () {
      alert('Request failed');
    };
  }
  xhr.send();
}

// AXIOS GET Request


function getJokeAxios() {
  axios.get(url)
    .then(function (respose) {
      image.src = `${respose.data.img}`
    })

    .catch(function (error) {
      console.log(error)
      mistake.innerHTML = `${error}`
    })
}
