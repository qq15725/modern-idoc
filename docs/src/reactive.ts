import type { PropertyDeclaration, ReactiveObject } from '../../src'
import { getDeclarations, property } from '../../src'

class TestObject1 {
  @property({ fallback: 1 }) declare test1: number
  @property({ fallback: 1 }) declare test2: number
}

class TestObject2 extends TestObject1 implements ReactiveObject {
  @property({ fallback: 2 }) declare test2: number

  onUpdateProperty(key: string, newValue: unknown, oldValue: unknown, declaration: PropertyDeclaration): void {
    console.warn('[reactive] onUpdateProperty', key, newValue, oldValue, declaration)
  }
}

const test = new TestObject2()
test.test1 = 2

console.warn('[reactive] getDeclarations', Object.fromEntries(getDeclarations(TestObject1).entries()))
console.warn('[reactive] getDeclarations', Object.fromEntries(getDeclarations(TestObject2).entries()))
