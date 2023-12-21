const {  Worker, isMainThread } = require('worker_threads');

if(isMainThread) {
    console.log("main");
    console.log("pid: ", process.pid)

    new Worker(__filename);
   
} else {
    console.log("worker");
    setTimeout(()=>{},100000)
}