const dadosAlnos = [
  {
    nome: "Marcos",
    matricula: 22134,
    nota: 9.2
  },
  {
    nome: "Socram",
    matricula: 43122,
    nota: 2.9
  },
  {
    nome: "Araújo",
    matricula: 33221,
    nota: 5.9
  },
  {
    nome: "Ô juara",
    matricula: 99861,
    nota: 8.9
  },
  {
    nome: "Manoel",
    matricula: 55601,
    nota: 8.4
  },

]

class Aluno {
  constructor(nome, matricula, nota) {
    this.nome = nome
    this.matricula = matricula
    this.nota = nota
  }
}

function Stack() {

  let topo = null
  let qtd = 0

  function size() {
    return qtd
  }

  function novoAluno(dados) {
    return {
      next: null,
      dados: new Aluno(dados.nome, dados.matricula, dados.nota)
    }
  }

  function add(dados) {
    if ( !topo ) { // inserindo o primeiro elemento
      topo = novoAluno(dados)
    } else {
      // adiciona no topo e define o novo aluno como o topo

      const novo = novoAluno(dados)
      novo.next = topo
      topo = novo
    }

    // incrementa a quantidade de alunos após inserir
    qtd++
  }

  function mostrar() {
    if ( topo ) {
      let aux = topo
      let dados = []

      while(aux) { // percorre a pilha
        // armazena os dados de cada aluno da pilha

        dados.push(aux.dados) 
        aux = aux.next
      }

      // mostrando a pilha em uma tabela
      console.table(dados)

    } else {
      console.log('Lista vazia')
    }
  }

  function remover() {
    if ( topo ) { // se entrar a pilha não é vazia!
      topo = topo.next
    } else {
      console.log('Lista vazia')
    }
  }

  return {
    size,
    add,
    remover,
    mostrar,
  }
}

// criando pilha
const myStack = Stack()

// adicionando os dados na pilha
dadosAlnos.map((aluno) => {
  myStack.add(aluno)
})

// lista completa
myStack.mostrar()


myStack.remover()
myStack.remover()
// restando 3 alunos
myStack.mostrar()


myStack.remover()
// restando 2 alunos
myStack.mostrar()


myStack.remover()
// restando só um aluno
myStack.mostrar()


myStack.remover()
// fila vazia
myStack.mostrar()

