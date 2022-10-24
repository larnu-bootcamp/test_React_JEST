function sum(a, b) {
    return a + b;
}

function rest (a, b) {
    if (a < b) return undefined
    return a - b;
}

module.exports = {
    sum,
    rest
  }