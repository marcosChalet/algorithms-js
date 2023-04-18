const {AdjListFn} = require('./adj_list.js')

const adjListObj = AdjListFn()

const [adjList, numNodes] = adjListObj.loadList()
let V = [0, 2, 1, 3, 4, 5, 6, 7]
let D = Array(numNodes).fill().map(_ => 0)
let F = Array(numNodes).fill().map(_ => 0)
let color = Array(numNodes).fill().map(_ => 0)
let mark = 0

DFS()
show(D, F, numNodes)

function DFS() {
  for (let u of V) {
    color[u] = 'white'
  }

  for (let u of V) {
    if (color[u] === 'white') {
      DFS_Visit(u)
    }
  }
}

function DFS_Visit(u) {
  color[u] = 'gray'
  D[u] = ++mark

  for (let v of adjList[u]) {
    if (color[v] === 'white') {
      DFS_Visit(v)
    }
  }

  color[u] = 'black'
  F[u] = ++mark
}

function show(D, F, numNodes) {
  for (let i = 0; i < numNodes; i++) {
    console.log(`Vértice ${i+1}: ${D[i]} / ${F[i]}`)
  }
}