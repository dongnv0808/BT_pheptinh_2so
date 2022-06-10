import {BasicCalculator} from "../app"
describe('BasicCaculator testing', () => {
    let calc: BasicCalculator = new BasicCalculator();
    test('should return an instance of a basic calculator', () => {
        expect(calc).toEqual({});
    })
    test('should return the addition of a + b', () => {
        expect(calc.add(5,6)).toEqual(11);
    })
    test('should return the subtract of a - b', () => {
        expect(calc.subtract(5,3)).toEqual(2);
    })
    test('should return the multiple of a * b', () => {
        expect(calc.multiple(5,6)).toEqual(30);
    })
    test('should return the divide of a / b', () => {
        expect(calc.divide(10,5)).toEqual(10/5);
    })
})