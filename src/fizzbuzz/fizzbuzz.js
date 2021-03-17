function fizzBuzz(n) {
  if (typeof n != 'number') {
    return 'It is not a number'
  }

  let result = ''
  if (n === 0) {
    return n
  }
  if (n % 3 === 0) {
    result = 'Fizz'
  }
  if (n % 5 === 0) {
    result += 'Buzz'
  }
  if (result === '') {
    result = n
  }
  return result
}

module.exports = fizzBuzz
