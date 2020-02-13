let numbers = [1, 2, 3, 4, 5] 

function summingTool() {

    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        // debugger;
        sum += numbers[i]
    }
    console.log(sum)
}

summingTool()