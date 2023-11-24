/* eslint-disable require-jsdoc */
function calculateNumber(type, a, b) {
  ab = Math.round(a);
  bc = Math.round(b);
  let c =0;
  switch (type) {
    case 'SUM':
      c = ab + bc;
      break;
    case 'SUBTRACT':
      c = ab - bc;
      break;
    case 'DIVIDE':
      if (bc === 0) {
        c = 'Error';
      } else {
        c = ab / bc;
      }
      break;
  }
  return c;
}
module.exports = calculateNumber;

