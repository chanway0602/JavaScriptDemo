'use strict'

/**
 * 主程序，引用hello模块。
 */

/* 判断运行环境是浏览器还是node.js */
if(typeof(window) === 'undefined'){
    console.log('node.js');
}
else{
    console.log('javascript');
}

var hello = require('./hello.js');

hello.greet('Mike');
hello.hi('May');
hello['goodbye']('Bob');
