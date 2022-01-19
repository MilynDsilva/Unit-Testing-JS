const exercise = require('../exercise1');

describe('Fizzbuzz',()=>{
    it('should throw error if input is not a number',()=>{
        //const result = exercise.fizzBuzz("a");
        args = ['a',null,undefined,{}];
        //expect(()=>{exercise.fizzBuzz("a");}).toThrow();
        args.forEach(element => {
            expect(()=>{exercise.fizzBuzz(element);}).toThrow();
        });
    });
    it('should return FizzBuzz if input is divisible by 3 and 5',()=>{
        const result = exercise.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });
    it('should return Fizz if input is divisible by 3',()=>{
        const result = exercise.fizzBuzz(3);
        expect(result).toBe('Fizz');
    });
    it('should return Buzz if input is divisible by 5',()=>{
        const result = exercise.fizzBuzz(5);
        expect(result).toBe('Buzz');
    });
});


// module.exports.fizzBuzz = function(input) { 
//     if (typeof input !== 'number') 
//       throw new Error('Input should be a number.');
      
//     if ((input % 3 === 0) && (input % 5) === 0)
//       return 'FizzBuzz';
  
//     if (input % 3 === 0)
//       return 'Fizz';
  
//     if (input % 5 === 0)
//       return 'Buzz'; 
  
//     return input; 
//   }