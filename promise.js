

// Progression 1: create a function to get all the cookies
  // Progression 2: using setTimeout() -- use 1000 units for time parameter

//Progression 3: Create a function to creat cookies and create an object of Promise.

    // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
      
      // Progression 5: handling errors and adding new cookie to the list

// Progression 6: call function using `.then`
const snacks = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newSnack = { name: 'Biscotti Cookies' };

function getAllSnacks() {
  let output = '';
  for (let i = 0; i < snacks.length; i++) {
    output += snacks[i].name + ' ';
  }
  return output;
}

setTimeout(() => {
  const allSnacks = getAllSnacks();
  console.log(allSnacks);
}, 1000);

function createSnack(newSnack) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newSnack) {
        snacks.push(newSnack);
        resolve();
      } else {
        reject("error");
      }
    }, 2000)
  });
}

createSnack(newSnack)
  .then(() => {
    getAllSnacks();
  })
  .catch(error => console.error(error));


