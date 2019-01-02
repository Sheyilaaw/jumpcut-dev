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

    it('generates a range sequence', () => {
        const rangeSequence = Generator.rangeSeq(1,5);
        expect(rangeSequence).toEqual([
            1, 6, 11, 16, 21, 26, 31, 36,
            41, 46, 51, 56, 61, 66, 71
        ]);
    });

    it('checks if it is a prime number', () => {
        const isPrimeNumber = Generator.isPrime(11);
        expect(isPrimeNumber).toEqual(true);
    });

    it('generates a sequence of prime numbers', () => {
        const primeSequence = Generator.primeSeq();
        expect(primeSequence).toEqual([
            0, 1, 2, 3, 5, 7, 11, 13, 17,
            19, 23, 29, 31, 37, 41, 43
        ]);
    });



});
