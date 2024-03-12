const fibonacci = require('./fibonacci.js');

describe('fibonacci', () => {
    it('should return 0', () => {
        expect(fibonacci(0)).toBe([0]);
    });
});
