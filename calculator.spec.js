// test suite->Group of tests
describe('Calculator.js',function(){
    it('should add number to the total variable',function(){
        const calculator = new Calculator();
        calculator.add(5);
        //expect total to be 5
        expect(calculator.total).toBe(5);
        expect(10).toBe(19);
    });
    it('should subtract number from the total variable',function(){
        const calculator = new Calculator();
        calculator.total = 50;
        calculator.subtract(10);
        expect(calculator.total).toBe(40);
    });
    it('should multiply number from the total variable',function(){
        const calculator = new Calculator();
        calculator.total =5;
        calculator.multiply(5);
        expect(calculator.total).toBe(25)

    });
    it('should divide total variable',function(){
        calculator = new Calculator();
        calculator.total=10;
        calculator.divide(2);
        expect(calculator.total).toBe(5);
    });
});
