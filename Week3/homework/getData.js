
async function getData(url) {
  try {
    const response = await fetch(url)
    const json = await response.json()
  }
  catch {
    console.log(error)
  }
}
getData('https://randomfox.ca/floof/')

