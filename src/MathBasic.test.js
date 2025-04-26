const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
    it('should contain add, substract, multiply, and divide function', () => {
        expect(MathBasic).toHaveProperty('add');
        expect(MathBasic).toHaveProperty('substract');
        expect(MathBasic).toHaveProperty('multiply');
        expect(MathBasic).toHaveProperty('divide');
        expect(MathBasic.add).toBeInstanceOf(Function);
        expect(MathBasic.substract).toBeInstanceOf(Function);
        expect(MathBasic.multiply).toBeInstanceOf(Function);
        expect(MathBasic.divide).toBeInstanceOf(Function);
    });
    it('A add Function', () => {
        expect(() => MathBasic.add()).toThrow();
        expect(() => MathBasic.add(1)).toThrow();
        expect(() => MathBasic.add(1,2,3)).toThrow();
        expect(() => MathBasic.add(1,2,3,4)).toThrow();
    });
});
