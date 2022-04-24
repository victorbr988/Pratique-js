const sumNumbers = require('../exercises/sumNumbers');

describe('Complete a função para que ela retorne o resultado esperado ', () => {
  it ('a função recebe dois números e deve retornar a soma deles', () => {
    const request = sumNumbers(2, 3);
    const response = 5;
    expect(request).toBe(response);
  });

  it ('a função receberá numeros não inteiros e é esperado que ela retorne o inteiro mais próximo', () => {
    expect(sumNumbers(2.6, 3)).toBe(6);
    expect(sumNumbers(2.2, 3)).toBe(5)
    expect(sumNumbers(3.7, 4)).toBe(8)
    expect(sumNumbers(3.2, 4)).toBe(7)
  })

  it('a função receberá numeros negativos e é esperado que ela retorne apenas positivos', () => {
    expect(sumNumbers(-1, -2)).toBe(3)
    expect(sumNumbers(-4, -8)).toBe(12)
  })
})