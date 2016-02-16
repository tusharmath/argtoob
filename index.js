module.exports = function () {
  const toArr = x => [].slice.call(x)
  const keys = toArr(arguments)
  return function () {
    const out = {}
    const values = toArr(arguments)
    values.forEach((x, i) => out[keys[i]] = x)
    return out
  }
}
