var lengthOfLongestSubstring = function (s) {
    const uniqueStr = new Set()
    let k = 0
    let res = 0
    for (let i = 0; i < s.length; i++) {
        while (uniqueStr.has(s[i])) {
            uniqueStr.delete(s[k])
            k++
        }
        uniqueStr.add(s[i])
        res = Math.max(res, uniqueStr.size)

    }

    return res
};

console.log(lengthOfLongestSubstring("khethan"))
