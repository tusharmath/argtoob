import test from 'ava'
import arg from './index'

test(t => {
  t.same(arg('a', 'b', 'c')(1, 2, 3), {a: 1, b: 2, c: 3})
})
