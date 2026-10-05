import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('worked example returns the number 467400', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('empty cart returns zero even when shipping would apply', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
})

test('shipping applies when subtotal is below the threshold', () => {
  const items = [{ name: 'Item', price: 99, qty: 1 }]
  const options = { vatRate: 0.1, freeShipFrom: 100, shipFee: 30 }
  assert.equal(cartTotal(items, options), 139)
})

test('shipping is free when subtotal equals the threshold', () => {
  const items = [{ name: 'Item', price: 100, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 100, shipFee: 30 }
  assert.equal(cartTotal(items, options), 100)
})

test('shipping is free when subtotal exceeds the threshold', () => {
  const items = [{ name: 'Item', price: 101, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 100, shipFee: 30 }
  assert.equal(cartTotal(items, options), 101)
})

test('rounding applies once to the final total', () => {
  const items = [{ name: 'Item', price: 10.25, qty: 1 }]
  const options = { vatRate: 0.02, freeShipFrom: 100, shipFee: 0.05 }
  assert.equal(cartTotal(items, options), 11)
})

test('negative price throws RangeError', () => {
  const items = [{ name: 'Item', price: -1, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 100, shipFee: 30 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('zero quantity throws RangeError', () => {
  const items = [{ name: 'Item', price: 100, qty: 0 }]
  const options = { vatRate: 0, freeShipFrom: 100, shipFee: 30 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('fractional quantity throws RangeError', () => {
  const items = [{ name: 'Item', price: 100, qty: 1.5 }]
  const options = { vatRate: 0, freeShipFrom: 100, shipFee: 30 }
  assert.throws(() => cartTotal(items, options), RangeError)
})
