
function woodCalculator(chairQnt, tableQnt, bedQnt){
    const perChairWood = 3;
    const perTableWood = 5;
    const perBedWood = 8;

    const chairwoodQtn = chairQnt * perChairWood
    const tablewoodQtn = tableQnt * perTableWood
    const bedwoodQtn = bedQnt * perBedWood
    const total = chairwoodQtn + tablewoodQtn + bedwoodQtn
    return total;
}

let firstNumber = woodCalculator(4,3,4)
console.log(firstNumber)