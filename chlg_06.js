// map filter and reduce helper function

let articles = [
    {
        id: 1,
        name: "avocat",
        price: 20,
        qte: 2
    },
    {
        id: 2,
        name: "mangue",
        price: 10,
        qte: 2
    },
    {
        id: 3,
        name: "citron",
        price: 10,
        qte: 3
    }
]

let nbre = [1,2,3,4,5,6,7,8,9];
function sme(){
    return nbre.reduce((x,y)=> x + y, 0);
}
 console.log(sme(nbre));


function Delete(id){
    return articles.filter(item=>item.id !== id)
}

// console.log(Delete(2));

function totalArticle(){
    return articles.reduce((x,y)=>(y.price * y.qte + x),0)
}
// console.log(totalArticle(articles));