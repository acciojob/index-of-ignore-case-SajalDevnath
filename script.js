function indexOfIgnoreCase(str, subStr) {
    let lowerStr = str.toLowerCase();
    let lowerSubStr = subStr.toLowerCase();
    
    let index = lowerStr.indexOf(lowerSubStr);
    
    
    return index;
}

// Example usage:
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
