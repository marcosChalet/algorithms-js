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

function LinkedList() {

  let head = null
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

  function addInicio(dados) {
    if ( !head ) { // inserindo o primeiro elemento
      head = novoAluno(dados)
    } else {
      //adiciona antes do primeiro elemento
      //
      const novo = novoAluno(dados)
      novo.next = head
      head = novo
    }

    // incrementa a quantidade de alunos após inserir
    qtd++
  }

  function addFim(dados) {
    if ( !head ) { // inserindo o primeiro elemento
      head = novoAluno(dados)
    } else {
      // como a lista já tenha alunos, vá até o ultimo aluno
      // e adicione o novo aluno no fim
      //
      let aux = head
      while(aux.next) {
        aux = aux.next
      }
      aux.next = novoAluno(dados)
    }

    // incrementa a quantidade de alunos após inserir
    qtd++
  }

  // seria interessante receber uma função de comparação
  // para determinar o tipo de ordenação (crescente / decrescente)
  function addOrdenado(dados) {
    if ( !head ) { //inserindo o primeiro elemento
      head = novoAluno(dados)
    } else {
      let aux = head
      let prev = head
      while(aux && aux.dados.matricula < dados.matricula) {
        // buscando posição em que o valor se torna maior...
        // ou seja, posição em que será adicionado em ordem
        // crescente

        prev = aux
        aux = aux.next
      }

      // insere ordenado em uma lista ordenada
      if (aux) {
        const novo = novoAluno(dados)
        novo.next = aux
        prev.next = novo
      } else {
        prev.next = novoAluno(dados)
      }
    }
  }

  /*
   * Faça o inserir por posição...
   * */

  function mostrar() {
    if ( head ) {
      let aux = head
      let dados = []

      while(aux) { // percorre a lista
        // armazena os dados de cada aluno da lista

        dados.push(aux.dados) 
        aux = aux.next
      }
      console.table(dados)

    } else {
      console.log('Lista vazia')
    }
  }

  function remover(matricula) {
    if (head) { // se entrar a lista não é vazia!
      if (head.dados.matricula === matricula) { 
        // caso o nó a ser removido seja o primeiro
        
        head = head.next
      }else {
        let aux = head
        let prev = head

        // aponta para o elemento que vai ser removido com "aux"
        // e para o antecessor com "prev"

        while(aux && aux.dados.matricula !== matricula) {
          prev = aux
          aux = aux.next
        }

        if (aux) { 
          // caso o laço termine por ter encontrado o elemento
          // a ser removido (aux), o pule aprontando para o
          // próximo
          
          prev.next = aux.next
        } else {
          console.log('Elemento não encontrado')
        }
      }
    } else {
      console.log('Lista vazia')
    }
  }

  return {
    size,
    addOrdenado,
    addInicio,
    addFim,
    remover,
    mostrar,
  }
}

// criando lista
const myList = LinkedList()

// adicionando os dados na lista
dadosAlnos.map((aluno) => {
  myList.addOrdenado(aluno)
})

// lista completa
myList.mostrar()


myList.remover(43122)
myList.remover(22134)
myList.remover(55601)
// após remover 3 elementos
myList.mostrar()


myList.remover(33221)
// restando só com um elemento
myList.mostrar()


myList.remover(99861)
// mostrando lista vazia
myList.mostrar()

