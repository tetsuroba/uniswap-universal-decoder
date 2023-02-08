const chai = require('chai');
const expect = chai.expect;
const fs = require("fs");
const {decodeExecute} = require("../universalDecoder");

describe('Transaction processing', () => {
    it('should correctly identify and decode a V2 swap exact in transaction from execute', () => {
        const testFile = JSON.parse(fs.readFileSync('tests/V2_SWAP_EXACT_IN_EXECUTE.json', 'utf-8'));

        let decodedObject = decodeExecute(testFile.input);

        expect(decodedObject.function).to.eql("V2_SWAP_EXACT_IN");
        expect(decodedObject.amountIn).to.eql("7500000000000000");
        expect(decodedObject.amountOut).to.eql("58878075174672152174894551");
        expect(decodedObject.path).to.eql(["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","0x02e7F808990638E9e67E1f00313037EDe2362361"]);
    });
    it('should correctly identify and decode a V2 swap exact out transaction from execute', () => {
        const testFile = JSON.parse(fs.readFileSync('tests/V2_SWAP_EXACT_OUT_EXECUTE.json', 'utf-8'));

        let decodedObject = decodeExecute(testFile.input);

        expect(decodedObject.function).to.eql("V2_SWAP_EXACT_OUT");
        expect(decodedObject.amountIn).to.eql(testFile.value);
        expect(decodedObject.amountOut).to.eql("209511000000000");
        expect(decodedObject.path).to.eql(["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","0x1E8E29CA51363D923725aB9DaC73Bd7e9C440f71"]);
    });
    it('should correctly identify and decode a V3 swap exact in transaction from execute', () => {
        const testFile = JSON.parse(fs.readFileSync('tests/V3_SWAP_EXACT_IN_EXECUTE.json', 'utf-8'));

        let decodedObject = decodeExecute(testFile.input);

        expect(decodedObject.function).to.eql("V3_SWAP_EXACT_IN");
        expect(decodedObject.amountIn).to.eql("490040542184142600");
        expect(decodedObject.amountOut).to.eql("22563458791223110851455");
        expect(decodedObject.path).to.eql([
                                        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                        "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7"
                                    ]);
    });
    it('should correctly identify and decode a V3 swap exact in transaction from execute', () => {
        const testFile = JSON.parse(fs.readFileSync('tests/V3_SWAP_EXACT_OUT_EXECUTE.json', 'utf-8'));

        let decodedObject = decodeExecute(testFile.input);

        expect(decodedObject.function).to.eql("V3_SWAP_EXACT_OUT");
        expect(decodedObject.amountIn).to.eql("34564726617685178");
        expect(decodedObject.amountOut).to.eql("10000000000000000000");
        expect(decodedObject.path).to.eql([
            "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            "0x4d224452801aced8b2f0aebe155379bb5d594381"
        ]);
    });
});

