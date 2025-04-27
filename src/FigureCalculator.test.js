const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');
describe('A Figure Calculator', () => {
    it('should contain calculateRectanglePerimeter, calculatorRectangleArea, calculatorTrianglePerimeter, and calculatorTriangleArea functions', () => {
        const figureCalculator = new FigureCalculator();
        expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
        expect(figureCalculator).toHaveProperty('calculatorRectangleArea');
        expect(figureCalculator).toHaveProperty('calculatorTrianglePerimeter');
        expect(figureCalculator).toHaveProperty('calculatorTriangleArea');
        expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculatorRectangleArea).toBeInstanceOf(Function);
        expect(figureCalculator.calculatorTrianglePerimeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculatorTriangleArea).toBeInstanceOf(Function);
    });
    describe('A calculateRectanglePerimeter Function', () => { 
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculateRectanglePerimeter()).toThrow();
            expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrow();
            expect(() => figureCalculator.calculateRectanglePerimeter(1,2,3,4)).toThrow();

        });
        it('should throw error when not given number parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculateRectanglePerimeter('1', '2')).toThrow();
            expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrow();
            expect(() => figureCalculator.calculateRectanglePerimeter([], null)).toThrow();
        });
        it('should return corret value based on rectangle perimeter formula', () => {
            // Arrange
            const lenght = 20;
            const height = 10;
            const spyAdd = jest.spyOn(MathBasic,'add');
            const spyMultiply =  jest.spyOn(MathBasic, 'multiply');
            const figureCalculator = new FigureCalculator(MathBasic);


            // Action
            const result = figureCalculator.calculateRectanglePerimeter(lenght, height);

            // Assert
            expect(result).toEqual(60);
            expect(spyAdd).toHaveBeenCalledWith(lenght, height);
            expect(spyMultiply).toHaveBeenCalledWith(2, 30);
        });
    })
    describe('A calculateRectangleArea', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculatorRectangleArea()).toThrow();
            expect(() => figureCalculator.calculatorRectangleArea(1)).toThrow();
            expect(() => figureCalculator.calculatorRectangleArea(1,2,3)).toThrow();
        });
        it('should throw error when not given number parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculatorRectangleArea('1', '2')).toThrow();
            expect(() => figureCalculator.calculatorRectangleArea(true, {})).toThrow();
            expect(() => figureCalculator.calculatorRectangleArea([], null)).toThrow();
        });
        it('should return correct value based on rectangle area formula', () => {
            // Arrange
            const lenght = 20;
            const height = 10;
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const figureCalculator = new FigureCalculator(MathBasic);

            // action
            const result = figureCalculator.calculatorRectangleArea(lenght, height);

            // Assert
            expect(spyMultiply).toHaveBeenCalledWith(lenght, height);
            expect(result).toEqual(200);
            
        });
    });
    describe('A calculateTrianglePerimeter', () => {
        it('should throw error when not given 3 parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculatorTrianglePerimeter()).toThrow();
            expect(() => figureCalculator.calculatorTrianglePerimeter(1,2)).toThrow();
            expect(() => figureCalculator.calculatorTrianglePerimeter(1,2,3,4,5)).toThrow();
        });
        it('should throw error when not given number parameter', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculatorTrianglePerimeter('1', '2')).toThrow();
            expect(() => figureCalculator.calculatorTrianglePerimeter(true, {})).toThrow();
            expect(() => figureCalculator.calculatorTrianglePerimeter([], null)).toThrow();
        });
        it('should return correct value based on triangle perimeter formula', () => {
            // Arrange
            const sideA = 20;
            const sideB = 30;
            const sideC = 20;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const figureCalculator = new FigureCalculator(MathBasic);

            // Action
            const result = figureCalculator.calculatorTrianglePerimeter(sideA, sideB, sideC);

            // Assert
            expect(spyAdd).toHaveBeenCalledWith(sideA, sideB);
            expect(spyAdd).toHaveBeenCalledWith(50, sideC);
            expect(result).toEqual(70)
        });
    });
    describe('A calculateTriangleArea', () => {
        it('should throw error when not given 3 parameters', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculatorTriangleArea()).toThrow();
            expect(() => figureCalculator.calculatorTriangleArea(1,2)).toThrow();
            expect(() => figureCalculator.calculatorTriangleArea(1,2,3,4,5)).toThrow();
        });
        it('should throw error when not given number parameter', () => {
            const figureCalculator = new FigureCalculator({});
            expect(() => figureCalculator.calculatorTriangleArea('1', '2')).toThrow();
            expect(() => figureCalculator.calculatorTriangleArea(true, {})).toThrow();
            expect(() => figureCalculator.calculatorTriangleArea([], null)).toThrow();
        });
        it('should return correct value based on triangle area formula', () => {
            // Arrange
            const sideA = 20;
            const sideB = 30;
            const sideC = 20;
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const spyDivide = jest.spyOn(MathBasic, 'divide');
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const figureCalculator = new FigureCalculator(MathBasic);

            // Action
            const result = figureCalculator.calculatorTriangleArea(sideA, sideB, sideC);

            // Assert
            expect(spyMultiply).toHaveBeenCalledWith(sideC, 50);
            expect(spyAdd).toHaveBeenCalledWith(sideB, sideA);
            expect(spyDivide).toHaveBeenCalledWith(1000, 2);
            expect(result).toEqual(500)
        });
    });


});