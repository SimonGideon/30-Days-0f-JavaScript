var john = {
    name: 'I am John',
    age: 24,
    isActive: true,
}

var marry = {
    name: 'I am Marry',
    age: 23,
    isActive: true,
}
var sam = {
    name: 'I am Sam',
    age: 22,
    isActive: false,
}

let users = new Map()
users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)
// access the size of the map
console.log(users.size);
// access the specific value in the map
console.log(users.get('sam'));
for (const value of users.values()) {
    console.log(value.name)
}

for (const [key, value] of users.entries()) {
    console.log(key + '=' + value.name)    
    console.log(`${key} + = + ${value.name}`)
}

users.forEach((value, key)=> console.log(key + '=' + value.name))
 var arrofArr = [['one', '1'], ['two', '2'], ['three', '3']]
 var newMap = new Map(arrofArr)
 
 console.log(newMap)