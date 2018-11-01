'use strict';

 const Queue = require('queue-fifo'); // eslint-disable-line

module.exports = (graph, startVertex) => {
  const queue = new Queue();
  const visitedVertex = new Set();

  queue.enqueue(startVertex);
  visitedVertex.addVertex(startVertex);

  while (queue.size() > 0) {
    const currentVertex = queue.dequeue();

    const neighbors = graph.getNeighbors(currentVertex);

      for (let neighbor of neighbors) { // eslint-disable-line
      const neighborVertex = neighbor.vertex;

      if (visitedVertex.has(neighborVertex)) {
              continue; // eslint-disable-line
      } else {
        visitedVertex.addVertex(currentVertex);
      }
      queue.enqueue(neighborVertex);
    }
    if (graph._adjacencyList.size === visitedVertex.size) {
      return true;
    }
  }
  return null;
};
