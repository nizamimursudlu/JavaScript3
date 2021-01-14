const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const makeAllCaps = array => {
  return new Promise((resolve, reject) => {
    let capsArray = array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        reject('Error: Not all items in the array are strings!');
      }
    });
    resolve(capsArray);
  });
};
async function fn() {
  const result = await makeAllCaps(arrayOfWords);
  console.log(result);
}
fn().catch(error => console.log(error));
