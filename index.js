// Write your solution here!
var cats = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat(){
    var destructivelyRemoveLastCat = cats.shift()
    return destructivelyRemoveLastCat
}

function destructivelyRemoveFirstCat(){
    var destructivelyRemoveFirstCat = cats.shift()
    return destructivelyRemoveFirstCat
}
function appendCat(name){
    const catArr = [...cats, name]
    return catArr
}
function removeFirstCat(){
    const firstItem = cats.slice(1)
    return firstItem
}


