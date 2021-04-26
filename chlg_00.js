function treeVowels(str){
    return str.replace(/[aeiouyAEIOUY]/g,"");
}
console.log(treeVowels("la fonction fait le triage de voyelles dans cette phrase"));