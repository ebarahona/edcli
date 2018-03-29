#!/usr/bin/env node
'use strict';

const program = require('commander');
const { prompt } = require('inquirer'); 
const { createFile, createModule } = require('./generator');

// Questions for prompt
const questions = [
  {
    type : 'input',
    name : 'filename',
    message : 'Enter file name ...'
  },
  {
    type : 'input',
    name : 'modulename',
    message : 'Enter  module name ...'
  }
];

program
  .version('0.0.1')
  .description('Node blank file generator');

program
  .command('touch <filename>')
  .alias('f')
  .description('Creates blank Node js template file')
  .action(filename => createFile(filename));

program
  .command('mkdir <modulename>')
  .alias('m')
  .description('Creates blank node module template')
  .action(modulename => createModule(modulename));

program.parse(process.argv);


if (program.args.length === 0) program.help();

