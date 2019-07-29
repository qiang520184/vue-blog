const fs = require('fs');
const path = require('path');
const configPath = './config/haha.js';
let mdData = {
    '技术': {}
};
let ArticleList = [];
let mdPath = './source';
let data = fs.readdirSync(mdPath, 'utf-8');
data && data.length && data.forEach(item => {
    let filePath = path.join(mdPath, item);
    let str = fs.readFileSync(filePath, 'utf-8');
    str = str.slice(3, str.lastIndexOf('---')).replace(/\n/g, ',');
    let strArr = str.split(',');
    let obj = {};
    strArr && strArr.length && strArr.forEach(item => {
        let arr = item.split(':');
        if (arr[0]) {
            if (arr[0] === 'date') {
                obj[arr[0]] = new Date(item.slice(5, -1)).getTime();
            } else {
                obj[arr[0]] = arr[1] && arr[1].trim();
            }
        }
    });
    ArticleList.push(obj);
    switch (obj.categories) {
        case '技术':
            mdData['技术'][obj.date] = obj;
            break;
    }
});
console.log(ArticleList);
fs.writeFile(configPath, JSON.stringify(ArticleList.sort((a, b) => a.date < b.date), null, '\t'), 'utf8', (err => {
    if (err) {
        console.log(err);
    }
}));
