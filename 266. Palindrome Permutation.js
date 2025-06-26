var canPermutePalindrome = function(s) {
    const unpairedCharacters = new Set()

    for(let char of s) {
        if(unpairedCharacters.has(char)){
           unpairedCharacters.delete(char)
           }
        else {
            unpairedCharacters.add(char)
        }
    }
    return unpairedCharacters.size <= 1       
};
