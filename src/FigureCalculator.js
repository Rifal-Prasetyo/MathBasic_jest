class FigureCalculator{
    constructor(mathBasic){
        this._mathBasic = mathBasic;
    }
    calculateRectanglePerimeter(...args) {
        if(args.length !== 2) {
            throw new Error('fungsi ini hanya menerima 2 parameter');
        }
        const [lenght, height] = args;
        if(typeof lenght !== 'number' && typeof height !== 'number'){
            throw new Error('fungsi ini hanya menerima number parameter');
        }

        return this._mathBasic.multiply(2, this._mathBasic.add(lenght, height))
    }
    calculatorRectangleArea(...args) {
        if(args.length !== 2) {
            throw new Error(`fungsi ini hanya menerima 2 parameter`);
        }
        const [lenght, height] = args;
        if(typeof lenght  !== 'number' && typeof height !== 'number') {
            throw new Error('fungsi ini hanya menerima number parameter');
        }
        return this._mathBasic.multiply(lenght, height);
    }
    calculatorTrianglePerimeter(...args){
        if(args.length !== 3) {
            throw new Error('fungsi ini hanya menerima 3 parameter');
        }
        const [sideA, sideB, sideC] = args;
        if(args.some((arg) => typeof arg !== 'number')) {
            throw new Error('fungsi ini hanya menerima number parameter');
        }
        return this._mathBasic.add(this._mathBasic.add(sideA, sideB), sideC);
    }
    calculatorTriangleArea(...args){
        if(args.length !== 3) {
            throw new Error('fungsi ini hanya menerima 3 parameter');
        }
        const [sideA, sideB, sideC] = args;
        if(args.some((arg) => typeof arg !== 'number')) {
            throw new Error('fungsi ini hanya menerima number parameter');
        }
        return this._mathBasic.divide(this._mathBasic.multiply(sideC, this._mathBasic.add(sideB, sideA)), 2);
    }
}
module.exports = FigureCalculator;