## 类型

1.1 基本类型：你可以直接获取到基本类型的值
- string
- number
- boolean
- null
- undefined
- symbol
- bigint
```js
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
```
- 由于 Symbols 和 BigInts 不能被正确的 polyfill。所以不应在不能原生支持这些类型的环境或浏览器中使用他们。

1.2 复杂类型: 复杂类型赋值是获取到他的引用的值。
- object
- array
- function
```js
const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```

## 引用

2.1 所有的赋值都用 const，避免使用 var。eslint: prefer-const, no-const-assign
::: tip 提示
为什么？因为这个能确保你不会改变你的初始值，重复引用会导致 bug 并且使代码变得难以理解。
:::
```js
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```