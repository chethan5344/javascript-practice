function stepsStart() {
    const a = [5, -4, -2, 3, 1]
    let x = 1, b = 1; // start point
    let i = 0
    while (i < a.length) {
        // x is the number of steps climbed 
        x = (x + a[i])
        if (x >= 1) {
            i++
        } else {
            // x is also incremented because change of start point
            x = b + 1 
            b = b + 1
            i = 0
        }
    }
    return b
}

console.log(stepsStart())
