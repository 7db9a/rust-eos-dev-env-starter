const assert = require('assert');
const eoslime = require('./../eoslime').init();

const TOKEN_WASM_PATH = '../../project/example_gc_opt.wasm';
const TOKEN_ABI_PATH =  '../../project/example.abi.json';

describe('A failing test', function () {
    it("The test should fail", async () => {
        assert.equal(true, false, "Didn't pass the test.");
    });
});
