import React from 'react';
import Generator from './Generator';

describe('Generator.js', ()  => {

    it('generates factorial of a number', () => {
        const factorial = Generator.factorial(5);
        expect(factorial).toEqual(120);
    });

});
