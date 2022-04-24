const lengthArray = require('../Basic-Exercises/lengthArray');

describe('adicione o algoritmo que retorne os valores corretos para a função playgroundArray', () => {
  it('a função recebe um array como argumento e a função deve retornar a quantidade de itens dentro do array', () => {
    const req1 = lengthArray([1,2,3,4])
    const req2 = lengthArray([4,4,4])
    const req3 = lengthArray([1,2])

    expect(req1).toEqual(4)
    expect(req2).toEqual(3)
    expect(req3).toEqual(2)
  });

})