/**
 * Returns random integer between min and max (inclusive).
 * @param {*} min 
 * @param {*} max 
 */
function randomInt(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  );
}

module.exports = randomInt;
