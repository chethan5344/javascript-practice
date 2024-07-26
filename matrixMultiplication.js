function matrixMultiplication(m1, m2) {
    const m1Rows = m1.length
    const m1Cols = m1[0].length
    const m2Rows = m2.length
    const m2Cols = m2[0].length

    if (m1Cols != m2Rows) throw Error("the matrix cannot be multiplied")

    const res = new Array(m1Rows)

    for (let a = 0; a < res.length; a++) {
        res[a] = new Array(m2Cols).fill(0)
    }

    for (let i = 0; i < m1Rows; i++) { //to get the m1rows
        for (let j = 0; j < m2Cols; j++) {//to multiply m1 rows for each column in the m2
            for (let k = 0; k < m1Cols; k++) { // to get each element
                res[i][j] += m1[i][k] * m2[k][j]
            }
        }
    }
    return res
}
