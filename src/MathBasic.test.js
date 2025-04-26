const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
    it('should contain add, substract, multiply, and divide function', () => {
        expect(MathBasic).toHaveProperty('add');
        expect(MathBasic).toHaveProperty('subtract');
        expect(MathBasic).toHaveProperty('multiply');
        expect(MathBasic).toHaveProperty('divide');
        expect(MathBasic.add).toBeInstanceOf(Function);
        expect(MathBasic.subtract).toBeInstanceOf(Function);
        expect(MathBasic.multiply).toBeInstanceOf(Function);
        expect(MathBasic.divide).toBeInstanceOf(Function);
    });
    describe('A add Function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.add()).toThrow();
            expect(() => MathBasic.add(1)).toThrow();
            expect(() => MathBasic.add(1,2,3)).toThrow();
            expect(() => MathBasic.add(1,2,3,4)).toThrow();
        });
        it('should throw error when not given number parameters', () => {
            expect(() => MathBasic.add('1', '2')).toThrow();
            expect(() => MathBasic.add(true, {})).toThrow();
            expect(() => MathBasic.add([], null)).toThrow();
        });
        it('should return a + b when given 2 parameters', () => {
            expect(MathBasic.add(2, 2)).toEqual(4);
            expect(MathBasic.add(16, 8)).toEqual(24);
            expect(MathBasic.add(3, 7)).toEqual(10);     
        });
    });
    describe('A subtract Function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.subtract(1)).toThrow();
            expect(() => MathBasic.subtract(1,3,4)).toThrow();
            expect(() => MathBasic.subtract(1,5,6,7,7)).toThrow();
        });
        it('should throw error when not given number parameters', () => {
            expect(() => MathBasic.subtract('1', '2')).toThrow();
            expect(() => MathBasic.subtract(true, {})).toThrow();
            expect(() => MathBasic.subtract([], null)).toThrow();
        });
        it('should return a - b when given 2 parameters', () => {
            expect(MathBasic.subtract(2,1)).toEqual(1);
            expect(MathBasic.subtract(20,5)).toEqual(15);
            expect(MathBasic.subtract(100, 1)).toEqual(99);

        });
    });
    describe('A multiply Function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.multiply(1)).toThrow();
            expect(() => MathBasic.multiply(1,3,4)).toThrow();
            expect(() => MathBasic.multiply(1,5,6,7,7)).toThrow();
        });
        it('should throw error when not given number parameters', () => {
            expect(() => MathBasic.multiply('1', '2')).toThrow();
            expect(() => MathBasic.multiply(true, {})).toThrow();
            expect(() => MathBasic.multiply([], null)).toThrow();
        });
        it('should return a * b when given 2 parameters', () => {
            expect(MathBasic.multiply(2,1)).toEqual(2);
            expect(MathBasic.multiply(20,5)).toEqual(100);
            expect(MathBasic.multiply(100, 1)).toEqual(100);

        });
    });
    describe('A Divide Function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.divide(1)).toThrow();
            expect(() => MathBasic.divide(1,3,4)).toThrow();
            expect(() => MathBasic.divide(1,5,6,7,7)).toThrow();
        });
        it('should throw error when not given number parameters', () => {
            expect(() => MathBasic.divide('1', '2')).toThrow();
            expect(() => MathBasic.divide(true, {})).toThrow();
            expect(() => MathBasic.divide([], null)).toThrow();
        });
        it('should return a * b when given 2 parameters', () => {
            expect(MathBasic.divide(2,1)).toEqual(2);
            expect(MathBasic.divide(20,5)).toEqual(4);
            expect(MathBasic.divide(100, 1)).toEqual(100);

        });
    });
});
