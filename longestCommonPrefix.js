var Trie = function () {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.trie
    for (const element of word) {
        if (!node[element]) {
            node[element] = new Trie()
        }
        node = node[element]
    }
    node.isWord = true
};

Trie.prototype.commonPrefix = function (text) {
    let node = this.trie
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if(!node[char]) return i
        node = node[char] 
    }
    return text.length
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var obj = new Trie()
    obj.insert(strs[0])
    let index = strs[0].length
    for (let i = 1; i < strs.length; i++) {
        const element = strs[i];
        index = Math.min(index, obj.commonPrefix(element))
    }
    console.timeEnd("aaa")
    return strs[0].substring(0, index)
};
