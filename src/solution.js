'use strict';

 const Queue = require('queue-fifo'); // eslint-disable-line

module.exports = function connectedGraph(graph, startVertex){
    const queue = new Queue;
    const visitedVertex = new Set();
    let isConnected = false;

    queue.enqueue(startVertex);
    visitedVertex.add(startVertex);

    while(queue.size > 0){
        const currentVertex = queue.dequeue();
        const neighbors = graph.getNeighbors(currentVertex);

        for(let neighbor of neighbors){
            const neighborVertex = neighbor.vertex;

            if(vistedVertex.has(neighborVertex)){
                continue; // eslint-disable-line
            }
            else{
                vistedVertex.add(currentVertex);
            }
            queue.enqueue(neighborVertex);
        }
    }
    if(graph._adjacencyList.size === visitedVertex.size){
        isConnected = true;
    }
    return isConnected
};
