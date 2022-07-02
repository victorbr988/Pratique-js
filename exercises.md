# Exercícios

Aqui vão estar detalhados todos os exercícios, desde da proposta, o que se pede, e o que o teste espera.

> **OBS:** Todos os exercícios estão dentro da pasta `Basic-Exercises`

### 1. Somando dois números

<details>
  <summary>Você deve implementar a função <code>sum</code> com a sua solução. A função recebe dois parâmetros do tipo `number` e deve retornar a soma desses dois parâmetros.</summary>
  
  <br />
  
  O arquivo `sumNumbers.test.js` contém os testes para a função `sum` já implementados. Implemente a função no arquivo `Basic-Exercises/sumNumbers.js` para que ele passe em todos os testes.

**O que será testado:**

- Será validado se, ao receber algum valor float (quebrado) deve retornar a soma do inteiro mais próximo, por exemplo se receber `4.7` e `13` deve retornar `18`;
- Será validado se, ao receber algum valor negativo deve retornar a soma dos valores absolutos, por exemplo se receber `-13` e `-27` deve retornar `40`;

</details>

### 2. Tamanho do Array

<details>
  <summary>Você deve implementar a função <code>lengthArray</code> com a sua solução. A função recebe um parâmetro do tipo `array` e deve retornar a quantidade de itens dentro dele.</summary>
  
  <br />
  
  O arquivo `playgroundArray.test.js` contém os testes para a função `lengthArray` já implementados. Implemente a função no arquivo `Basic-Exercises/lengthArray.js` para que ele passe em todos os testes.

**O que será testado:**

- Será validado se, ao receber um array vazio deve retorna 0;
- Será validado se, ao receber um array com 4 itens deve retornar 4, por exemplo se receber `[1, 2, 4, 8]` deve retornar `4`;

</details>

### 3. Dobrando o Array

<details>
  <summary>Você deve implementar a função <code>doubleArray</code> com a sua solução. A função recebe um parâmetro do tipo `array` e deve retornar um array com os mesmos valores multiplicado por 2.</summary>
  
  <br />
  
  O arquivo `doubleArray.test.js` contém os testes para a função `doubleArray` já implementados. Implemente a função no arquivo `Basic-Exercises/doubleArray.js` para que ele passe em todos os testes.

**O que será testado:**

- Será validado se, ao receber um array vazio deve retorna outro array vazio;
- Será validado se, ao receber um array com 4 itens deve retornar outro array com 4 itens, por exemplo se receber `[1, 2, 4, 8]` deve retornar `[2, 4, 8, 16]`;

</details>

### 4. Adicionando Fruta ao Array

<details>
  <summary>Você deve implementar a função <code>addFruitArray</code> com a sua solução. A função recebe um parâmetro do tipo `array` e deve retornar um array com os mesmos valores com um item a mais no final.</summary>
  
  <br />
  
  O arquivo `addFruitArray.test.js` contém os testes para a função `addFruitArray` já implementados. Implemente a função no arquivo `Basic-Exercises/addFruitArray.js` para que ele passe em todos os testes.

**O que será testado:**

- Será validado se, ao receber um array com 2 itens deve retornar outro array com 3 itens, por exemplo se receber `['maçã', 'abacaxi']` deve retornar `['maçã', 'abacaxi', 'pêra']`;

</details>

### 5. Dados do Usuário

<details>
  <summary>Você deve implementar a função <code>dataPerson</code> com a sua solução. A função recebe três parâmetros e deve retornar um objeto com os parâmetros recebidos.</summary>
  
  <br />
  
  O arquivo `dataPerson.test.js` contém os testes para a função `dataPerson` já implementados. Implemente a função no arquivo `Basic-Exercises/dataPerson.js` para que ele passe em todos os testes.

**O que será testado:**

- Será validado se, ao receber `'Erik'`, `'Felipe'` e `25`, deve retornar um objeto no formato `{ name: 'Erik', lastname: 'Felipe', age: 25 }`;
- Será validado se, ao receber `'Louis'`, `'Hamilton'` e `39`, deve retornar um objeto no formato `{ name: 'Louis', lastname: 'Hamilton', age: 39 }`;

</details>
