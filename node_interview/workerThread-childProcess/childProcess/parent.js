const cp = require('child_process');

console.log("parent pid: ", process.pid)
 
let child = cp.fork(__dirname + '/child.js');