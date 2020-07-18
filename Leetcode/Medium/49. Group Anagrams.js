/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split('').sort().toString();
        let vals = map.get(key) || [];

        // Use the sorted string as key, put all anagrams as values
        map.set(key, [...vals, strs[i]]);
    }

    return Array.from(map.values());
};

let result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(result)