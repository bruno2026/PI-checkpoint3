function Aluno(nome, faltas, notas) {
  this.nome = nome;
  this.qtdFaltas = faltas;
  this.notas = notas;
  (this.calcularMedia = function media() {
    let soma = 0;
    let media = notas.length;
    for (let i = 0; i < notas.length; i++) {
      soma += this.notas[i];
    }
    return soma / media;
  }),
    (this.faltas = function somarFalta() {
      let soma = this.qtdFaltas + 1;
      return soma;
    });
}

let aluno1 = new Aluno("Joao",  3, [10, 6, 8,7]);
let aluno2 = new Aluno("Maria", 2, [8, 8, 10, 10]);
let aluno3 = new Aluno("Julio", 2, [8, 10, 8, 10]);
let aluno4 = new Aluno("Cesar", 2, [8, 10, 10, 8]);
let alunos = [];
alunos = [aluno1,aluno2,aluno3,aluno4];

module.exports = {
  novoAluno: function (nome, faltas, notas) {
    const aluno = new Aluno(nome, faltas, notas);
    alunos.push(aluno);
  },

  alunos: alunos,
};
