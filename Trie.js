
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

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.searchPrefix(word);
    return node != undefined && node.isWord !== undefined;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return this.searchPrefix(prefix);
};

Trie.prototype.searchPrefix = function (text) {
    let node = this.trie
    for (let char of text) {
        if (!node[char]) return false;
        node = node[char];
    }
    return node;
}
Trie.prototype.commonPrefix = function (text) {
    let node = this.trie
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if(!node[char]) return i
        node = node[char] 
    }
    return text.length
}

function main() {
    console.time("aaa")
    const strings = ["dog","racecar","car"]
    var obj = new Trie()
    obj.insert(strings[0])
    let index = strings[0].length
    for (let i = 1; i < strings.length; i++) {
        const element = strings[i];
        index = Math.min(index, obj.commonPrefix(element))
    }
    console.timeEnd("aaa")
    return strings[0].substring(0, index)
}

console.log(main())
