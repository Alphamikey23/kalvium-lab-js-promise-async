const snacks = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newSnack = { name: 'Biscotti Cookies' };

function getAllSnacks() {
  let output = '';
  for (let i = 0; i < snacks.length; i++) {
    output += snacks[i].name + ' ';
  }
  document.body.innerHTML = output;
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
        reject('error');
      }
    }, 2000);
  });
}

createSnack(newSnack)
  .then(() => {
     getAllSnacks();
  })
  .catch(error => console.error(error));

async function createAndDisplaySnacks() {
  try {
    await createSnack(newSnack);
    getAllSnacks();
  } catch (error) {
    console.log(error);
  }
}

createAndDisplaySnacks(); 
