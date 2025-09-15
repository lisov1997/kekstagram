const getRandomPositiveInteger = (a, b = 1) => {
  const lower = Math.ceil(Math.min(Math.abs(a),Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a),Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const checkStringLength = (string, length) => string.length <= length ;

const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];

export { getRandomPositiveInteger, checkStringLength, getRandomArrayElement };
