function dijkstraAlgorithm(graph, costs, parents) {
  const processed = [];

  function findLowestCostNode(costs) {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (const node in costs) {
      const cost = costs[node];

      if (cost < lowestCost && !processed.includes(node)) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    }

    return lowestCostNode;
  }

  let node = findLowestCostNode(costs);

  while (node !== null) {
    let cost = costs[node];
    let neighbours = graph[node];

    for (const n of Object.keys(neighbours)) {
      let newCost = cost + neighbours[n];

      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }

    processed.push(node);

    node = findLowestCostNode(costs);
  }

  return { graph, processed, costs, parents };
}

const testGraph = {};
testGraph.start = {};
testGraph.start.a = 6;
testGraph.start.b = 2;
testGraph.a = {};
testGraph.a.fin = 1;
testGraph.b = {};
testGraph.b.a = 3;
testGraph.b.fin = 5;
testGraph.fin = {};

const testCosts = {};
testCosts.a = 6;
testCosts.b = 2;
testCosts.fin = Infinity;

const testParents = {};
testParents.a = "start";
testParents.b = "start";
testParents.fin = null;

console.log(dijkstraAlgorithm(testGraph, testCosts, testParents));
