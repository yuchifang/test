// Input
let inputValue = { hired: { be: { to: { deserve: 'I' } } } };

// Output:
let outputValue = { I: { deserve: { to: { be: 'hired' } } } };

// let inputValue = { hired: { be: "I" } }

// let outputValue = { I: { be: "hired" } }

console.log(toReverse(inputValue))

function toReverse(input) {
    let arr = []
    let index = 0
    let analyzeArr = analyzeObj(input, arr, index)
    let buildObj = {}
    let objValue = ""
    if (!analyzeArr) return undefined
    for (let i = 0; i < analyzeArr.length; i++) {
        if (analyzeArr[i] !== undefined && analyzeArr[i + 1] !== undefined) {

            if (i === 0) {
                objValue = analyzeArr[i]
                buildObj[analyzeArr[i + 1]] = objValue
            }

            if (i > 0) {
                objValue = buildObj
                buildObj = {}
                buildObj[analyzeArr[i + 1]] = objValue
            }
        }
    }
    return buildObj
}

function analyzeObj(input, arr) {
    if (Object.keys(input).length === 0) return undefined

    let key = Object.keys(input)[0]
    let value = Object.values(input)[0]
    arr.push(key)
    if (typeof value !== "string") {
        return analyzeObj(value, arr)
    }

    arr.push(value)
    return arr
}

module.exports = { analyzeObj, toReverse }