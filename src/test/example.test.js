//Testeamos la palabra null 

xdescribe ("null", () => {
    
  test(' 1', () => {
    const n = null;
    expect(n).toBeNull();
 
  });

  test(' 2', () => {
    const n = null;
    expect(n).toBeDefined();
 
  });
  test(' 3', () => {
    const n = null;
    expect(n).not.toBeUndefined();

  });
  test(' 4', () => {
    const n = null;
    expect(n).not.toBeTruthy();
  });
  test(' 5', () => {
    const n = null;
    expect(n).toBeFalsy();
  });

});


describe ("toBe", () => {
    xit ("identico", () => {
      const jest = "Clase de LarnU jest"
      const clase = 90
      expect (jest).toBe("Clase de LarnU jest")
      expect (clase).toBe(90)
    })
    xit("toEqual", () => {
      const objetos = { clase: "jest", numero: 90, alumnosPresenciales: 3 }
      expect(objetos).toEqual({ clase: "jest", numero: 90, alumnosPresenciales: 3 })
    })
})
  
  
    it ("toBeCloseTo", () => {
        expect(15.954545).toBeCloseTo(15.9545, 2);
       
    })