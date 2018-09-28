module.exports = function getZerosCount(number) {
  let z = 0;
  for (let i = 5; number/i >= 1; i *= 5) {
  z += Math.floor(number/i);
  }
  return z;
  
}
