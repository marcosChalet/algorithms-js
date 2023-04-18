const {readFileSync} = require('fs')

function AdjListFn() {
  let adjList = []
  let numNodes = null

  function processFile(content) {
    content.split('\n').map((row, idx) => {
      const rowData = row.split(' ')
      if (idx === 0) {
        this.adjList = Array.from({ length: +rowData[0] }).map(() => [])
        numNodes = +rowData[0]
      } else {
        this.adjList[+rowData[0] - 1].push(+rowData[1] - 1)
        this.adjList[+rowData[1] - 1].push(+rowData[0] - 1)
      }
    })
  }

  function loadList() {
    try {
      data = readFileSync('graph.txt', 'utf-8')
      this.processFile(data)
    } catch (err) {
      console.error(err);
    }

    return [this.adjList, numNodes]
  }

  function show() {
    this.adjList.map((subList, idx) => {
      console.log(`Vértice ${idx + 1}:`, subList)
    })
  }

  return {
    adjList,
    processFile,
    loadList,
    show,
  }
}

module.exports = {AdjListFn}