let map = new Map();
map.set("bob",1);
map.set("tom",2);

for(let [key,value] of map){
    console.log(key);
    console.log(value);
}

for(let [key] of map){
    console.log(key);
}
for(let [,value] of map){
    console.log(value);
}