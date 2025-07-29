function getRandomPositiveInteger (a, b = 1) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Оба параметра должны быть числами");
  }

  if (a < 0 || b < 0) {
    throw new Error("Диапозон должен быть положительным, включая ноль");
  }

  if (a === b) {
    return Math.floor(a)
  }

  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));
  return Math.floor(Math.random()* (upper - lower + 1) + lower)
  }

  function checkStringLength (string, length) {
    if (typeof string !== 'string') {
      throw new Error("Первый параметр должен быть строкой");
    }

    if (typeof length !== 'number' || length < 0) {
      throw new Error ("Второй параметр должен быть положительным числом")
    }

    return string.length <= length
  }
