const sum = require('./sum.js');

test('数字比较', () => {
    expect(sum(1, 2)).toBe(3);
})

test('字符串比较', () => {
    expect('1'+'2').toBe('12');
})

test('对象比较', () => {
    const data = {one: 1};
    data['two'] = 2;
    // toEqual 递归检查对象或数组的每个字段。
    expect(data).toEqual({one: 1, two: 2});
});

test('不等于比较', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

// 判断undefined、 null，和 false
test('判断undefined、 null，和 false', () => {
    const n = null;
    expect(n).toBeNull(); // 是null
    expect(n).toBeDefined(); // 是defined
    expect(n).not.toBeUndefined(); // 不是undefined
    expect(n).not.toBeTruthy(); // 不是真
    expect(n).toBeFalsy(); // 是假

    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});


test('数字比较，等于、大于、小于、大于等于、小于等于', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('浮点数字比较', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
    expect(value).toBeCloseTo(0.3); // 这句可以运行
});

test('字符串包含字符正则判断', () => {
    expect('team').not.toMatch(/I/);
    expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
];

test('数组内包含某元素判断', () => {
    expect(shoppingList).toContain('beer');
});

function sayHelloFunc() {
    throw new Error('执行此函数出错时，出错了');
}

test('函数抛出异常，对异常内容判断', () => {
    expect(sayHelloFunc).toThrow();
    expect(sayHelloFunc).toThrow(Error);
    expect(sayHelloFunc).toThrow('执行此函数出错时，出错了');
    expect(sayHelloFunc).toThrow(/出错了/);
});

