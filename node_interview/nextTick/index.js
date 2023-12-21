setImmediate(()=>console.log("Immediate 1"))
setTimeout(() => {
    console.log("Timeout 1")
    process.nextTick(() => console.log("nextTick 1"))
})
setTimeout(() => {
    console.log("Timeout 2")
    process.nextTick(() => {
        console.log("nextTick 2");
        process.nextTick(() => console.log("nextTick 3"))
    })
})
setTimeout(() => {
    console.log("Timeout 3")
    process.nextTick(() => console.log("nextTick 4"))
})

const now = Date.now();
while(now > Date.now() - 1000){}