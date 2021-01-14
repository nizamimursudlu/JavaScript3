getData('https://randomfox.ca/floof/');

async function getData(url) {
  const response = await fetch(url)
  const json = await response.json()
  console.log(json)
}
getData('https://randomfox.ca/floof/').catch(error => console.log(error))