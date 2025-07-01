import type { PropertyDeclaration, ReactiveObject } from '../../src'
import { property } from '../../src'

class TestObject implements ReactiveObject {
  @property() accessor abc = 1

  onUpdateProperty(key: string, newValue: unknown, oldValue: unknown, declaration: PropertyDeclaration): void {
    console.warn(key, newValue, oldValue, declaration)
  }
}

const test = new TestObject()
test.abc = 2
console.warn(test)
