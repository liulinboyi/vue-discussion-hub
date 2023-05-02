const fs = require('fs')
const path = require("path")
const indexData = require("../data/index.json")


const origin = fs.readFileSync(path.resolve(__dirname, '../HEAD.md'))

let originString = origin.toString()

let index = 0
for(let n of indexData) {
    originString = originString.concat(`###  ${index}. ${n.title}

![]()
    
### [Discussion](${n.href})


`)
    index++;

}

console.log(originString)

fs.writeFileSync(path.resolve(__dirname, "../README_TARGET.md"), originString)
