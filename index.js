/* global module */
module.exports = {
  plugins: [
  	require('babel-plugin-syntax-async-functions'),
    require('babel-plugin-syntax-trailing-function-commas'),
    require('babel-plugin-transform-async-to-generator'),
    require('babel-plugin-transform-es2015-modules-commonjs')
  ]
}
