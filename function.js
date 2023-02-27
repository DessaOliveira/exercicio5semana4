class Pessoa {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }
}
let eu = new Pessoa("Andressa", 25, 1.55);
alert(
  `Olá me chamo ${eu.nome} tenho ${eu.idade} anos e tenho ${eu.altura} de altura.`
);

class Profissao extends Pessoa{
    constructor (nome, idade, altura, profissao){
        super(nome, idade, altura)
        this.profissao = profissao;
    }
}

eu = new Profissao("Andressa", 25, 1.55, "maquiadora.")
alert(`Olá me chamo ${eu.nome} tenho ${eu.idade} anos e tenho ${eu.altura} de altura e sou ${eu.profissao}`)