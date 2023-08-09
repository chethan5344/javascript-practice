function stepsStart() {
    const a = [5, -4, -2, 3, 1]
    let x = 1
    let i = 0
    let b = 1
    while (i < a.length) {
        x = (x + a[i])
        if (x >= 1) {
            i++
        } else {
            x = b + 1 
            b = b + 1
            i = 0
        }
    }
    return b
}

console.log(stepsStart())
