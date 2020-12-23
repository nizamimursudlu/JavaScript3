const button = document.getElementById("button");
button.addEventListener('click', randomFriend);

const url = "https://www.randomuser.me/api";



//XMLHttpRequest 




// function randomFriend() {

//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url);

//   xhr.onload = function () {
//     if (xhr.status < 400) {
//       const friendData = JSON.parse(xhr.responseText)
//       console.log(friendData)
//     } else {
//       console.log("HTTP Error", xhr.status)
//     }
//     xhr.onerror = function () {
//       alert('Request failed');
//     };
//   }
//   xhr.send();
// }

// AXIOS GET Request


function randomFriend() {
  axios.get(url)
    .then(respose => console.log(respose))
    .catch(error => console.log(error))
}
