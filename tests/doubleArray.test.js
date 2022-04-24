const doubleArray = require('../Basic-Exercises/doubleArray')

describe('Faça a lógica necessária para o retorno da função doubleArray', () => {
  it('a função recebe um array de números e a função deve retornar um novo array com o dobro de cada índice', () => {
    const req1 = doubleArray([1,2,3,4])
    const req2 = doubleArray([10, 20, 30])
    const req3 = doubleArray([1,2])

    expect(req1).toEqual([2,4,6,8])
    expect(req2).toEqual([20,40,60])
    expect(req3).toEqual([2,4])
  })
})