const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const makeAllCaps = async (array) => {
  let capsArray = array.map((word) => {
    if (typeof word === 'string') {
      return word.toUpperCase();
    } else {
      throw ('Error: Not all items in the array are strings!');
    }
  });
  return (capsArray);
};
async function fn() {
  try {
    const result = await makeAllCaps(arrayOfWords);
    console.log(result);
  }
  catch {
    console.log(error);
  }
}
fn()