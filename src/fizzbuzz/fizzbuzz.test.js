const fizzBuzz = require('./fizzbuzz')

describe('FizzBuz', () => {
  test('Deve retornar 0 quando passado 0', () => {
    const resultado = fizzBuzz(0)
    expect(resultado).toEqual(0)
  })
  test('Deve retornar 7 quando passado 7', () => {
    const resultado = fizzBuzz(7)
    expect(resultado).toEqual(7)
  })
  test('Deve retornar Fizz quando multiplo de 3', () => {
    const resultado = fizzBuzz(3)
    expect(resultado).toEqual('Fizz')
  })
  test('Deve retornar Buzz quando multiplo de 5', () => {
    const resultado = fizzBuzz(5)
    expect(resultado).toEqual('Buzz')
  })
  test('Deve retornar FizzBuzz quando multiplo de 3 e 5', () => {
    const resultado = fizzBuzz(15)
    expect(resultado).toEqual('FizzBuzz')
  })
})
