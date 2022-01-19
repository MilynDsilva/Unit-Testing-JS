const lib = require('../lib');

describe('absolute',()=>{
    
    it('should return a positive number if input is positive',()=> {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    it('should return a positive number if input is negative',()=> {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    it('should return a 0 number if input is 0',()=> {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });

});

describe('greet',()=>{
    it('should return the greeting function',()=>{
        const result = lib.greet('Codecraft');
        expect(result).toMatch(/Welcome/,/Codecraft/); //regex
        expect(result).toContain('!');
    })
});

describe('getCurrencies(array)',()=>{
    it('should return supported currencies',()=>{
        const result = lib.getCurrencies();

        //too general
        //expect(result).toBeDefined(); //will passeven if no curr is there 
        //expect(result).not.toBeNull();

        //too specific
        // expect(result[0]).toBe('USD'); //Must not
        // expect(result[1]).toBe('AUD');// If we change value in some index code will break
        // expect(result[2]).toBe('EUR');
        // expect(result.length).toBe(3);

        //proper way //by checkinG for the existence
        //expect(result).toContain('USD');

        //Ideal way
        expect(result).toEqual(expect.arrayContaining(['EUR','USD','AUD']));
    });
});

describe('getProduct(Object)',()=>{
    it('should return product with the given id',()=>{
        const result = lib.getProduct(1);
        //expect(result).toBe({id:1,price:10}); //checks memory location as well //hence test fails
        //expect(result).toEqual({id:1,price:10}); //fails if we att one more property to the object
        expect(result).toMatchObject({id:1,price:10}); //will pass if another property to same object is added
        // usefull if we fetch obj from some location 
        //expect(result).toHaveProperty('id','1');
    });
});

describe('registerUser',()=>{
    it(`should throw if username is falsy (null,undef,NaN,0,'',false`,()=>{
        //const result = lib.registerUser(null);
        const args = [null,undefined,NaN,'',0,false];
        args.forEach(a=>{
            expect(()=>{lib.registerUser(a);}).toThrow();
        });
       // expect(()=>{lib.registerUser(null);}).toThrow();
    });
    it('should return user object if valid username is passed',()=>{
        const result = lib.registerUser('Codecraft');
        expect(result).toMatchObject({username:"Codecraft"});
        expect(result.id).toBeGreaterThan(0);//positive
    });
});

// Testing exceptions 
// module.exports.registerUser = function(username) { 
//     if (!username) throw new Error('Username is required.');
  
//     return { id: new Date().getTime(), username: username }
// }

// Testing objects 
// module.exports.getProduct = function(productId) { 
//     return { id: productId, price: 10 };
// }

// Testing arrays 
// module.exports.getCurrencies = function() { 
//     return ['USD', 'AUD', 'EUR'];
// }

// module.exports.greet = function(name) { 
//     return 'Welcome ' + name; 
//   }

// test('absolute- should return a 0 number if input is 0',()=> {
//     const result = lib.absolute(0);
//     expect(result).toBe(0);
// });

//https://jestjs.io/docs/using-matchers

// Testing numbers 
// module.exports.absolute = function(number) {
//     if (number > 0) return number; 
//     if (number < 0) return -number; 
//     return 0; 
//   }

// test('First test',()=>{
//     throw new Error("Something failed")
// });

//https://facebook.github.io/jest/docs   //api section
