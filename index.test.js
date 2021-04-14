const { analyzeObj, toReverse } = require("./index")

describe("test analyzeObj", () => {

    test("valid analyzeObj input:(inputValue,arr) output ['hired', 'be', 'I']", () => {
        let inputValue = { hired: { be: "I" } }
        let arr = []
        expect(analyzeObj(inputValue, arr)).toEqual(["hired", "be", "I"])
    })

    test("valid analyzeObj input:(inputValue,arr) output ['hired', 'be', 'to', 'deserve', 'I']", () => {
        let inputValue = { hired: { be: { to: { deserve: 'I' } } } };
        let arr = []
        expect(analyzeObj(inputValue, arr)).toEqual(['hired', 'be', 'to', 'deserve', 'I'])
    })

    test("invalid analyzeObj input:(inputValue,arr) output undefined ", () => {
        let inputValue = {};
        let arr = []
        expect(analyzeObj(inputValue, arr)).toEqual(undefined)
    })
})

describe("test toReverse", () => {
    test("valid toReverse input inputValue output outputValue", () => {
        let inputValue = { hired: { be: { to: { deserve: 'I' } } } };
        let outputValue = { I: { deserve: { to: { be: 'hired' } } } };
        expect(toReverse(inputValue)).toEqual(outputValue)
    })

    test("valid toReverse input inputValue output outputValue", () => {
        let inputValue = { hired: { be: "I" } }
        let outputValue = { I: { be: "hired" } }
        expect(toReverse(inputValue)).toEqual(outputValue)
    })

    test("invalid toReverse input inputValue output outputValue", () => {
        let inputValue = {}
        let outputValue = undefined
        expect(toReverse(inputValue)).toEqual(outputValue)
    })
})