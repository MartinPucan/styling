const items = [[2,5,1,9], [4,2,7]];

function findNine(nine) {
  let hasNumber = 'no.';
  nine.forEach(a => {
    if (a === 9) {
      hasNumber = 'yes, i found it!';
    }
    if (Array.isArray(a)) {
        hasNumber = findNine(a);
    }
  });

  return hasNumber;
}

console.log(findNine(items));

// const el = document.getElementById('answer').innerText;