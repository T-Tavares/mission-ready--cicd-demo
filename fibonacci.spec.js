const fibonacci = require('./fibonacci.js');

describe('fibonacci', () => {
    it('should return 0', () => {
        // ARRANGE
        const upto = 0;
        result = [0];

        // ACTUAL
        const actual = fibonacci(upto);

        // ASSERT

        expect(actual).toStrictEqual(result);
    });
});
