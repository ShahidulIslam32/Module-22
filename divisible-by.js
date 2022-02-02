
function divisibleBy(numbers){
    for (let i=1; i <= 50; i++){

        if (i % 3 == 0 && i % 5 == 0){
            console.log('this is dividable by 3 and 5')
        }
        else if (i % 3 == 0){
            console.log('this is foo !')
        }
        else if (i % 5 == 0){
            console.log('this is bar !')
        }
        else{
            console.log(i)
        }

    }
}

divisibleBy(0)