const Generator = {

    SEQUENCE_LIMIT : 15,

    values: [],

    factorial: function (num) {
        let fact = 1;
        for ( let n = 2; n <= num; n++ ) {
            fact = fact * n;
        }
        return fact;
    },

    factorialSeq: function () {
        let response  = [];

        const limit = Generator.SEQUENCE_LIMIT;

        for (let i = 0 ; i<limit ; i++){
            response.push(Generator.factorial(i));
        }
        return response;
    },

    fibonacci: function(number){
        //Fibonacci(n) = (1  —  Sqrt(5) ) / 2

        const sqRootOf5 = Math.sqrt(5);

        const Phi = (1+sqRootOf5)/2;
        const phi = (1-sqRootOf5)/2;

        return Math.round((Math.pow(Phi, number) - Math.pow(phi, number)) / sqRootOf5);
    },

    fibonacciSeq: function () {
        let response  = [];

        const limit = Generator.SEQUENCE_LIMIT;

        for (let i = 0 ; i<limit ; i++){
            response.push(Generator.fibonacci(i));
        }
        return response;
    },

    rangeSeq: function (start, step) {
        let response = [];
        const limit = Generator.SEQUENCE_LIMIT;
        for (let i = start; i <= step*limit; i+=step) {
            response.push(i);
        }
        return response;
    },

    generator: function(sequencer){
        let values ;
        let valuesLength;
        if(arguments[0].values){
            values = arguments[0].values;
            valuesLength = values.length;
        }else {
            let callback = arguments[0];
            let params = Array.from(arguments);
            params.shift();
            values = callback.apply(null, params);
            valuesLength = values.length;
        }
        // This function returns an object that implements the next() function
        // The next function is expected to return data in a specific format as you can see below
        return {

            length: valuesLength,

            index: 0,

            next() {
                // This function is automatically invoked by for-of loops
                if (this.index < this.length  ) {
                    // As long as you have a value
                    return values[this.index++];
                } else {
                    // When you are out of values
                    return "error";
                }
            }
        }
    },

};


export default Generator;
