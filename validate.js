const validate = require('sourcemap-validator')
const fs = require('fs')
const assert = require('assert')
  
const generatedSourcePath = __dirname + '/dist/' + fs.readdirSync(__dirname + '/dist/').find(p => p.endsWith('.js'))
const mapPath = __dirname + '/dist/' + fs.readdirSync(__dirname + '/dist/').find(p => p.endsWith('.map'))
const min = fs.readFileSync(generatedSourcePath, 'utf-8')
const map = fs.readFileSync(mapPath, 'utf-8')

assert.doesNotThrow(function () {
  validate(min, map);
}, 'The sourcemap is not valid');
