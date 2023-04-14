/**
 * Nesse algoritmo foi utilizada a ideia de sempre guardar a referência
 * para o pai do elemento que será removido, porque, como não temos como
 * utilizar a referência direta para a memória como na linguagem C usando
 * ponteiros, usamos a propriedade dos objetos através da referência 'left'
 * e 'right' para modificar de forma permanente a árvore.
 */

function Tree() {
  let root = null

  function newNode(value) {
    return {
      value: value,
      left: null,
      right: null,
    }
  }

  function search(value, curr) {
    if (curr === null || curr.value === value) {
      return curr
    }

    if (curr.value >= value) {
      if (curr.left === null) {
        return curr
      }
      return search(value, curr.left)
    }
    
    else if (curr.value < value) {
      if (curr.right === null) {
        return curr
      }
      return search(value, curr.right)
    }
  }

  function add(value) {
    const searchedNode = search(value, this.root)

    if (searchedNode === null) {
      this.root = newNode(value)
    } else if (searchedNode.value === value) {
      console.log(`o nó ${value} já existe...`)

    } else if (searchedNode.value > value) {
      searchedNode.left = newNode(value)

    } else if (searchedNode.value < value) {
      searchedNode.right = newNode(value) 
    }
  }

  function removeNode(value, parent, root) {
    let aux = root
    let parentNode = parent
  
    if (aux === null) {
      console.log(`O elemento ${value} não existe na árvore...`)
      return
    }

    while(true) {
      if (aux === null) {
        break
      } else if (aux.value === value) {
        break
      } else if (aux.value > value) {
        parentNode = aux
        aux = aux.left
      } else if (aux.value < value) {
        parentNode = aux
        aux = aux.right
      }
    }

    if (aux === null) {
      console.log('Elemento não encontrado...')
      return
    }
    
    if (aux.left === null && aux.right === null) {
      if (parentNode.left === aux) {
        parentNode.left = null
      } else {
        parentNode.right = null
      }
    } else if (aux.left === null) {
      if (parentNode.left === aux) {
        parentNode.left = aux.right
      } else {
        parentNode.right = aux.right
      }
    }else if (aux.right === null) {
      if (parentNode.left === aux) {
        parentNode.left = aux.left
      } else {
        parentNode.right = aux.left
      }
    } else {
      let lastChild = aux.right
      while(lastChild.left) {
        lastChild = lastChild.left
      }
      const tmp = aux.value
      aux.value = lastChild.value
      lastChild.value = tmp

      removeNode(lastChild.value, aux, aux.right)
    }
  }

  function remove(value) {
    removeNode(value, this.root, this.root)
  }

  function preOrder(node) {
    if (node === null) {
      return
    }

    console.log(node.value)
    preOrder(node.left)
    preOrder(node.right)
  }

  function show() {
    preOrder(this.root)
  }

  return {
    root,
    search,
    add,
    remove,
    show,
  }
}

// criando árvore
const myTree = Tree()

// adicionando nós na árvore
myTree.add(6)
myTree.add(8)
myTree.add(4)
myTree.add(1)
myTree.add(5)
myTree.add(12)
myTree.add(7)

console.log('Árvore inicial')
myTree.show()

console.log('\n')

// removendo nós da árvore
myTree.remove(6)
myTree.remove(12)

console.log('Árvore após as remoções')
myTree.show()