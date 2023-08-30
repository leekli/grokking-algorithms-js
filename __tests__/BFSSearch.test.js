const BFSSearch = require("../algorithms/BFSSearch");

function generateTestGraph() {
  graph = {};

  graph["you"] = ["alice", "bob", "claire"];
  graph["bob"] = ["anuj", "peggy"];
  graph["alice"] = ["peggy"];
  graph["claire"] = ["thom", "jonny"];
  graph["anuj"] = [];
  graph["peggy"] = [];
  graph["thom"] = [];
  graph["jonny"] = ["adam"];

  return graph;
}

describe("Breadth First Search Graph tests", () => {
  test("should return true if search name given has a connection in the graph with someone whose name ends in 'm'", () => {
    const graph = generateTestGraph();
    expect(BFSSearch(graph, "you")).toBe(true);
    expect(BFSSearch(graph, "claire")).toBe(true);
    expect(BFSSearch(graph, "jonny")).toBe(true);
  });
  test("should return false if search name given does not have a connection in the graph with someone whose name ends in 'm'", () => {
    const graph = generateTestGraph();
    expect(BFSSearch(graph, "bob")).toBe(false);
    expect(BFSSearch(graph, "alice")).toBe(false);
  });
  test("should return false for any graph names given who have no connections throughout the graph", () => {
    const graph = generateTestGraph();
    expect(BFSSearch(graph, "anuj")).toBe(false);
    expect(BFSSearch(graph, "peggy")).toBe(false);
    expect(BFSSearch(graph, "thom")).toBe(false);
  });
});
