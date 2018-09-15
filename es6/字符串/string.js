//如果汉字的编码数大，则会显示为2
let s = "喆";
console.log(s.length);

//包含、起始、结尾
let str = "abcdefg";
console.log(str.includes("cde"));
console.log(str.startsWith("abc"));
console.log(str.endsWith("efg"));

//重复
console.log(str.repeat(10));

//补全
//以de为开头，若不足5字，则用abc来补全
console.log("abc".padStart(5, "de"));
//以de为结尾，若不足5字，则用abc来补全
console.log("abc".padEnd(5, "de"));

//模板字符串，在``符号之间的字符都将视为字符串，若想引入变量则用${}标识出
console.log(`
    我们都是中国
    "是的"
    <br>
    <div>真的吗？</div>
    ${str}
`);