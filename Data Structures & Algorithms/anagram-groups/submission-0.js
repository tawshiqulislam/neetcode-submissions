class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sorted = null;
        let seen = new Map();
        for(let x = 0; x < strs.length; x++){
            sorted = strs[x].split('').sort().join('')

            if(!seen.has(sorted)){
                seen.set(sorted, []);
            }
            seen.get(sorted).push(strs[x])
        }
        return (Array.from(seen.values()))
    }
}
