function bins (n) {
  if (n === 1) {
    return ['0', '1']
  } else {
    const output = []
    const prev = bins(n - 1)
    prev.forEach(bin => output.push('0' + bin))
    prev.forEach(bin => output.push('1' + bin))

    return output
  }
}

console.log(bins(2))
console.log(bins(3))
