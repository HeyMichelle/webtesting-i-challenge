const enhancer = require('./enhancer.js');
// test away!


describe('enhancer functions', () => {
  describe('repair', () => {
    let testItem = {
      name: 'item 1',
      enhancement: 15,
      durability: 75
    }
    let result;
    let expected = 100;
    it('update durability to 100', () => {
      result = enhancer.repair(testItem)
      expect(result.durability).toBe(expected)
    })
  })

  describe('succeed', () => {
    let testItem2 = {
      name: 'item 2',
      enhancement: 8,
      durability: 65
    }
    let result;
    let expected = testItem2.enhancement + 1
    it('increase enhancement by 1', () => {
      result = enhancer.succeed(testItem2)
      expect(result.enhancement).toBe(expected)
    })

    it('if enhancement = 20, no change', () => {
      let testItem = {
        name: 'item 3',
        enhancement: 20,
        durability: 98
      }
      let result;
      let expected = testItem.enhancement
      result = enhancer.succeed(testItem)
      expect(result.enhancement).toBe(expected)
    })
  })

  describe('fail', () => {
    it('if enhancement < 15, durability - 5', () => {
      let testItem = {
        name: 'testItem 4',
        enhancement: 14,
        durability: 75
      }
      let result;
      let expected = testItem.durability - 5
      result = enhancer.fail(testItem)
      expect(result.durability).toBe(expected)
    })

    it('if enhancement > 15, durability - 10', () => {
      let testItem = {
        name: 'testItem 45',
        enhancement: 16,
        durability: 95
      }
      let result;
      let expected = testItem.durability - 10
      result = enhancer.fail(testItem)
      expect(result.durability).toBe(expected)
    })

    it('if enhancement > 16, enhancement - 1', () => {
      let testItem = {
        name: 'testItem 7',
        enhancement: 19,
        durability: 65
      }
      let result;
      let expected = testItem.enhancement - 1
      result = enhancer.fail(testItem)
      expect(result.enhancement).toBe(expected)
    })

    describe('get', () => {
      it('if enhancement = 0, no name change', () => {
        let testItem = {
          name: 'test item 92',
          enhancement: 0,
          durability: 42
        }
          let result;
          let expected = testItem.name 
          result = enhancer.get(testItem)
          expect(result.name).toBe(expected)
      })

      it('if enhancement > 0, name = `[+ enhancement lvl] item.name` ', () => {
        let testItem = {
          name: 'fire blaze og sword op',
          enhancement: 19,
          durability: 98
        }
        let result;
        let expected = `[+${testItem.enhancement}] ${testItem.name}`
        result = enhancer.get(testItem)
        expect(result.name).toBe(expected)
      })
    })
  })
})