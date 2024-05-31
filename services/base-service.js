const fs = require('fs');
const util = require('util');
const path = require('path');

const idGenerator = require('../utils/id-generator.js');

const rootFolderPath = path.join(__dirname,'..');
const dbFilePath = path.join(rootFolderPath,'/database/db.json');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const getAllJsonDataFromText = async()=>{
    const allText = await readFileAsync(dbFilePath);
    const allData = JSON.parse(allText);
    return allData;
}

const createModel = async (model,tableKey) => {
    const allData = await getAllJsonDataFromText();
    const newModel = {"id":idGenerator(allData[tableKey]),...model};
    allData[tableKey].push(newModel);
    await writeFileAsync(dbFilePath,JSON.stringify(allData,null,2));
    return newModel;
}   

module.exports = {
    getAllJsonDataFromText,
    createModel
}




