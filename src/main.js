'use strict';

module.exports = class Vertex {
  constructor(value) {
    this.value = value;
  }
};

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    // this.startNode = vertex;
    // this.endNode = vertex;
    this.weight = weight;
  }
}

class Graph { // eslint-disable-line
  constructor() {
    //! Vinicio - this variable keeps track of Edges (neighbors)
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('__ERROR__ Invalid Nodes');
    }

    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex');
    }

    return [...this._adjacencyList.get(vertex)];
  }
}
