const { timesTwo, order } = require("./function"); 

const menuItems = [
  {
    id: '1',
    name: 'Tatted Up Turkey Burger',
    price: 19.5,
  },
  {
    id: '2',
    name: 'Lobster Lollipops',
    price: 16.5,
  },
  {
    id: '3',
    name: 'Motley Que Pulled Pork Sandwich',
    price: 21.5,
  },
  {
    id: '4',
    name: 'Trash Can Nachos',
    price: 19.5,
  },
]
describe('describe', () => {
  test('Multiplies by two', () => {
    expect(timesTwo(4)).toBe(8)
  })

  test('Build an order object', () => {
    const result = {
      orderItems: menuItems,
      total: 77,
    }
    expect(order(menuItems)).toEqual(result)
  })
})

describe('describe2', () => {
  test('Multiplies by two', () => {
    expect(timesTwo(4)).toBe(8)
  })

  test('Build an order object', () => {
    const result = {
      orderItems: menuItems,
      total: 77,
    }
    expect(order(menuItems)).toEqual(result)
  })
})
