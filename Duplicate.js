
let duplicateFinder = [10, 20, 30, 30, 50, 50, 70, 80, 80, 100, 120, 130]

function isAnyDuplicate(deuplicateFinder){
    const changeResult = [0]
    for( let result of deuplicateFinder){
        if (changeResult.indexOf(result) == -1){
            changeResult.push(result)
            console.log(changeResult)
        }
    }
}

let updateResult = isAnyDuplicate(duplicateFinder)
console.log(updateResult)