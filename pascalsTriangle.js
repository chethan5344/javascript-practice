function pascalsTriangle(length) {
    const t = []

    for (let i = 1; i <= length; i++) {
        t.push(new Array(i).fill(1))
    }

    for (let i = 1; i < length; i++) {
        for (let j = 1; j < t[i].length - 1; j++) {
            t[i][j] = t[i - 1][j - 1] + t[i - 1][j]
        }
    }
    return t
}

console.log(pascalsTriangle(10))
