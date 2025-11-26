/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const binaryString = n.toString(2);
    let oneCount = 0;
    
    for(const bit of binaryString) {
        if(bit === '1') {
            oneCount += 1;
        }
    }
    
    return oneCount;
};