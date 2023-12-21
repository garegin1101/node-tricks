process.nextTick(() => console.log("nT1"))
process.nextTick(() => {
    console.log("nt2")
    process.nextTick(() => console.log("nT3"))
})
Promise.resolve("Pr1").then(console.log)
Promise.resolve("Pr2").then((res)=>{
    console.log(res);
    Promise.resolve("Pr3").then(console.log)
})