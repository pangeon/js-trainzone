function fn(x, y, ...args) {
    for (const arg of args) {
        console.log(arg);
    }
}

fn('come', 7, 8, true, 76);