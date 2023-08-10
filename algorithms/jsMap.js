function jsMap(keyName, valueName) {
  // Using JavaScript's Map Object functionality
  const newMap = new Map();

  newMap.set("a", 1);

  if (!newMap.get(keyName)) {
    newMap.set(keyName, valueName);
  }

  return newMap;
}

module.exports = jsMap;
