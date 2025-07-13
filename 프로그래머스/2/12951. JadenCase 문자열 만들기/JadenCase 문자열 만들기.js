 const checkCase = (word) => {
     if(word.length === 0) return word;
     const firstChar = word[0].toUpperCase();
     const otherChar = word.slice(1).toLowerCase();
     return firstChar+otherChar;
    }
 
function solution(s) {
    return s.split(" ").map((word) => checkCase(word)).join(' ');
}