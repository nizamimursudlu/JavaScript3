const buttonXML = document.getElementById("button-XML");
const buttonAxios = document.getElementById("button-axios");
const url = "https://dog.ceo/api/breeds/image/random"
const ul = document.getElementById("list")
const mistake = document.getElementById("mistake")

buttonXML.addEventListener('click', buyDog)


function buyDog() {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url);
  xhr.onload = function () {

    if (xhr.status < 400) {
      let dogData = JSON.parse(xhr.responseText)
      const li = document.createElement("li")
      ul.appendChild(li)
      console.log(li)
      let img = document.createElement("img")
      document.body.appendChild(img)
      li.appendChild(img)
      img.src = `${dogData.message}`
    } else {
      mistake.innerHTML = `ERROR ${xhr.status}`
    }
    xhr.onerror = function () {
      alert('Request failed');
    };
  }
  xhr.send();
}

buttonAxios.addEventListener("click", adoptDog)

function adoptDog() {
  axios.get(url)
    .then(function (response) {
      let dogData = response.data.message
      const li = document.createElement("li")
      ul.appendChild(li)
      console.log(li)
      let img = document.createElement("img")
      document.body.appendChild(img)
      li.appendChild(img)
      img.src = `${dogData}`
    }
    )
    .catch(function (error) {
      console.log(error)
      mistake.innerHTML = `${error}`
    })
}




