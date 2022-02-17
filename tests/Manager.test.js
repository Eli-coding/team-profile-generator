const { TestWatcher } = require("jest");
const Manager = require ( "../lib/Manager") ;

describe("Manager", () =>{
    test ("Getting the correct name.", ()=>{
        let example = new Manager ("Luisa", 4, "luisa@gmail.com", 297);
        expect(example.getName()).toBe("Luisa");
    }) 

    test ("Getting the correct id.", ()=>{
        let example = new Manager ("Luisa", 4, "luisa@gmail.com", 297);
        expect(example.getId()).toBe(4);
    }) 

})
