function BFSSearch(graph, searchTerm) {
  const personIsSeller = (name) => {
    return name[name.length - 1] === "m";
  };

  const search_queue = [];
  const searched = [];

  graph[searchTerm].forEach((person) => {
    search_queue.push(person);
  });

  while (search_queue.length !== 0) {
    let person = search_queue.shift();

    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mongo seller!`);

        return true;
      } else {
        graph[person].forEach((p) => {
          search_queue.push(p);
        });

        searched.push(person);
      }
    }
  }

  return false;
}

module.exports = BFSSearch;
