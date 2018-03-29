/* jshint node: true, devel: true */
'use strict';

const fs = require('fs');
const { getInstalledPath } = require('get-installed-path');
const TEMPLATE = 'template/index.js';
const CURR_DIR = process.cwd();
let TEMPLATE_DIR = '';

const formatName = (s) => {
    let input = s.split(/(?=[A-Z])/).join('-').toLowerCase();
    return input.substr(0, input.lastIndexOf('.')) || input;
};

const createModule = (DIR_NAME)=> {
    DIR_NAME = formatName(DIR_NAME);
    const FULL_DIR = `${CURR_DIR}/${DIR_NAME}`;
    if (!fs.existsSync(FULL_DIR)){
        fs.mkdir(FULL_DIR, (err) => {
            if (err) throw err;
            createFile('index', FULL_DIR);
            console.log(`${DIR_NAME} module successfully created`);
        });
     } else {
         console.error(`ERROR: ${DIR_NAME} already exists!`);
     }
};

const createFile = (FILE_NAME, FILE_DIR)=> {
    if(!FILE_DIR){
         FILE_DIR = CURR_DIR;
    }
    FILE_NAME = formatName(FILE_NAME);
    if (!fs.existsSync(`${FILE_DIR}/${FILE_NAME}.js`)){
        getInstalledPath('edcli').then((path) => {
            TEMPLATE_DIR = path;
            fs.copyFile(`${TEMPLATE_DIR}/${TEMPLATE}`, `${FILE_DIR}/${FILE_NAME}.js`, (err) => {
            if (err) throw err;
            console.log(`${FILE_NAME}.js successfully created`);
        });
     });
     } else {
         console.error(`ERROR: ${FILE_NAME} already exists!`);
     }
};

const API = {
    createFile,
    createModule
};

module.exports = API;