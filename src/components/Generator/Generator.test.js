import React from 'react';
import Generator from './Generator';

describe('Generator.js', ()  => {

    it('generates factorial of a number', () => {
        const factorial = Generator.factorial(5);
        expect(factorial).toEqual(120);
    });

    it('generates a factorial sequence', () => {
        const factorialSequence = Generator.factorialSeq();
        expect(factorialSequence).toEqual(
            [ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880,
            3628800, 39916800, 479001600, 6227020800, 87178291200 ]
        );
    });

    it('generates a fibonacci of a number', () => {
        const fibonacci = Generator.fibonacci(11);
        expect(fibonacci).toEqual(89);
    });

    it('generates a fibonacci sequence', () => {
        const fibonacciSequence = Generator.fibonacciSeq();
        expect(fibonacciSequence).toEqual([
            0, 1, 1, 2, 3, 5, 8, 13, 21,
            34, 55, 89, 144, 233, 377
        ]);
    });

});
