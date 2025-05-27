
function iSVowel(newStr) {
    let vowel = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < newStr.length; i++) {
        if (newStr.indexOf(vowel)) {
            console.log("true")
        }
    }
    // if (newStr.indexOf(vowel)) {

    // }
    console.log("str===>", count);
}



let str = "lucky";
let res = iSVowel(str);
console.log(res);