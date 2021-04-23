const sum = require("./sum")

describe('add',()=>{

    it("adds 1 + 2 to be 3",()=>{
        expect(sum(1,2)).toBe(3)
    })

    it("adds -1 + 1 to be 0",()=>{
        expect(sum(-1,1)).toBe(0)
    })

    it("adds 1 + (-2) to be -1",()=>{
    expect(sum(1,-2)).toBe(-1)
    })
})