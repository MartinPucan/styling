const f1 = function () {
  alert(this.name)
}

const foo = { name: 'foo' }
const bar = { name: 'bar' }
f1.call(foo)

const f2 = f1.bind(bar)
f2()
