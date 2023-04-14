const dadosAlunos = [
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

function LinkedQueue() {

  let head = null
  let cauda = null
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
    if ( !head ) { // inserindo o primeiro elemento
      head = novoAluno(dados)
      cauda = head
    } else {
      // como a fila já tem alunos, basta adicionar na cauda

      cauda.next = novoAluno(dados)
      cauda = cauda.next
    }

    // incrementa a quantidade de alunos após inserir
    qtd++
  }

  function mostrar() {
    if ( head ) {
      let aux = head
      let dados = []

      while(aux) { // percorre a fila
        // armazena os dados de cada aluno da fila

        dados.push(aux.dados) 
        aux = aux.next
      }
      console.table(dados)

    } else {
      console.log('Fila vazia')
    }
  }

  function remover() {
    if (head) { // se entrar a fila não é vazia!
      head = head.next
    } else {
      console.log('Fila vazia')
    }
  }

  return {
    size,
    add,
    remover,
    mostrar,
  }
}

// criando fila
const myQueue = LinkedQueue()

// adicionando os dados na fila
dadosAlunos.map((aluno) => {
  myQueue.add(aluno)
})

// fila completa
myQueue.mostrar()


myQueue.remover()
myQueue.remover()
// restando 3 alunos
myQueue.mostrar()


myQueue.remover()
// restando 2 alunos
myQueue.mostrar()


myQueue.remover()
// restando só um aluno
myQueue.mostrar()


myQueue.remover()
// fila vazia
myQueue.mostrar()

