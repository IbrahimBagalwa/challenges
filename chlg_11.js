// charAt
function accederChart(str){
    return str.charAt(3)
}
console.log(accederChart("Bonjour"))//j
const phrase ="la methode renvoie la nouvelle chaine contenant le caractere a la position indiquee dans l'argument"
const index = 7;
console.log(`le caractere a l'index ${index} est ${phrase.charAt(index)}`); // o
// la methode concat
const h = "Hello"; "olleh"
const w = "world";
console.log(h.concat(' ' + w))//hello word


var b = ["Bonjour",' ', "Josh",' ', "!"]
console.log("".concat(...b))//bonjour josh !

// includes() methode il renvoi true or false selon le cas de figure

const word = "nouvelle";
console.log(phrase.includes(word))//true

// indexOf() renvoie l'indice de la premiere occurence de la valeur cherchee au sein de la chaine courante 
// elle renvoie -1 si la reponse n'est pas trouvee







function difference(arr,n)
    {
        // Initialize sums of diagonals
        let d1 = 0, d2 = 0;
    
        for (let i = 0; i < n; i++)
        {
            for (let j = 0; j < n; j++)
            {
                // finding sum of primary diagonal
                if (i == j)
                    d1 += arr[i][j];
    
                // finding sum of secondary diagonal
                if (i == n - j - 1)
                    d2 += arr[i][j];
            }
        }
    
        // Absolute difference of the sums
        // across the diagonals
        return Math.abs(d1 - d2);
    }
    let n = 3;
    let arr =
    [
        [11, 2, 4],
        [4 , 5, 6],
        [10, 8, -12]
    ];
    console.log(difference(arr,n));
/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.*/
    function plusMin(arr){
        let len = arr.length;
        let positiveCount = 0;
        let negativeCount = 0;
        let ZeroCount = 0;

        for(let i = 0; i< len; i++){
            if(arr[i]>0){
                positiveCount ++
            }else if(arr[i]<0){
                negativeCount ++
            }else if (arr[i]===0){
                ZeroCount ++;
            }
        }
        console.log((positiveCount / len).toFixed(4));
        console.log((negativeCount / len).toFixed(4)) ;
        console.log((ZeroCount / len).toFixed(4));
        
    }
    let m = [-4,3,-9,0,4,1]
    plusMin(m);