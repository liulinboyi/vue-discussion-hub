const fs = require('fs')
const path = require("path")
const indexData = require("../data/index.json")


const origin = fs.readFileSync(path.resolve(__dirname, '../HEAD.md'))

let originString = origin.toString()

let index = 0

originString = originString.concat(`UPDATE TIME: ${new Date().toLocaleString()}

`)

for(let n of indexData) {
    const matched = n.href.match(/\/.*\/(.*)/)
    let imagePath = ''
    if (matched) {
        if (fs.existsSync(path.resolve(__dirname, `../image/${matched[1]}.png`))) {
            imagePath = `./image/${matched[1]}.png`
        }
    }
    originString = originString.concat(`###  \`${index}. ${n.title}\`

![](${imagePath ? imagePath : ''})
    
### [Discussion](${n.href})


`)
    index++;

}

originString = originString.concat(`## TODO 
UPDATE IMAGE & UPDATE LIST`)

console.log(originString)

fs.writeFileSync(path.resolve(__dirname, "../README_TARGET.md"), originString)
