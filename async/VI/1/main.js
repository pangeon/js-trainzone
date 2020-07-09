async function timestamp(duration) {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Date.now());
        }, duration)
    })
    var waitToDate = await promise;
    console.log(waitToDate);
}
for(var i = 500; i < 1000 * 10; i += 500) {
    timestamp(i);
}



