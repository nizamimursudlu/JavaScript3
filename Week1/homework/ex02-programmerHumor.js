const button = document.getElementById("button");
button.addEventListener('click', getJoke);

let image = document.getElementById("img")


const url = "https://xkcd.now.sh/?comic=latest1";



//XMLHttpRequest 




function getJoke() {
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


// function getJoke() {
//   axios.get(url)
//     .then(function (respose) {
//       image.src = `${respose.data.img}`
//       console.log(respose)
//     })

//     .catch(function (error) {
//       console.log(error)
//       mistake.innerHTML = `${error}`
//     })
// }
