const { sum, rest } = require('../components/sum.js');

xtest('sumar 1 + 2 es igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});




xdescribe ("restas", () => {
    it ("si restamos 10 y 5 deberia darnos 5", () => {
      expect (rest(10, 5)).toBe(5);
    });
    it ("ver si hay numeros negativos", () => {
        expect (rest(5, 10)).toBeUndefined();
    });
    
  });









