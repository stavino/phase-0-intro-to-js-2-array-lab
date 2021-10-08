const cats = [
 "Milo",
 "Otis",
 "Garfield",   
];
function destructivelyAppendCat(name){
    return cats.push(`${name}`)
}
function destructivelyPrependCat(name){
    return cats.unshift(`${name}`)
};
function destructivelyRemoveLastCat(){
    return cats.pop()
};
function destructivelyRemoveFirstCat(){
    return cats.shift()
};
let catCopy;
function appendCat(name){
    return catCopy = [...cats,`${name}`]
};
function prependCat(name){
    return catCopy = [`${name}`, ...cats]
};
function removeLastCat(){
    return catCopy = [...cats.slice(0,2)]
};
function removeFirstCat(){
    return catCopy = [...cats.slice(1,3)]
};