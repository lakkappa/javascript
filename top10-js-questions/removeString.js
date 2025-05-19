function removeDuplicates(str) {
    let setStr = new Set();
    let res = '';
    for (let i of str) {
        if (!setStr.has(i)) {
            res += i;
            setStr.add(i);
        }
    }
    return res;
}

console.log(removeDuplicates("adhar"));