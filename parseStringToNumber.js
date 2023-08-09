let err = 0

function parser(str, radix = 10) {

    if (!str.length) return

    let a = 0;

    for (let i = 0; i < str.length; i++) {
        const digit = convertCharToDigt(str[i]);

        if (digit == 10) {
            ++err
            return
        }

        a *= radix;
        a += digit;
    }

    return a
}

function convertCharToDigt(char) {
    switch (true) {
        case (char >= '0' && char <= '9'):
            return char - '0';
        default:
            return 10;
    }
}

const testData = ['123456', "1234567899", "asd1322", "!wqe", "qwe4566"]

for (let index = 0; index < testData.length; index++) {
    const d = parser(testData[index]);
    if(d) console.log(typeof d, d);

}
console.log(`invalid string: ${err} of ${testData.length}`);

// Output: ................

// number 123456
// number 1234567899
// invalid string: 3 of 5
