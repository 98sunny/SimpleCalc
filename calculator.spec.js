// test suite->Group of tests
describe('Calculator.js',function(){
    it('should add number to the total variable',function(){
        const calculator = new Calculator();
        calculator.add(5);
        //expect total to be 5
        expect(calculator.total).toBe(5);
    });
    it('should subtract number from the total variable',function(){

    });
    it('should multiply number from the total variable',function(){

    });
    it('should divide total variable',function(){

    });
});
