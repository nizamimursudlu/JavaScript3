const button = document.getElementById("button");
button.addEventListener('click', randomFriend);

const mistake = document.getElementById("mistake")

const url = "https://www.randomuser.me/apii";



//XMLHttpRequest 




function randomFriend() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onload = function () {
    if (xhr.status < 400) {
      const friendData = JSON.parse(xhr.responseText)
      console.log(friendData)
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


function randomFriend() {
  axios.get(url)
    .then(respose => console.log(respose))
    .catch(function (error) {
      console.log(error)
      mistake.innerHTML = `${error}`
    })
}
