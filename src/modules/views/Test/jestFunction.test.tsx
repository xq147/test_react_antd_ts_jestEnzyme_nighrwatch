import JEstFuction from './jestFuction'

describe('Describe Test',()=>{
  console.log('————————————————这是一个单元测试套——————————————————')
  test('sum(2 + 2) 等于 4', () => {
    expect(JEstFuction.sum(2, 2)).toBe(4);
  });
  // .not修饰符允许你测试结果不等于某个值的情况，
  test('sum(2, 2) 不等于 5', () => {
    expect(JEstFuction.sum(2, 2)).not.toBe(5);
  });
  test('getAuthor()返回的对象深度相等', () => {
    expect(JEstFuction.getAuthor('肖',18)).not.toEqual(JEstFuction.getAuthor('肖',20));
  });
  // .toEqual匹配器会递归的检查对象所有属性和属性值是否相等，
  // 所以如果要进行应用类型的比较时，请使用.toEqual匹配器而不是.toBe
  test('getAuthor()返回的对象内存地址不同', () => {
    expect(JEstFuction.getAuthor('肖',18)).not.toBe(JEstFuction.getAuthor('肖',18));
  });
  // .toHaveLength可以很方便的用来测试字符串和数组类型的长度是否满足预期
  test('getIntArray(3)返回的数组长度应该为3', () => {
    expect(JEstFuction.getIntArray(3)).toHaveLength(3);
  })
  //.toThorw可能够让我们测试被测试方法是否按照预期抛出异常，
  // 但是在使用时需要注意的是：我们必须使用一个函数将将被测试的函数做一个包装，
  // 正如下面getIntArrayWrapFn所做的那样，否则会因为函数抛出导致该断言失败。
  test('getIntArray(3.3)应该抛出错误', () => {
    function getIntArrayWrapFn() {
      JEstFuction.getIntArray(3.3);
    }
    console.log("应该抛出异常！！！！！")
    expect(getIntArrayWrapFn).toThrow('"getIntArray"只接受整数类型的参数');
  })
  //.toMatch传入一个正则表达式，它允许我们用来进行字符串类型的正则匹配。
  test('getAuthor().name应该包含"肖"这个姓氏', () => {
    console.log('————————————————————结果————————————————————')
    expect(JEstFuction.getAuthor('小肖',18).name).toMatch('肖');
  })
})
