const aluno = require("../aluno");
let { alunos } = require("../aluno");

let curso = {
  nomeDoCurso: "PI",
  notaAprovacao: 7,
  faltasMaximas: 2,
  estudantes: alunos,
  adicionarAlunos: aluno.novoAluno,
  aprovacao: function (aluno) {
    let media = aluno.calcularMedia();
    let faltas = aluno.qtdFaltas;
    let dezPorCentoNotaAprovacao =
      this.notaAprovacao + (10 * this.notaAprovacao) / 100;

    if (media >= this.notaAprovacao && faltas < this.faltasMaximas) {
      return "aprovado";
    } else if (
      faltas === this.faltasMaximas &&
      media > dezPorCentoNotaAprovacao
    ) {
      return "aprovado acima dos 10%";
    } else {
      return "reprovado"
    }
  },
  aprovados: function () {
    let aproved = [];
    for (let i = 0; i < this.estudantes.length; i++) {
      let aluno = this.estudantes[i];
      if (
        curso.aprovacao(aluno) === "aprovado" ||
        curso.aprovacao(aluno) === "aprovado acima dos 10%"
      ) {
        aproved.push(`${aluno.nome} foi aprovado`);
      }
    }
    return aproved;
  },
};

console.log('Metodo aprovação:');
console.log(curso.aprovacao(alunos[0]))

console.log('Array de aprovados:');
console.log(curso.aprovados())

console.log('Metodo adicionar aluno');
curso.adicionarAlunos("bruno",2,[3,6,8,9])
console.log(curso.estudantes);