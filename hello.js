'use strict'

/**
 * 
 * @param {hello 模块库} s 
 */

function greet(s){
    console.log('greet' + ':' + s + '!');
}

function hi(s){
    console.log('hi' + ':' + s + '!');
}

function goodbye(s){
    console.log('goodbye' + ':' + s + '!');
}

var hello = {
    'greet':greet,
    'hi':hi,
    'goodbye':goodbye
};

module.exports = hello;
