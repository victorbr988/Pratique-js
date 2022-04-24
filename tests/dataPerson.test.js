const dataPerson = require('../Basic-Exercises/dataPerson');

describe('desenvolva a lógica para que a função dataPerson retorne um objeto', () => {
  it('a função recebe três infomações de usuário e deve retorna um objeto contendo as informações dele', () => {
    const req1 = dataPerson('Erik', 'Felipe', 25)
    const req2 = dataPerson('Louis', 'Hamilton', 39)
    const req3 = dataPerson('Albert', 'Einstein', 64)

    const res1 = {
      name: 'Erik', 
      lastname: 'Felipe',
      age: 25
    } 
    const res2 = {
      name: 'Louis', 
      lastname: 'Hamilton',
      age: 39
    } 
    const res3 = {
      name: 'Albert', 
      lastname: 'Einstein',
      age: 64
    } 

    expect(req1).toEqual(res1)
    expect(req2).toEqual(res2)
    expect(req3).toEqual(res3)
    expect(typeof req1).toEqual('object')
  })
})