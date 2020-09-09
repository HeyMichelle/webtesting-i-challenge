module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement == 20) {
    return item
  } else {
    return {
      ...item,
      enhancement: item.enhancement + 1 
    }
  }
} 

function fail(item) {
  if (item.enhancement < 15) {
    return {
      ...item,
      durability: item.durability - 5
    }
  } 

  if (item.enhancement > 16) {
    return {
      ...item,
      enhancement: item.enhancement - 1
    }
  } else if (item.enhancement > 15) {
      return {
        ...item,
        durability: item.durability - 10
      }
  } 
}

function repair(item) {
  return {
    ...item, 
    durability: 100
    // or item.durability = 100
  }
}

function get(item) {
  if (item.enhancement == 0) {
    return {
      ...item,
      name: item.name
    }
  }

  if (item.enhancement > 0) {
    return {
      ...item,
      name: `[+${item.enhancement}] ${item.name}`
    }
  }
}

// - Add a `get()` method to the `enhancer` object that takes an `item` and **returns a new item** with the `name` property modified according to the following rules:
//   - if the enhancement level is 0, the the name is not modified.
//   - if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".
// - Design and build a Web Application to test the enhancing module you implemented for the MVP.
// - Work on [this repository for extra practice testing JavaScript Functions](https://github.com/LambdaSchool/Testing).
