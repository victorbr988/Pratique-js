const addFruitArray = require('../Basic-Exercises/addFruitArray');

describe('crie a função que coloca uma nova fruta na lista de frutas', () => {
  it('o algoritmo deve obrigatoriamente estar dentro de uma função com nome addFruitArray que recebe um parâmetro ', () => {
    expect.assertions(1);
    expect(typeof addFruitArray).toEqual('function')
  })
  it('a função recebe um array contendo alguns tipos de frutas e a função deve adicionar a fruta pêra nesse array e retornar ele', () => {
    const req1 = addFruitArray(['maçã', 'abacaxi'])
    const req2 = addFruitArray(['caju', 'amora'])

    expect(req1).toEqual(['maçã', 'abacaxi', 'pêra'])
    expect(req2).toEqual(['caju', 'amora', 'pêra'])
  })
})