const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]


// bruteforce
function dailyTemperature(temp) {
    const res = new Array(temp.length).fill(0)
    for (let index = 0; index < temp.length; index++) {
        for (let ind = index + 1; ind < temp.length; ind++) {
            if (temp[index] < temp[ind]) {
                res[index] = ind - index
                break
            }
        }

    }
    return res
}

// optimal 
function dailyTemperature2(temp) {
    const stack = [], res = new Array(temp.length).fill(0)
    for (let index = 0; index < temp.length; index++) {
        while(stack.length && temp[index] > temp[stack[stack.length -1]]){
            const i = stack.pop();
            res[i] = index - i
        }
        stack.push(index)
    }
    return res
}

console.log(dailyTemperature(temperatures))
console.log(dailyTemperature2(temperatures))
